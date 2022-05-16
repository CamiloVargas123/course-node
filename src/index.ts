import express from "express"
import dotenv from "dotenv"
import {resolve} from 'path'

dotenv.config({path: resolve(__dirname, "../.env")})

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000

app.get('/ping', (_, res) => {
  console.log("ping....")
  res.send("pong")
})

app.listen(PORT, () => {
  console.log(`Server listennes of port ${PORT}`)
})