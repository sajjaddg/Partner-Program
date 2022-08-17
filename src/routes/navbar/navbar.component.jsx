import React from 'react'
import { ReactComponent as Logo } from '../../assets/logo/logo.svg'
const Navbar = () => {
    return (
        <div className='px-[6.5rem] py-7 flex flex-row items-center '>
            <Logo />
            <div >
                <ul className='flex flex-row space-x-20 px-20 '>
                    <li>
                        Partnerships
                    </li>
                    <li>
                        Products
                    </li>
                    <li>
                        Blog
                    </li>
                    <li>
                        Help Center
                    </li>
                </ul>
            </div>
            <div className='flex-row flex flex-1 justify-end space-x-3' >
                <button className=' transition-color duration-300 border rounded-md border-[#0F0F10] hover:text-white hover:bg-[#0f0f10] px-6 p-2'>
                    Log In
                </button>
                <button className=' transition-color duration-300 border text-white rounded-md bg-[#ee0007] hover:text-white hover:bg-[#bd0309] px-6 p-2'>
                    Join now
                </button>
            </div>
        </div>
    )
}

export default Navbar