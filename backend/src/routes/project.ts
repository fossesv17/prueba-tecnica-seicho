import { Router } from "express";
import { getAllProjects, getProjectById, createProject, assignWorker, getAssignedWorkers } from "../handlers/project";

const router = Router();

router.get("/", getAllProjects);
router.get("/:id", getProjectById);
router.post("/", createProject);
router.post("/assignWorker", assignWorker);
router.get("/:id/workers", getAssignedWorkers);

export default router;