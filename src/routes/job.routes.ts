import { Router } from "express";
import { createJob, getJobById, getJobs } from "../controllers/jobs.controller";

const router = Router()

router.get('/', getJobs)
router.get('/:id', getJobById)
router.post('/', createJob)



export default router