import { Worker } from "../../backend/src/entities/worker";
import { Project } from "../../backend/src/entities/project";

const BASE_URL = "http://localhost:5000/api";

export function getWorkers() {
    return fetch(`${BASE_URL}/workers`)
    .then((res) => res.json())
}

export function getWorker(workerId: string) {
    const params = new URLSearchParams({ id : workerId })
    return fetch(`${BASE_URL}/workers?${params.toString()}`)
    .then((res) => {
        res.json();
    }) 
}

export function getProjectWorkers(projectId : string) {
    return fetch(`${BASE_URL}/projects/${projectId}/workers`)
    .then((res) => res.json()); 
}

export function createWorker(payload: Omit<Worker, "id">) {
    return fetch(`${BASE_URL}/workers`, {
        method : "POST",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify(payload),
    }).then((res) => res.json());
}

export function getProjects() {
    return fetch(`${BASE_URL}/projects`)
    .then((res) => res.json())
}

export function createProject(payload: Omit<Project, "id" | "workerIds">) {
    return fetch(`${BASE_URL}/projects`, {
        method : "POST",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify(payload),
    }).then((res) => res.json());
}

export function assignWorker({ workerId , projectId } : { workerId : string, projectId : string }) {
    const payload = { workerId : workerId, projectId : projectId };
    return fetch(`${BASE_URL}/projects/assignWorker`, {
        method : "POST",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify(payload),
    }).then((res) => res.json());
}