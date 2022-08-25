import React, { useContext } from 'react'
import { ReactComponent as Logo } from '../../assets/logo/logo.svg'
import NavLinks from '../../components/nav-links/navLinks.component'
import MenuButton from '../../components/nav-menu-mobile.button/menu-mobile.component'
import { MenuContext } from '../../contexts/menu/menu.context'
import MobileMenu from '../../components/nav-menu-mobile/nav-menu-mobile.component'
const Navbar = () => {
    const { open } = useContext(MenuContext)
    return (
        // <div className='lg:px-[6rem] lg:py-7  p-4 transform transition-all flex flex-row items-center shadow-sm' >
        //     <Logo className='shrink-0' />
        //     <div className='lg:flex hidden' >
        //         <NavLinks />
        //     </div>
        //     <div className='flex-row lg:flex px-6 hidden flex-1 justify-end space-x-2 items-center' >
        //         <button >
        //             <div className='flex items-center justify-center w-24 h-9 transition-color duration-300 border rounded-md border-[#0F0F10] hover:text-white hover:bg-[#0f0f10]  '>
        //                 <label className='font-semibold '>Log in</label>
        //             </div>
        //         </button>
        //         <button >
        //             <div className='flex items-center justify-center w-24 h-9 transition-color duration-300 text-white rounded-md bg-[#ee0007] hover:text-white hover:bg-[#bd0309]    '>
        //                 <label className='font-semibold '>Join now</label>
        //             </div>
        //         </button>
        //     </div>
        // </div >
        <>
            <div className="flex justify-between px-5 py-3 shadow-sm">
                <Logo className='shrink-0 w-40 h-6 md:w-52 md:h-8' />
                <div className="flex items-center space-x-2 lg:hidden">
                    <label className='font-medium text-sm'>{open ? 'Close' : 'Menu'}</label>
                    <MenuButton />
                </div >
            </div >
            {open &&
                <div className='flex flex-col lg:hidden h-[90vh] justify-between  ' >
                    <MobileMenu />
                    <div className='flex flex-col px-5 py-3 space-y-4 '>
                        <div className="flex">
                            <input type="email" placeholder='Enter your email' className='w-full outline-[#ffd000] border-2 px-4 py-2 rounded-l-sm ' />
                            <button>
                                <div className='flex items-center justify-center h-full w-24 transition-color duration-300 text-white rounded-r-sm bg-[#ee0007] hover:bg-[#bd0309]    '>
                                    <label className='font-semibold '>Join now</label>
                                </div>
                            </button>
                        </div>
                        <div className="flex justify-center items-center">
                            <a className='font-light text-black hover:text-black'>Already a Partner? <span className='text-blue-500'>Log in</span> </a>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default Navbar;