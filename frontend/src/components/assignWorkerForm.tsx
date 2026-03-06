import { Worker } from "../../../backend/src/entities/worker"
import { useState, useEffect } from "react";
import { getWorkers, assignWorker } from "../api";

export default function AssignWorkerForm({ projectId } : { projectId : string }) {
    const [workers, setWorkers] = useState<Worker[]>([]);
    const [assignedWorkers, setAssignedWorkers] = useState<string[]>([]);
    
    const toggleWorker = (id: string) => {
        setAssignedWorkers((prev) => 
            prev.includes(id)
            ? prev.filter((wid) => wid !== id)
            : [...prev, id]
        );
    };

    const handleSubmit = () => {
        assignedWorkers.forEach((workerId : string) => {
            assignWorker({workerId, projectId})
            .then((data) => {
                console.log(data);
                setAssignedWorkers([]);
            })
        });
    }
    
    useEffect(() => {
        getWorkers()
        .then((data) => {
            setWorkers(data);
        })
    }, []);

    return (
        <div className="Workers">
                <h2>Trabajadores</h2>
                { workers.length === 0 ? (
                    <h3>No hay trabajadores</h3>
                ) : (
                    workers.map((worker) => (
                        <div 
                        className="AssignInfo" 
                        key={worker.id}
                        onClick={() => toggleWorker(worker.id) }
                        style={{border: assignedWorkers.includes(worker.id)
                        ? "2px solid #5e5757"
                        : "2px solid transparent"}}
                        >
                            <p>{worker.name} - {worker.role}</p>
                            <p>{worker.seniority}</p>
                        </div>
                    ))
                )}
                <div>
                    <button onClick={handleSubmit}>Asignar trabajadores</button>
                </div>
        </div>
    )
}