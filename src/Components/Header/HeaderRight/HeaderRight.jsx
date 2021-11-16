import React from 'react'
import { user } from '../../../Models/Users'
import ProfilePicture from './ProfilePicture'

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
                <a><li className="add_assigned">
                <img src="src/Assets/Img/Icons/plus dotted.png" alt="add assigned" className="add" />
                </li></a>

            </ul>
        </div>
    )
}

export default HeaderRight
