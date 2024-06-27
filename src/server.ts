import express from 'express'
import 'dotenv/config'
import jobsRouter from './routes/job.routes'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
const PORT = process.env.PORT

app.get('/api/jobs', jobsRouter)

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})