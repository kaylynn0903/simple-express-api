import { Pool } from "pg"

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  password: process.env.POSTGRES_PASSWORD,
  user: process.env.POSTGRES_USER,
  idleTimeoutMillis: Number(process.env.POSTGRES_POOL_IDLE_TIMEOUT),
  database: process.env.POSTGRES_DB,
  max: Number(process.env.POSTGRES_POOL_MAX),
  connectionTimeoutMillis: Number(process.env.POSTGRES_POOL_CONNECTION_TIMEOUT),
})

pool.on("error", (err: Error, _client: any) => {
  console.log(`DB Pool Error:\n${err.message}\n${err.stack}`)
})

export default pool
