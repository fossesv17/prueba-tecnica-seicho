import { v4 as uuid } from "uuid";
import { Request, Response } from "express";
import { readDB, writeDB } from "../db/database";
import { Worker } from "../entities/worker";

export function getWorkers(req: Request, res: Response) {
    const db = readDB();
    res.json(db.workers);
}

export function getWorkerById(req: Request, res: Response) {
    const db = readDB();
    const worker = db.workers.find((w) => w.id === req.body.id);
    res.status(200).json(worker);
}

export function createWorker(req: Request, res: Response) {
    const db = readDB();

    const newWorker : Worker = { id: uuid(), ...req.body };
    db.workers.push(newWorker);

    writeDB(db);
    res.status(201).json(newWorker);
}