import React from 'react'
import ToolsLeft from './ToolsLeft'
import ToolsRight from './ToolsRight'
import './tools.scss'

const Tools = () => {
    return (
        <section className='container_spaceB tools'>
            <ToolsLeft/>
            <ToolsRight/>
        </section>
    )
}

export default Tools
