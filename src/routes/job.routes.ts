import { Router } from "express";
import { createJob, getJobs } from "../controllers/jobs.controller";

const router = Router()

router.get('/', getJobs)
router.post('/', createJob)



export default router