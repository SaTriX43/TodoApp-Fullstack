// funcion para crear un id aleatorio y guardarlo en el localstorage 

export function obtenerUsuarioId() {
  if( typeof window === 'undefined') {
    return null
  }

  let userId = localStorage.getItem('userId')
  if(!userId) {
    userId = crypto.randomUUID()
    localStorage.setItem('userId', userId)
  }
  return userId
}