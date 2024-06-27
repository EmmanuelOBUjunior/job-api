import express from 'express'
import 'dotenv/config'
const app = express()

app.use(express.json())
app.use(express.urlencoded())
const PORT = process.env.PORT

app.get('/api/jobs', jobsRouter)

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})