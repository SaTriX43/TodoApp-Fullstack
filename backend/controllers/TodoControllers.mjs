import pool from "../db.mjs"


export async function TodoGet(req,res) {
  try {
    const {rows} = await pool.query(`SELECT * FROM tareas`)

    console.log(rows)
    res.json(rows)
  } catch (error) {
    res.status(500)
    .json({error: `A ocurrido un error en la peticion get de tareas en el backend = ${error.message}`})
  }
}