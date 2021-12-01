import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { faComment, faTrashAlt, faClock } from '@fortawesome/free-regular-svg-icons'
import './Cards.scss'

const Cards = (props) => {
    
    const separacion = 32;

    return (
        <section className='card'>
            <header className="header_cards container_spaceB">
                <div className="left container_center">
                    <FontAwesomeIcon icon={faClock} className='icon clock'/>
                    <h3 className="text">{props.tareas.endDate}</h3>
                </div>
                <button className="button">
                    <FontAwesomeIcon icon={faTrashAlt} className='icon remove'/>
                </button>
            </header>
            <div className="category">
                <h3 className="text name">{props.tareas.title}</h3>
                <svg className="display_center categories">
                    {/* <rect className='label' rx="2"/>
                    <rect className='label' x="32" rx="2"/>
                    <rect className='label' x="64" rx="2"/> */}
                    {
                        props.tareas.categories.map((categories_id, i) => (
                            props.categorias.map((categoria, i) => (
                                categories_id == categoria.id
                                ?
                                <rect key={i} className={`${categoria.color} label`} x={separacion*i} rx="2"/>
                                :
                                null
                            ))
                        ))
                    }
                </svg>
            </div>
            {
                props.tareas.pic != ""
                ?
                <img src={props.tareas.pic} alt="attached file" className="img_attached" />
                :
                null
            }
            <footer className="card_info container_spaceB">
                <div className="attach_comments container_center">
                    <button className='button child'>
                        <FontAwesomeIcon icon={faPaperclip} className='icon action' />
                    </button>
                    <h3 className="text">{props.tareas.attached.length}</h3>
                    <button className='button child'>
                        <FontAwesomeIcon icon={faComment} className='icon action'/>
                    </button>
                    <h3 className="text">{props.tareas.comments.length}</h3>
                </div>
                <div className="people">
                    {
                        props.tareas.users.map((user_id, i) => (
                            props.usuarios.map((user, i) => (
                                user_id == user.id
                                ?
                                <img key={i} src={user.pic} alt="" className="profile" />
                                :
                                null
                            ))
                        ))
                    }
                </div>
            </footer>
        </section>
    )
}

export default Cards
