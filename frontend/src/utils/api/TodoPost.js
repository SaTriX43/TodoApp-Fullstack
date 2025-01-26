export async function TodoPost(tarea) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/tareas`;
  try {
    const peticion = await fetch(url, {
      method:'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({tarea})
    })
    if(!peticion.ok) {
      const error = await peticion.json()
      throw new Error(error.error)
    }

    const mensaje = await peticion.json()
    return mensaje
  } catch (error) {
    console.log(`A ocurrido un error en el metodo post frontend= ${error.message}`)
    throw error
  }
}