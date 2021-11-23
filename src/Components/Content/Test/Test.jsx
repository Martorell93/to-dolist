import React from 'react'
import AddOtherCard from '../AddAnotherCard/AddOtherCard'

const Test = () => {
    return (
        <section className='to_do test'>
            <header className="to_do_header container_spaceB">
                <div className="header_left">
                    <h2 className="title">Test:</h2>
                    <progress className="bar_test" max="100" value="75" />
                </div>
                <div className="header_right">
                    <button className="remove button">
                        <img src="src\Assets\Img\Icons\menu.png" alt="menu" className="remove_icon" />
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
