import { Pool } from "pg"

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  password: process.env.DB_PASSWORD,
  user: process.env.DB_USERNAME,
  idleTimeoutMillis: Number(process.env.DB_POOL_IDLE_TIMEOUT),
  database: process.env.DB_DATABASE,
  max: Number(process.env.DB_POOL_MAX),
  connectionTimeoutMillis: Number(process.env.DB_POOL_CONNECTION_TIMEOUT),
})

pool.on("error", (err: Error, _client: any) => {
  console.log(`DB Pool Error:\n${err.message}\n${err.stack}`)
})

export default pool
