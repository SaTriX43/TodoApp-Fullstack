// db.mjs
import pg from 'pg'; // Usa desestructuración
import 'dotenv/config';

const pool = new pg.Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432, // Valor por defecto
});

export default pool