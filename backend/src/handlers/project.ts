import { v4 as uuid } from "uuid";
import { Request, Response } from "express";
import { readDB, writeDB } from "../db/database";
import { Project } from "../entities/project";

export function getAllProjects(req: Request, res: Response) {
    const db = readDB();
    res.status(200).json(db.projects);
}

export function getProjectById(req: Request, res: Response) {
    const db = readDB();
    const project = db.projects.find((p) => p.id === req.params.id);
    res.status(200).send(project);
}

export function createProject(req: Request, res: Response) {
    const db = readDB();

    const newProject : Project = { id: uuid(), workerIds: [], ...req.body }
    db.projects.push(newProject);
    writeDB(db);
    res.status(201).send(newProject);
}

export function assignWorker(req: Request, res: Response) {
    const db = readDB()
    const projectId = req.body.projectId;
    const workerId = req.body.workerId;
    const project = db.projects.find((p) => p.id === projectId);
    project.workerIds.push(workerId);
    writeDB(db);
    res.status(200).json(project) 
}

export function getAssignedWorkers(req: Request, res: Response) {
    const db = readDB();
    const project = db.projects.find((p) => p.id === req.params.id);
    const workers = db.workers.filter((worker) => project.workerIds.includes(worker.id));
    res.status(200).json(workers);
}