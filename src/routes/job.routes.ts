import { Router } from "express";
import { createJob, getJobById, getJobs, updateJob } from "../controllers/jobs.controller";

const router = Router()

router.get('/', getJobs)
router.get('/:id', getJobById)
router.post('/', createJob)
router.put('/:id', updateJob)



export default router