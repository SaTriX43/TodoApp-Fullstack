import express from 'express'
import cors from 'cors'
import TodoRoutes from './routes/TodoRoutes.mjs'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/tareas',TodoRoutes)


// para las rutas que no coincidan 
app.use((req ,res) => {
  res.status(404).json(`Ruta ${req.url} no encontrada`)
})


const PUERTO = process.env.PORT || 4000


app.listen(PUERTO, () => {
  console.log('Puerto escuchado')
})