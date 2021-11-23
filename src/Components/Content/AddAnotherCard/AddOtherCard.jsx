import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './AddOtherCard.scss'

const AddOtherCard = () => {
    return (
        <div className='add_other_card'>
            <button className="add button">
                <FontAwesomeIcon icon={faPlus} className='add_another'/>  
            </button>
            <h2 className="add_name">Ad another card</h2>
        </div>
    )
}

export default AddOtherCard
