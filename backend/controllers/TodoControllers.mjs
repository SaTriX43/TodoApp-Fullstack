import pool from "../db.mjs"

// metodo get 
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


// metodo post 
export async function TodoPost(req,res) {
  try {
    const {tarea} = req.body

    pool.query(`INSERT INTO tareas (tarea) VALUES ($1)`,[tarea])

    res.json({mensaje:`Su tarea fue creada con exito`})
  } catch (error) {
    res.status(500).json({error:`A ocurrido un error en el metodo Post backend= ${error.message}`})
  }
}