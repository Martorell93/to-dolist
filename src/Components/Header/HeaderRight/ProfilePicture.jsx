import React from 'react'

const ProfilePicture = (props) => {
    return (
        <a><li className="profile_pictures container_center">
            <img src={props.picture} alt={props.name} className="profile" />
        </li></a>
    )
}

export default ProfilePicture
