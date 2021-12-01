import React, { createContext, useState } from 'react'
import { attached } from '../Models/attached'
import { categories } from '../Models/categories'
import { comments } from '../Models/comments'
import { sections } from '../Models/sections'
import { tasks } from '../Models/tasks'

export const CardsContext = createContext();

const CardsContextProvider = ({ children }) => {
    
    const [adjuntos, setAdjuntos] = useState(attached)
    const [categorias, setCategorias] = useState(categories)
    const [secciones, setSecciones] = useState(sections)
    const [comentarios, setComentarios] = useState(comments)
    const [tareas, setTareas] = useState(tasks)

    //funciones relacionadas con la tarjetas
    const value = {
        adjuntos,
        categorias,
        secciones,
        comentarios,
        tareas
    }

    return (
        <CardsContext.Provider value={value}>
            {children}
        </CardsContext.Provider>
    )
}

export default CardsContextProvider
