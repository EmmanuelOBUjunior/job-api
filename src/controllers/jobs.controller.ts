import { Request, Response } from "express-serve-static-core"
import Job from "../models/jobs.model"

export const getJobs = async(request:Request, response:Response)=>{
    try {
        const jobs = await Job.find({})
        return response.status(200).json({message: "Jobs Fetched Successfully", jobs})
    } catch (error) {
        return response.status(500).json({message: "Can not fetch jobs", error})
    }

}