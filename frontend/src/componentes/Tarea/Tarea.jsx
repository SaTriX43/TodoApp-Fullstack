'use client'

import React, { useContext, useState } from 'react'
import styles from './Tarea.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { TodoContext } from '@/context/TodoContext'

export const Tarea = ({tarea, marcada, id}) => {

  // funciones 
  const {eliminarTarea, editarTarea} = useContext(TodoContext)
  const [nuevoTexto, setNuevoTexto] = useState(tarea)
  const [estaEditando, setEstaEditando] = useState(false)

  function manejarEdicion() {
    if(estaEditando) {
      editarTarea(id, nuevoTexto)
    }
    setEstaEditando(!estaEditando)
  }

  return (
    <div className={`${styles['tarea__contenedor']} ${marcada ? styles['tarea-marcada'] : ''}`}>
      {estaEditando ? (
        <input 
          type="text"
          value={nuevoTexto}
          onChange={(e) => setNuevoTexto(e.target.value)}
          className={styles['tarea__input-editar']}
          onKeyPress={(e) => e.key === 'Enter' && manejarEdicion()}
        />
      ) : (
        <p className={styles['tarea__parrafo']}>{nuevoTexto}</p>
      )}

      <div className={styles['tarea__contenedor-botones']}>
        <FontAwesomeIcon
          icon={estaEditando ? faCheck : faPen}
          onClick={manejarEdicion}
          className={`${styles['tarea__icon']} ${styles['icono-pen']}`}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => eliminarTarea(id)}
          className={`${styles['tarea__icon']} ${styles['icono-trash']}`}
        />
      </div>
    </div>
  )
}
