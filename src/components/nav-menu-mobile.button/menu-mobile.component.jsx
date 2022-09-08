import React, { useContext } from 'react'

const MenuButton = ({ styleColor = 'black', MenuContext }) => {
    const { open, setOpen } = useContext(MenuContext);
    return (
        <button onClick={() => setOpen(!open)} className='focus:outline-none pr-5' >
            <span className={`block  absolute h-0.5 w-5 bg-[white]  transform transition  duration-200 ease-in-out ${open ? 'rotate-45' : '-translate-y-1.5'}`}></span>
            <span className={`block  absolute h-0.5 w-5 bg-[white]  transform transition  duration-200 ease-in-out ${open ? 'opacity-0' : ''}`}></span>
            <span className={`block  absolute h-0.5 w-5 bg-[white] transform transition   duration-200 ease-in-out ${open ? '-rotate-45' : 'translate-y-1.5'}`}></span>
        </button >
    )
}

export default MenuButton