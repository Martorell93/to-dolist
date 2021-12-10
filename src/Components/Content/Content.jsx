import React from 'react'
import { sections } from './../../Models/sections'
import Section from './Section.jsx'
import CardsContextProvider from '../../Context/CardsContext.jsx'
import './Content.scss'
import { Droppable } from "react-beautiful-dnd";

const Content = () => {

    return (
        <CardsContextProvider >
            <div className="content">
                {
                sections.map((sections_, i) => (
                    <Droppable key={i} droppableId={`${i}`}>
                        {(provided) => (
                            <Section provided={provided} key={i} sections={sections_}/>
                        )}
                    </Droppable>
                ))
                }
            </div>
        </CardsContextProvider>
    )
}

export default Content
