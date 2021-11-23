import React from 'react'
import AddOtherCard from '../AddAnotherCard/AddOtherCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'

const Doing = () => {
    return (
        <section className='to_do'>
            <header className="to_do_header container_spaceB">
                <div className="header_left">
                    <h2 className="title">Doing:</h2>
                    <progress className="bar_doing" max="100" value="50" />
                </div>
                <div className="header_right">
                    <button className="menu_button button">
                        <FontAwesomeIcon icon={faEllipsisH} className="icon menu" />
                    </button>
                </div>
            </header>
            <article className="cards">
                {
                    //Añadir modelo de datos, context api no??
                }
            </article>
            <AddOtherCard />
        </section>
    )
}

export default Doing
