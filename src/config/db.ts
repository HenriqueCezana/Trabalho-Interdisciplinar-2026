import mysql, { Pool } from "mysql2/promise";

const pool: Pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || "tsi",
  password: process.env.DB_PASSWORD || "12345",
  database: process.env.DB_NAME || "valorant_db",
  waitForConnections: true,
  connectionLimit: 10,
});

export async function testConnection(): Promise<void> {
  const connection = await pool.getConnection();
  console.log("Conectado ao banco de dados com sucesso.");
  connection.release();
}

export default pool;