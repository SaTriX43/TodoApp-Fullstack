export async function TodoPut(id, nuevoTexto) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/tareas/${id}`;
  try {
    const peticion = await fetch(url, {
      method:'PUT',
      headers: {
        'Content-Type' : 'application/json'
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