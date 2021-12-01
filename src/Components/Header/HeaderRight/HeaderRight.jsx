import React, { useContext } from 'react'
import ProfilePicture from './ProfilePicture'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../../Context/UserContext'

const HeaderRight = () => {

    const { usuarios } = useContext(UserContext)

    return (
        <div className="header_right container_center">
            <h3 className="text">Assigned By: </h3>
            <ul className="assigned_profile container_center">
            {
                usuarios.map((users_, i) => (
                    users_.is_master 
                    ?
                    <ProfilePicture key={i} name={users_.name} picture={users_.pic}/>
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
