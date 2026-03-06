import { useState, useEffect } from "react";
import { getWorkers } from "../api";
import { Worker } from "../../../backend/src/entities/worker"
import Modal from "../components/modal"
import AddWorkerForm from "../components/addWorkerForm";

export default function ProjectPage() {
    const [workers, setWorkers] = useState<Worker[]>([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        getWorkers()
        .then((data) => {
            setWorkers(data);
        })
    })

    return (
        <div>
            <div className="Workers">
                <h2>Trabajadores</h2>
                { workers.length === 0 ? (
                    <h3>No hay trabajadores</h3>
                ) : (
                    workers.map((worker) => (
                        <div className="Info" key={worker.id}>
                            <p>{worker.name} - {worker.role}</p>
                            <p>{worker.seniority}</p>
                        </div>
                    ))
                )}
            </div>
            <div className="addWorker">
                { !showModal && (
                    <button onClick={() => setShowModal(true)}>Añadir trabajador</button>
                ) }
                { showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <AddWorkerForm></AddWorkerForm>
                    </Modal>
                )}
            </div>
        </div>
    )
}