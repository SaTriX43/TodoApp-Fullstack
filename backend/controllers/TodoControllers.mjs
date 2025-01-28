import pool from "../db.mjs"

// metodo get 
export async function TodoGet(req,res) {
  try {
    const {rows} = await pool.query(`SELECT * FROM tareas2`)

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

    await pool.query(`INSERT INTO tareas2 (tarea, marcada) VALUES ($1, $2)`,[tarea, false])

    res.status(200).send()
  } catch (error) {
    res.status(500).json({error:`A ocurrido un error en el metodo Post backend= ${error.message}`})
  }
}


// metodo DELETE
export async function TodoDelete(req,res) {
  try {
    const {id} = req.params

    const resultado = await pool.query(`DELETE FROM tareas2 WHERE id = $1`,[id])

    if (resultado.rowCount === 0) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }

    res.status(200).send()
  } catch (error) {
    res.status(500).json({error:`A ocurrido un error en el metodo Post backend= ${error.message}`})
  }
}


// metodo PUT
export async function TodoPut(req,res) {
  try {
    const {id} = req.params
    const {tarea} = req.body

     await pool.query(`UPDATE tareas2 SET tarea = $1 WHERE id = $2 `, [tarea, id])


    res.status(200).send()
  } catch (error) {
    res.status(500).json({error:`A ocurrido un error en el metodo Post backend= ${error.message}`})
  }
}