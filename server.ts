import express from 'express'
import { Request, Response } from 'express-serve-static-core'
import mongoose from 'mongoose'
import 'dotenv/config'
import cors from 'cors'
import jobsRouter from './src/routes/job.routes'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

const PORT = 5000
const MONGO_URL = process.env.MONGO_URL! 

app.get('/', (request:Request, response:Response) =>{
    response.send("Hello There")
})

app.use('/api/jobs', jobsRouter)

mongoose.connect(MONGO_URL).then(()=>{
    console.log('Connected to MongoDB')
    app.listen(PORT, ()=>{
        console.log(`Server running on port ${PORT}`)
    })
}).catch((err)=> console.log("Failed to connect to database", err))