import { useContext } from "react";
import { ReactComponentElement as Home } from "../../assets/appLayout/home.svg"
import { MenuAppContext } from "../../contexts/app-menu/app-menu.context";
const AppNav = () => {
    const { items, active, setActive } = useContext(MenuAppContext)
    return (
        <div className="flex-col flex w-16 ">
            {items.map((item) => {
                return (
                    active.name === item.name ?
                        <div className='flex justify-between p-2 items-center bg-[#29292F] border-[#0C66FF] border-l-[2px]'>
                            <span className='text-white text-sm  font-normal'>{item.name}</span>
                        </div>
                        :
                        <div onClick={() => { setActive(item) }} className='flex p-2  justify-between items-center hover:bg-[#29292F] border-[#0C66FF] hover:border-l-[2px]'>
                            <span className='text-white text-sm  font-normal'>{item.name}</span>
                        </div>

                )
            })}
        </div>
    )
}

export default AppNav;