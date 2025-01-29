import { obtenerUsuarioId } from "../funciones/userID";

export async function TodoPut(id, nuevoTexto) {
  const userId = obtenerUsuarioId()
  const url = `https://todoapp-fullstack-production.up.railway.app/api/tareas/${id}`;
  try {
    const peticion = await fetch(url, {
      method:'PUT',
      headers: {
        'Content-Type' : 'application/json',
        'X-User-Id' : userId
      },
      body: JSON.stringify({ tarea: nuevoTexto})
    })
    if(!peticion.ok) {
      const error = await peticion.json()
      throw new Error(error.error)
    }

    return true
  } catch (error) {
    console.log(`A ocurrido un error en el metodo UPDATE frontend= ${error.message}`)
    throw error
  }
}