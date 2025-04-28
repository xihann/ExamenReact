import React, { useState } from 'react'
import { UserGrid } from './components/UserGrid'

export const UserApp = () => {
  const [searchUser, setSearchUser] = useState(''); 

  return (

    <>
      <h1>Tarjetas de Usuario</h1>

      <form aria-label="form">
            <input
                type="text"
                placeholder="Buscar usuario por nombre"
                value={searchUser}
                onChange={(e) => setSearchUser(e.target.value)} 
            />
        </form>

      <UserGrid searchUser={searchUser}/>
    </>

  )
}
