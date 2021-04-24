import express from 'express'
import request from "./buildQuery.js"
import dotenv from "dotenv"
dotenv.config()

const app = express()
const port = 3001
const apiKey = process.env.API_KEY

// Main route
app.get("/api", async function(req, res){
    const city = req.query.city
    const jsonData = await request(city, apiKey) 
    res.send(jsonData)
})

app.listen(port)