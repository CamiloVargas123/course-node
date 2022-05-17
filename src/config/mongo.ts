import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "./const";

const dbConnect = async () => {
  await mongoose.connect(DB_URI, {}, (err) => {
    if (!err) {
      console.log("==== CONEXION DB SUCCESS ====")
      if(NODE_ENV === "development") console.log(DB_URI)
    } else {
      console.log("**** ERROR CONEXION ****")
      throw err
    }
  })
}
export { dbConnect }