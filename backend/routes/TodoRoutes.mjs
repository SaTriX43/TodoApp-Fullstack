import express from 'express'
import { TodoGet } from '../controllers/TodoControllers.mjs'

const router = express.Router()


router.get('/',TodoGet)


export default router
