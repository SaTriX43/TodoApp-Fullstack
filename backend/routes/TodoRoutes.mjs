import express from 'express'
import { TodoDelete, TodoGet, TodoPost, TodoPut } from '../controllers/TodoControllers.mjs'

const router = express.Router()


router.get('/',TodoGet)
router.post('/',TodoPost)
router.delete('/:id',TodoDelete)
router.put('/:id',TodoPut)

export default router
