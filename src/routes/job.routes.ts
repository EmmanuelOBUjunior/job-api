import { Router } from "express";
import { getJobs } from "../controllers/jobs.controller";

const router = Router()

router.get('/', getJobs)
router.get('/', createJob)



export default router