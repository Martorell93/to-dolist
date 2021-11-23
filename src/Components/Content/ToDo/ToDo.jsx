import React from 'react'
import AddOtherCard from '../AddAnotherCard/AddOtherCard'
import Cards from '../Cards/Cards'

const ToDo = () => {
    return (
        <section className='to_do'>
            <header className="to_do_header container_spaceB">
                <div className="header_left">
                    <h2 className="title">To do:</h2>
                    <progress className="bar_to_do" max="100" value="25" />
                </div>
                <div className="header_right">
                    <button className="remove button">
                        <img src="src\Assets\Img\Icons\menu.png" alt="menu" className="remove_icon" />
                    </button>
                </div>
            </header>
            <article className="cards">
                <Cards />
                {
                    //Añadir modelo de datos, context api no??
                }
            </article>
            <AddOtherCard />
        </section>
    )
}

export default ToDo
