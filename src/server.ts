import express from 'express'
import 'dotenv/config'
const app = express()

app.use(express.json())
const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})