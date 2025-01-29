import { obtenerUsuarioId } from "../funciones/userID";

export async function TodoDelete(id) {

  const userId = obtenerUsuarioId()

  const url = `https://todoapp-fullstack-production.up.railway.app/api/tareas/${id}`;
  try {
    const peticion = await fetch(url, {
      method:'DELETE',
      headers: {
        'Content-Type' : 'application/json',
        'X-User-Id' : userId
      }
    })
    if(!peticion.ok) {
      const error = await peticion.json()
      throw new Error(error.error)
    }

    return true
  } catch (error) {
    console.log(`A ocurrido un error en el metodo DELETE frontend= ${error.message}`)
    throw error
  }
}