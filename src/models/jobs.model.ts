import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    type:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required:true
    }
},{
    timestamps:true
})