import React, { useContext } from 'react'
import AddOtherCard from './AddAnotherCard/AddOtherCard'
import Cards from './Cards/Cards'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { CardsContext } from '../../Context/CardsContext'
import { UserContext } from '../../Context/UserContext'
import { Draggable } from 'react-beautiful-dnd'

const Section = (props) => {

    const { adjuntos, categorias, comentarios, tareas } = useContext(CardsContext);
    const { usuarios } = useContext(UserContext)

    return (
        <section className='section' ref={props.provided.innerRef} {...props.provided.droppableProps}>
            <header className="section_header container_spaceB">
                <div className="header_left">
                    <h2 className="title">{props.sections.title}</h2>
                    <progress className={props.sections.bar} max="100" value={props.sections.value} />
                </div>
                <div className="header_right">
                    <button className="menu_button button">
                        <FontAwesomeIcon icon={faEllipsisH} className="icon menu" />
                    </button>
                </div>
            </header>
            <article className="cards">
                {
                    tareas.map((tareas_, i) => (
                        tareas_.section == props.sections.id
                        ?
                        <Draggable key={tareas_.id} draggableId={`${tareas_.id}`} index={i}>
                            {(provided) => (
                                <Cards key={i}  tareas={tareas_}
                                categorias={categorias} comentarios={comentarios}
                                usuarios={usuarios} provided={provided}/>
                            )}
                        </Draggable>
                        :
                        null
                    ))
                }
            </article>
            {props.provided.placeholder}
            <AddOtherCard />
        </section>
    )
}

export default Section
