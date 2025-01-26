'use client'

import React, { useContext, useState } from 'react'
import styles from './Formulario.module.css'
import { TodoContext } from '@/context/TodoContext'

export const Formulario = () => {

  // funcion para agregar tarea 
  const {agregarTarea} = useContext(TodoContext)

  const [inputValue, setInputValue] = useState('')

  function manejarEnvioTarea(e) {
    e.preventDefault()
    if(!inputValue.trim()) {
      alert('Porfavor escriba algo en el campo')
      return 
    }


    agregarTarea(inputValue)
    setInputValue('')
  }


  return (
    <form className={styles['formulario']} onSubmit={manejarEnvioTarea}>
      <input 
        type="text" 
        className={styles['formulario__input']}
        id='input-tarea' 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='escriba su tarea...' 
        required  
      />
      <button 
        className={styles['formulario__boton']} 
        type='submit'
      >
        Agregar
      </button>
    </form>
  )
}
