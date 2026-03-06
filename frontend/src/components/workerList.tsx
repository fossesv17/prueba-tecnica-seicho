import { useEffect, useState } from "react"
import { Worker } from "../../../backend/src/entities/worker"
import { getProjectWorkers } from "../api";

export default function WorkerList({ projectId } : { projectId : string }) {
    const [ assignedWorkers, setAssignedWorkers ] = useState<Worker[]>([]);

    useEffect(() =>{
        getProjectWorkers(projectId)
        .then((data) => {
            console.log(data);
            setAssignedWorkers(data);
        })
    }, []);

    return (
        <div className="Workers">
                <h2>Trabajadores asignados</h2>
                { assignedWorkers.length === 0 ? (
                    <h3>No hay trabajadores asignados</h3>
                ) : (
                    assignedWorkers.map((worker) => (
                        <div 
                        key={worker.id}
                        >
                            <p>{worker.name} - {worker.role} {worker.seniority}</p>
                        </div>
                    ))
                )}
        </div>
    )
}