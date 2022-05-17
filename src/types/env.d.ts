declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HOST?: string,
      NODE_ENV: 'development' | 'production'
      PORT: number
      DB_URI: string
      API_VERSION: number
    }
  }
}
export {}