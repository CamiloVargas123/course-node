import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { dbConnect } from "./config/mongo"
import router from "./app/routes"
import { API_VERSION, NODE_ENV, PORT } from "./config/const"

dotenv.config({ path: "../.env" })

const app = express()
app.use(cors())
app.use(express.json())

app.use(`/api/${API_VERSION}`, router)

dbConnect()
app.listen(PORT, () => {
  if(NODE_ENV === "development"){
    console.log("##############################")
    console.log("## API REST")
    console.log(`## API Version:${API_VERSION}`)
    console.log(`## Ready on port:${PORT}`)
  }
})