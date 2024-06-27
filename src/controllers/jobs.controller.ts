import { Request, Response } from "express-serve-static-core"
import Job from "../models/jobs.model"

export const getJobs = async(request:Request, response:Response) => {
    try {
        const jobs = await Job.find({})
        return response.status(200).json({message: "Jobs Fetched Successfully", jobs})
    } catch (error) {
        return response.status(500).json({message: "Can not fetch jobs", error})
    }

}

export const createJob = async(request:Request, response:Response) => {
    try {
        const payload = request.body
        const job = await Job.create(payload)
        return response.status(201).json({message: "Job Created Successfully", job})
    } catch (error) {
        return response.status(500).json({message: "Can not create job", error})
    }
}

export const getJobById = async(request:Request<{id:string}>, response:Response) => {
    try{
        const id = request.params.id
        const job = await Job.findById(id)
        if(!job) return response.status(404).json({message: "Job does not exist"})
        return response.status(201).json({message: "Job Fetched Successfully", job})
    }catch(error){
        return response.status(500).json({message: "Can not fetch job", error})
    }
}