import pool from "../db.mjs"

// metodo get 
export async function TodoGet(req,res) {
  try {
    const userId = req.headers['X-User-Id']
    const {rows} = await pool.query(`SELECT * FROM tareas WHERE userId = $1`,[userId])
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
    const userId = req.headers['X-User-Id']

    await pool.query(`INSERT INTO tareas (tarea, marcada, userId) VALUES ($1, $2, $3)`,[tarea, false, userId])

    res.status(200).send()
  } catch (error) {
    res.status(500).json({error:`A ocurrido un error en el metodo Post backend= ${error.message}`})
  }
}


// metodo DELETE
export async function TodoDelete(req,res) {
  try {
    const {id} = req.params
    const userId = req.headers['X-User-Id']

    const resultado = await pool.query(`DELETE FROM tareas WHERE id = $1 AND userId = $2`,[id, userId])

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
    const userId = req.headers['X-User-Id']

     await pool.query(`UPDATE tareas SET tarea = $1 WHERE id = $2 AND userId = $3 `, [tarea, id, userId])


    res.status(200).send()
  } catch (error) {
    res.status(500).json({error:`A ocurrido un error en el metodo Post backend= ${error.message}`})
  }
}