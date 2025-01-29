import express from 'express'
import cors from 'cors'
import TodoRoutes from './routes/TodoRoutes.mjs'

const app = express()

app.options('*', cors());

app.use(cors({
  origin: (origin, callback) => {
    const allowedOrigins = [
      'http://localhost:3000',
      'https://todo-app-fullstack-theta.vercel.app'
    ];
    
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS not allowed'));
    }
  },
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization,X-User-Id',
  credentials: true
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