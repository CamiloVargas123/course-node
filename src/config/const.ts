import "dotenv/config";

const API_VERSION = process.env.API_VERSION || "v1"
const IP_SERVER = process.env.IP_SERVER || "localhost"
const PORT = process.env.PORT || 3000
const DB_URI = `${process.env.DB_CONNECTION || 'mongodb'}://${process.env.DB_HOST || 'localhost'}:${process.env.DB_PORT || 27017}/${process.env.DB_DATABASE || 'node-course'}`
const NODE_ENV = process.env.NODE_ENV

export {
  API_VERSION,
  IP_SERVER,
  PORT,
  DB_URI,
  NODE_ENV
}