import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"
import { test } from "./backend/controllers/studentsController.js"

dotenv.config()

mongoose.connect(process.env.url)
    .then(() => {
        console.log('La conexion funciona :D')
    })
    .catch((err) => {
        console.log('Esta conexion ni jala :(')
    })

const app = express()
app.use(cors())

app.listen(4000, () => {
    console.log('Al menos el servidor si sirve :)')
})

test()