import express from 'express'
import { TodoDelete, TodoGet, TodoPost } from '../controllers/TodoControllers.mjs'

const router = express.Router()


router.get('/',TodoGet)
router.post('/',TodoPost)
router.delete('/:id',TodoDelete)

export default router
