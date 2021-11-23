import React from 'react'

const ToolsRight = () => {

    return (
        <div className='tools_right container_center'>
            <button className='button'>New</button>
            <a href='#' className='container_center'>
                <h4 className='filter'>Filter</h4>
                <label>Sort by:
                    <select  className="sort_list" list='opciones'>
                        <option value="Date created">Date created</option>
                        <option value="Who created">Who created</option>
                        <option value="Name A-Z">Name A-Z</option>
                        <option value="Name Z-A">Name Z-A</option>
                        <option value="Revelance">Relevance</option>
                    </select>
                </label>
            </a>

        </div>
    )
}

export default ToolsRight
