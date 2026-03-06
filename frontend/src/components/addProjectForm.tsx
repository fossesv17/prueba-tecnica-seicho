import { useState } from "react";
import { createProject } from "../api"

export default function AddProjectForm() {
  const [name, setName] = useState("");
  const [client, setClient] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = () => {
    createProject({ name, client, startDate, endDate })
      .then((data) => {
        console.log("Project created:", data);
        setName("");
        setClient("");
        setStartDate("");
        setEndDate("");
      });
  };

  return (
    <div className="ProjectForm">
      <label>Nombre del proyecto
        <input type="text" placeholder="Nombre del proyecto" value={name}
          onChange={(e) => setName(e.target.value)} />
      </label>
      <label>Cliente
        <input type="text" placeholder="Cliente" value={client}
          onChange={(e) => setClient(e.target.value)} />
      </label>
      <label>Fecha de inicio
        <input type="date" value={startDate}
          onChange={(e) => setStartDate(e.target.value)} />
      </label>
      <label>Fecha de termino
        <input type="date" value={endDate}
          onChange={(e) => setEndDate(e.target.value)} />
      </label>

      <button onClick={handleSubmit}>Crear proyecto</button>
    </div>
  );
}