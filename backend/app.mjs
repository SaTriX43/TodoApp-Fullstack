import express from 'express'
import cors from 'cors'
import TodoRoutes from './routes/TodoRoutes.mjs'

const app = express()
app.use(cors({
  origin: [
    "https://todoapp-fullstack-production-132c.up.railway.app", // URL correcta del frontend
    "http://localhost:3000"
  ]
}));
app.use(express.json())

app.use('/api/tareas',TodoRoutes)


// para las rutas que no coincidan 
app.use((req ,res) => {
  res.status(404).json(`Ruta ${req.url} no encontrada`)
})


const PUERTO = process.env.PORT || 4000


app.listen(PUERTO, () => {
  console.log('Puerto escuchado')
})