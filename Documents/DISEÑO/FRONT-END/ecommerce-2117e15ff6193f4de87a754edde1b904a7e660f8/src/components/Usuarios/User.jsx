import React from 'react'
import { useParams } from 'react-router-dom'

export const User = () => {
    let params = useParams()
    console.log(params)

    let { username } = useParams()

  return (
    <div>
        <h1>Perfil de Usuario:</h1>
        <h2>{username}</h2>
    </div>
  )
}
