import express from 'express'
import { TodoGet, TodoPost } from '../controllers/TodoControllers.mjs'

const router = express.Router()


router.get('/',TodoGet)
router.post('/',TodoPost)

export default router
