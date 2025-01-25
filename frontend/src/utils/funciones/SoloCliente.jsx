'use client'

import { useEffect, useState } from "react"

export default function SoloCliente({children}) {
  const [esCliente, setEscliente] = useState(false)

  useEffect(() => {
    setEscliente(true)
  },[])

  if(!esCliente) {
    return null
  }

  return children
}