import express from "express";
import api from './routes/index.js'
import dotenv from 'dotenv'
import mongoose from "mongoose";
import cors from "cors";

dotenv.config()
mongoose.connect("mongodb+srv://yazhinidhanapal7:Yazhini24@sprint-board-creation.jwybe.mongodb.net/", () => {
    console.log('connect');
}, (e) => console.log(e))


const PORT = process.env.SERVER_PORT || 9000
const origin = process.env.CORS_ORIGIN || "http://localhost:3000"

const app = express()

app.use(cors({
    origin
}));
app.use(express.json())
app.use(express.urlencoded())

app.use(api)

app.listen(PORT, () => {
    console.log(`Your app is running in http://localhost:${PORT}`)
})