import React from 'react'
import Doing from './Doing/Doing'
import Done from './Done/Done'
import Test from './Test/Test'
import ToDo from './ToDo/ToDo'
import './Content.scss'

const Content = () => {
    return (
        <div className="content">
            <ToDo />
            <Doing />
            <Done />
            <Test />
        </div>
    )
}

export default Content
