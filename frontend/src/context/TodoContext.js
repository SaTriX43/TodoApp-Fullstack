'use client'
import { createContext, useState } from 'react'

const TodoContext = createContext()

function TodoProvider({children}) {

  const [tareas, setTareas] = useState([])

  function eliminarTarea(id) {
    console.log('eliminando tarea con id',id)
    setTareas(tareas.filter(t => t.id !== id))
  }

  function editarTarea(id, nuevoTexto) {
    setTareas(tareas.map(tarea => {
      tarea.id === id ? {...tarea, tarea: nuevoTexto} : tarea
    }))
  }

  function agregarTarea(texto) {
    console.log('creando tarea con contenido', texto)
    setTareas([...tareas , {id:Date.now() , tarea: texto, marcada:false} ])
  }

  return (
    <TodoContext.Provider value={{tareas, eliminarTarea, agregarTarea, editarTarea}}>
      {children}
    </TodoContext.Provider>
  )
}

export {TodoContext, TodoProvider}