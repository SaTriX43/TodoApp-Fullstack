import express from 'express'
import cors from 'cors'
import TodoRoutes from './routes/TodoRoutes.mjs'

const app = express()

const corsOptions = {
  origin: ['http://localhost:3000', 'https://upbeat-playfulness-production.up.railway.app'], // Orígenes permitidos
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
  credentials: true, // Permitir cookies
  preflightContinue: false, // No seguir después de manejar preflight
  optionsSuccessStatus: 204, // Código de éxito para OPTIONS
};


app.use(cors(corsOptions));
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