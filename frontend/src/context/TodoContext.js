'use client'
import { todoGet } from '@/utils/api/TodoGet'
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

  function eliminarTarea(id) {
    console.log('eliminando tarea con id',id)
    setTareas(tareas.filter(t => t.id !== id))
  }

  function editarTarea(id, nuevoTexto) {
    setTareas(tareas.map(tarea => (
      tarea.id === id ? {...tarea, tarea: nuevoTexto} : tarea
    )))
  }

  function agregarTarea(texto) {
    console.log('creando tarea con contenido', texto)
    setTareas([...tareas , {id:Date.now() , tarea: texto, marcada:false} ])
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