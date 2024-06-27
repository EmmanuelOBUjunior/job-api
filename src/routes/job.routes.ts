import { Router } from "express";
import { createJob, deleteJob, getJobById, getJobs, updateJob } from "../controllers/jobs.controller";

const router = Router()

router.get('/', getJobs)
router.get('/:id', getJobById)
router.post('/', createJob)
router.put('/:id', updateJob)
router.delete('/:id', deleteJob)



export default router