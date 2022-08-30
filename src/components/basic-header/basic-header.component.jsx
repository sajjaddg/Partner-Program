import { useContext } from 'react'
import { ReactComponent as Logo } from '../../assets/logo/logo.svg'
import NavLinks from '../../components/nav-links/navLinks.component'
import MenuButton from '../../components/nav-menu-mobile.button/menu-mobile.component'
import { MenuContext } from '../../contexts/menu/menu.context'
import MobileMenu from '../../components/nav-menu-mobile/nav-menu-mobile.component'
const BasicHeader = () => {
    const { open } = useContext(MenuContext)
    return (
        <>
            <div className='bg-white sticky top-0 z-50 shadow-sm'>
                <div className="flex  justify-between items-center px-5 py-3  lg:p-6 lg:justify-start lg:space-x-12" style={{ maxWidth: '80rem', margin: '0 auto' }}>
                    <Logo className='shrink-0 w-40 h-6 md:w-52 md:h-8 lg:w-56 lg:h-10' />
                    <div className="flex items-center space-x-2 lg:hidden">
                        <label className='font-medium text-sm'>{open ? 'Close' : 'Menu'}</label>
                        <MenuButton />
                    </div >
                    <div className="lg:flex hidden">
                        <NavLinks className='grid grid-flow-col gap-x-12 xl:gap-x-16 ' />
                    </div>
                    <div className=' lg:flex flex-1 hidden justify-end space-x-2  items-center' >
                        <button >
                            <div className='flex items-center justify-center w-24 h-9 transition-color duration-300 border rounded-sm border-[#0F0F10] hover:text-white hover:bg-[#0f0f10]  '>
                                <label className='font-semibold '>Log in</label>
                            </div>
                        </button>
                        <button >
                            <div className='flex items-center justify-center w-24 h-9 transition-color duration-300 text-white rounded-sm bg-[#ee0007]  hover:bg-[#bd0309]    '>
                                <label className='font-semibold '>Join now</label>
                            </div>
                        </button>
                    </div>
                </div >
                {open &&
                    <div className='flex fixed left-0 bottom-0 right-0 top-12 z-50  bg-white flex-col lg:hidden h-[93vh] justify-between  ' >
                        <MobileMenu />
                        <div className='flex flex-col px-5 py-3 space-y-4 '>
                            <div className="flex">
                                <input type="email" placeholder='Enter your email' className='w-full outline-[#ffd000] border border-black px-4 py-2 rounded-l-sm ' />
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
            </div>
        </>

    )
}

export default BasicHeader