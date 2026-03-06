import { useState, useEffect } from "react";
import { getProjects } from "../api";
import { Project } from "../../../backend/src/entities/project"
import Modal from "../components/modal"
import AddProjectForm from "../components/addProjectForm";
import AssignWorkerForm from "../components/assignWorkerForm";
import WorkerList from "../components/workerList";

export default function ProjectPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [showAssignModal, setShowAssignModal] = useState(false);
    const [showAssignedWorkers, setShowAssignedWorkers] = useState(false);
    

    useEffect(() => {
        getProjects()
        .then((data) => {
            console.log(data);
            setProjects(data);
        })
    })

    return (
        <div>
            <div className="Projects">
                <h2>Proyectos</h2>
                { projects.length === 0 ? (
                    <h3>No hay proyectos</h3>
                ) : (
                    projects.map((project) => (
                        <div className="Info" key={project.id}>
                            <div className="MoreInfo" onClick={() => setShowAssignedWorkers(true)}>
                                <p>{project.name} - {project.client}</p>
                            </div>
                            { showAssignedWorkers && (
                                <Modal onClose={() => setShowAssignedWorkers(false)}>
                                    <WorkerList projectId={project.id}></WorkerList>
                                </Modal>
                            )}
                            <div className="AssignButton"
                                onClick={() => setShowAssignModal(true)}
                            >
                                <p><strong>Asignar trabajador +</strong></p>
                            </div>
                            { showAssignModal && (
                                <Modal onClose={() => setShowAssignModal(false)}>
                                    <AssignWorkerForm projectId={project.id}></AssignWorkerForm>
                                </Modal>
                            )}
                        </div>
                    ))
                )}
            </div>
            <div className="addProject">
                { !showModal && (
                    <button onClick={() => setShowModal(true)}>Crear nuevo proyecto</button>
                ) }
                { showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <AddProjectForm></AddProjectForm>
                    </Modal>
                )}
            </div>
        </div>
    )
}