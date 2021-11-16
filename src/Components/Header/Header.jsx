import React from 'react'
import HeaderLeft from './HeaderLeft/HeaderLeft'
import HeaderRight from './HeaderRight/HeaderRight'
import "./header.scss"

const Header = () => {
    return (
        <section className="color header container_spaceB">
            <HeaderLeft />
            <HeaderRight />
        </section>
    )
}

export default Header
