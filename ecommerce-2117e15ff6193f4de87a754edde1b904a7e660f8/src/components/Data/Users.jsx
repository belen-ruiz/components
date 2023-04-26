import React, { memo } from 'react'

export const Users = memo (({ usuarios }) => {

  return (
    <>
        {usuarios.map((usuario) => (
            <div key={usuario.id}>
                <div>ID:{usuario.id}</div>
                <div>NOMBRE:{usuario.name}</div>
                <div>APELLIDO: {usuario.username}</div>
            </div>
        ))}
    </>
  )
})

