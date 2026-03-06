import { Router } from "express";
import { getWorkerById, getWorkers, createWorker } from "../handlers/worker";

const router = Router();

router.get("/", getWorkers);
router.get(":id", getWorkerById);
router.post("/", createWorker);

export default router;