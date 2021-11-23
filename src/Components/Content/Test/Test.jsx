import React from 'react'
import AddOtherCard from '../AddAnotherCard/AddOtherCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'

const Test = () => {
    return (
        <section className='to_do test'>
            <header className="to_do_header container_spaceB">
                <div className="header_left">
                    <h2 className="title">Test:</h2>
                    <progress className="bar_test" max="100" value="75" />
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

export default Test
