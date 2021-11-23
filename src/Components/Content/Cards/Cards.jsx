import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { faComment, faTrashAlt, faClock } from '@fortawesome/free-regular-svg-icons'
import './Cards.scss'

const Cards = () => {
    return (
        <section className='card'>
            <header className="header_cards container_spaceB">
                <div className="left container_center">
                    <FontAwesomeIcon icon={faClock} className='icon clock'/>
                    <h3 className="text">Dec 01 2021</h3>
                </div>
                <button className="button">
                    <FontAwesomeIcon icon={faTrashAlt} className='icon remove'/>
                </button>
            </header>
            <div className="category">
                <h3 className="text name">Landing Page</h3>
                {
                    //Categorias
                }
                <svg className="display_center categories">
                    <rect className='label' rx="2"/>
                    <rect className='label' x="32" rx="2"/>
                    <rect className='label' x="64" rx="2"/>
                </svg>
            </div>
            {
                //Imagen si la hay
            }
            <img src="src\Assets\Img\descarga.jfif" alt="attached file" className="img_attached" />
            <footer className="card_info container_spaceB">
                <div className="attach_comments container_center">
                    <button className='button'>
                        <FontAwesomeIcon icon={faPaperclip} className='icon action' />
                    </button>
                    <h3 className="text">1</h3>
                    <button className='button'>
                        <FontAwesomeIcon icon={faComment} className='icon action'/>
                    </button>
                    <h3 className="text">0</h3>
                </div>
                <div className="people">
                    {
                        //Gente en el proyecto
                    }
                    <img src="src\Assets\Img\Profiles\profile 1.png" alt="" className="profile" />
                    <img src="src\Assets\Img\Profiles\profile 2.png" alt="" className="profile" />
                    <img src="src\Assets\Img\Profiles\profile 3.png" alt="" className="profile" />
                </div>
            </footer>
        </section>
    )
}

export default Cards
