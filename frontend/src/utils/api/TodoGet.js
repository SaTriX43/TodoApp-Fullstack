import { obtenerUsuarioId } from "../funciones/userID";

export async function todoGet() {

  const userId = obtenerUsuarioId()

  const url = `https://todoapp-fullstack-production.up.railway.app/api/tareas`;
  try {
    const response = await fetch(url, {
      method:'GET',
      headers: {
        'X-User-Id' : userId
      }
    })

  if(!response.ok) {
    const error = await response.json()
    throw new Error(`HTTP error! status: ${response.status}, message: ${error.message}`);
  }

  const data = await response.json()
  console.log(data)
  return data
  } catch (error) {
    console.log(`A ocurrido un error en el metodo get ${error.message}`)
    throw error
  }
}