import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faPlus, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Cards.scss'

const Cards = () => {
    return (
        <section className='cards'>
            <header className="header_cards container_spaceB">
                <div className="left container_center">
                    <FontAwesomeIcon icon={faClock} className='clock'/>
                    <h3 className="date">Dec 01 2021</h3>
                </div>
                <button className="button">
                    <FontAwesomeIcon icon={faTrash} className='remove'/>
                </button>
            </header>
            <div className="category_name">
                <h3 className="name">Landing Page</h3>
                {
                    //Categorias
                }
                
            </div>
        </section>
    )
}

export default Cards
