import React from 'react'
import { Link } from 'react-router-dom'
const NavLink = ({ name, link }) => {
    return (
        <Link to={link} className='flex flex-row shrink-0 justify-center items-center'>
            <h2  className='font-semibold break-normal'>{name}</h2>
        </Link>
    )
}

export default NavLink