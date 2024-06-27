"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteJob = exports.updateJob = exports.getJobById = exports.createJob = exports.getJobs = void 0;
const jobs_model_1 = __importDefault(require("../models/jobs.model"));
const getJobs = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jobs = yield jobs_model_1.default.find({});
        return response.status(200).json({ message: "Jobs Fetched Successfully", jobs });
    }
    catch (error) {
        return response.status(500).json({ message: "Can not fetch jobs", error });
    }
});
exports.getJobs = getJobs;
const createJob = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = request.body;
        const job = yield jobs_model_1.default.create(payload);
        return response.status(201).json({ message: "Job Created Successfully", job });
    }
    catch (error) {
        return response.status(500).json({ message: "Can not create job", error });
    }
});
exports.createJob = createJob;
const getJobById = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = request.params.id;
        const job = yield jobs_model_1.default.findById(id);
        if (!job)
            return response.status(404).json({ message: "Job does not exist" });
        return response.status(201).json({ message: "Job Fetched Successfully", job });
    }
    catch (error) {
        return response.status(500).json({ message: "Can not fetch job", error });
    }
});
exports.getJobById = getJobById;
const updateJob = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = request.body;
        const id = request.params.id;
        const job = yield jobs_model_1.default.findByIdAndUpdate(id, payload);
        if (!job)
            return response.status(404).json({ message: "Job does not exist" });
        const updatedJob = yield jobs_model_1.default.findById(id);
        return response.status(201).json({ message: "Job Updated Successfully", updatedJob });
    }
    catch (error) {
        return response.status(500).json({ message: "Can not update job", error });
    }
});
exports.updateJob = updateJob;
const deleteJob = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = request.params.id;
        const job = yield jobs_model_1.default.findByIdAndDelete(id);
        if (!job)
            return response.status(404).json({ message: "Job does not exist" });
        return response.status(200).json({ message: "Job Deleted Successfully" });
    }
    catch (error) {
        return response.status(500).json({ message: "Can not delete job", error });
    }
});
exports.deleteJob = deleteJob;
