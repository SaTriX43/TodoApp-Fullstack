export async function TodoDelete(id) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/tareas/${id}`;
  try {
    const peticion = await fetch(url, {
      method:'DELETE',
      headers: {
        'Content-Type' : 'application/json'
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