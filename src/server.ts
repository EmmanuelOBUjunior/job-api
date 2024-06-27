import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import jobsRouter from './routes/job.routes'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL! 

app.get('/api/jobs', jobsRouter)

mongoose.connect(MONGO_URL).then(()=>{
    console.log('Connected to MongoDB')
    app.listen(PORT, ()=>{
        console.log(`Server running on port ${PORT}`)
    })
}).catch((err)=> console.log("Failed to connect to database", err))