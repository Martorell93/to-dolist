import React from 'react'
import { user } from '../../../Models/Users'
import ProfilePicture from './ProfilePicture'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const HeaderRight = () => {
    return (
        <div className="header_right container_center">
            <h3 className="text">Assigned By: </h3>
            <ul className="assigned_profile container_center">
            {
                user.map((users_, i) => (
                    i <= 2 
                    ?
                    <ProfilePicture key={i} name={users_.name} picture={users_.picture}/>
                    :
                    null
                ))
            }
            <li><button className="add button">
                <FontAwesomeIcon icon={faPlus} className='add_another'/>
            </button></li>

            </ul>
        </div>
    )
}

export default HeaderRight
