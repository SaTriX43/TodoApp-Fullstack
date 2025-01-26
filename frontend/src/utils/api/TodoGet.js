export async function todoGet() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/tareas`;
  try {
    const response = await fetch(url)

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