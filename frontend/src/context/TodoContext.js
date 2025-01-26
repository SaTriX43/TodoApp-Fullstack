'use client'
import { todoGet } from '@/utils/api/TodoGet'
import { TodoPost } from '@/utils/api/TodoPost'
import { createContext, useEffect, useState } from 'react'

const TodoContext = createContext()

function TodoProvider({children}) {

  const [tareas, setTareas] = useState([])
  const [cargando,setCargando] = useState(true)
  const [error,setError] = useState(null)

  useEffect(() => {
    async function cargarTareas() {
      try {
        const tareas = await todoGet()
        setTareas(tareas)
      } catch (error) {
        setError(error.message)
      }finally {
        setCargando(false)
      }
    }

    cargarTareas()
  },[])

  // funciones 

  async function actualizarTareas() {
    try {
      const tareas = await todoGet()
      setTareas(tareas)
    } catch (error) {
      setError(error)
    } 
  }

  async function agregarTarea(tarea) {
    try {
      const mensaje = await TodoPost(tarea)
      alert(mensaje.mensaje)
      actualizarTareas()
    } catch (error) {
      console.log(error.message)
      setError(error.message)
    }
  }

  function eliminarTarea(id) {
    console.log('eliminando tarea con id',id)
    setTareas(tareas.filter(t => t.id !== id))
  }

  function editarTarea(id, nuevoTexto) {
    setTareas(tareas.map(tarea => (
      tarea.id === id ? {...tarea, tarea: nuevoTexto} : tarea
    )))
  }

  return (
    <TodoContext.Provider value={
      {
        tareas, 
        error,
        cargando,

        actualizarTareas,
        eliminarTarea, 
        agregarTarea, 
        editarTarea
      }
    }>
      {children}
    </TodoContext.Provider>
  )
}

export {TodoContext, TodoProvider}