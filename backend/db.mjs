// db.mjs
import pg from 'pg'; // Usa desestructuración
import 'dotenv/config';

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {rejectUnauthorized: true} ,
});

export default pool