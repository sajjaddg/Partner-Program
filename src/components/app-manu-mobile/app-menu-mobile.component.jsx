import React, { useContext } from 'react'
import { MenuAppContext } from '../../contexts/app-menu/app-menu.context'

const AppMenuMobile = () => {
    const { items, active, setActive } = useContext(MenuAppContext)
    return (
        <div className="flex flex-col ">
            {
                !active.subMenu ?
                    items.map((item) => {
                        return (
                            active.name === item.name ?
                                <div className='flex p-4 py-6 w-full justify-between items-center bg-[#29292F] border-[#0C66FF] border-l-[2px]'>
                                    <span className='text-white text-xl  font-normal'>{item.name}</span>
                                    {item.subMenu && <ion-icon name="chevron-forward-outline" style={{ color: '#fff', fontSize: '22px' }}></ion-icon>}
                                </div>
                                :
                                <div onClick={() => { setActive(item) }} className='flex p-4 py-6 w-full justify-between items-center hover:bg-[#29292F] border-[#0C66FF] hover:border-l-[2px]'>
                                    <span className='text-white text-xl  font-normal'>{item.name}</span>
                                    {item.subMenu && <ion-icon name="chevron-forward-outline" style={{ color: '#fff', fontSize: '22px' }}></ion-icon>}
                                </div>
                        )
                    })
                    :
                    <>
                        <div onClick={() => { setActive('') }} className='flex p-4 w-full justify-start items-center space-x-3 cursor-pointer hover:bg-[#222227]'>
                            <ion-icon name="arrow-back-outline" style={{ color: '#fff', fontSize: '22px' }}></ion-icon>
                            <span className='text-white text-xl  font-normal'>{active.name}</span>
                        </div>
                        {active.sublinks.map((item) => {
                            return (
                                <div className='flex p-4 px-6 w-full justify-start items-center hover:bg-[#222227] '>
                                    <span className='text-white text-xl font-light'>{item.name}</span>
                                </div>
                            )

                        })
                        }
                    </>

            }

        </div>
    )
}

export default AppMenuMobile