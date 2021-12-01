import React from 'react'
import { sections } from './../../Models/sections'
import Section from './Section.jsx'
import CardsContextProvider from '../../Context/CardsContext.jsx'
import './Content.scss'

const Content = () => {
    return (
        <CardsContextProvider >
            <div className="content">
                {
                sections.map((sections_, i) => (
                    <Section key={i} sections={sections_}/>
                ))
                }
            </div>
        </CardsContextProvider>
    )
}

export default Content
