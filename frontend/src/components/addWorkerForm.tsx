import { useState } from "react"
import { createWorker } from "../api";
import { Worker } from "../../../backend/src/entities/worker"

export default function AddWorkerForm() {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [seniority, setSeniority] = useState("junior");

    const handleSubmit = () => {
        createWorker({ name, role, seniority: seniority as Worker["seniority"] })
        .then((data) => {
            console.log("Worker created:", data);
            setName("");
            setRole("");
            setSeniority("junior");
        });
    };

    return (
        <div className="WorkerForm">
            <label>Nombre
                <input type="text" placeholder="Nombre" value={name}
                    onChange={(e) => setName(e.target.value)} />
            </label>
            <label>Rol
                <input type="text" placeholder="Rol" value={role}
                onChange={(e) => setRole(e.target.value)} />
            </label>

            <div className="RadioGroup">
                {["junior", "mid", "senior"].map((option) => (
                <label key={option}>
                    <input type="radio" value={option}
                    checked={seniority === option}
                    onChange={(e) => setSeniority(e.target.value)} />
                    {option}
                </label>
                ))}
            </div>
            <button onClick={handleSubmit}>Añadir trabajador</button>
        </div>
    )
}