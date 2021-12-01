import React, { createContext, useState } from 'react'
import { user } from '../Models/Users'

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {

    const [usuarios, setUsuarios] = useState(user);

    //funciones del contexto

    const value = {
        usuarios,
        setUsuarios
    }

    return (
        <UserContext.Provider value={value}>
           {children} 
        </UserContext.Provider>
    )
}

export default UserContextProvider
