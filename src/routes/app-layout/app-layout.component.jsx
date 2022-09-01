import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo/logodarck.svg'
import AppMenuMobile from '../../components/app-manu-mobile/app-menu-mobile.component'
import MenuButton from '../../components/nav-menu-mobile.button/menu-mobile.component'
import { MenuAppContext } from '../../contexts/app-menu/app-menu.context'
const AppLayout = () => {
    const { open } = useContext(MenuAppContext)
    return (
        <>
            <div className='flex flex-col'>
                <div className='flex bg-[#131317] lg:min-h-screen sticky top-0 z-50 shadow-sm lg:w-16 h-14 w-screen'>
                    <div className='flex lg:hidden w-full justify-between items-center px-4'>
                        <Logo />
                        <MenuButton MenuContext={MenuAppContext} color={'white'} />
                    </div>
                    {open &&
                        <div className='flex fixed left-0 bottom-0 right-0 top-14 z-50  bg-[#131317] flex-col lg:hidden h-[96vh] justify-between  '>
                            <AppMenuMobile/>
                        </div>
                    }
                </div>
                <Outlet />
            </div>

        </>
    )
}

export default AppLayout