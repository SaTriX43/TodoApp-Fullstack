'use client'

import { Formulario } from "@/componentes/Formulario/Formulario";
import styles from "../estilos/page.module.css";
import SoloCliente from "@/utils/funciones/SoloCliente";
import { Tarea } from "@/componentes/Tarea/Tarea";
import { TodoContext } from "@/context/TodoContext";
import { useContext } from "react";

export default function Inicio() {

  const {tareas} = useContext(TodoContext)

  return (
    <SoloCliente>
      <main className={styles['main']}>
        <h2>ToDo App</h2>
        <Formulario/>
        <section className={styles['main__tareas-contenedor']}>
          {tareas.map((tarea) => (
            <Tarea
              key={tarea.id}
              id={tarea.id}
              tarea={tarea.tarea}
              marcada={tarea.marcada}
            />
          ))}
        </section>
      </main>
    </SoloCliente>
  );
}
