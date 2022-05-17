declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      PORT: number
      API_VERSION: number
      IP_SERVER: String

      DB_CONNECTION: string
      DB_HOST: string
      DB_PORT: number
      DB_DATABASE: string
      DB_USERNAME: string
      DB_PASSWORD: string
    }
  }
}
export { }