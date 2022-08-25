import Popup from 'reactjs-popup'
import { MenuContext } from '../../contexts/menu/menu.context'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
const NavLinks = ({ className }) => {
    const { items } = useContext(MenuContext)
    const svgDir = require.context('../../assets/logo/');
    return (
        items &&
        <div className={className}>
            {
                items.map((item) => {
                    return (
                        item.subMenu ? (

                            <Popup trigger={
                                <div key={item} className='flex items-center space-x-1'>
                                    <h1 className='font-medium text-lg'>{item.name}</h1>
                                    <ion-icon name="chevron-down-outline" style={{ fontSize: 20, marginBottom: 6 }}></ion-icon>
                                </div>
                            }
                                on="hover"

                            >
                                <div className='flex flex-col ml-32 drop-shadow-md bg-white w-72 h-44 rounded-lg justify-center p-6 space-y-4'>
                                    {
                                        item.sublinks?.map((item) => {
                                            return (
                                                <div className='flex rounded-lg items-center  space-x-3 hover:bg-[#dfdfe2cc] p-4 justify-start '>
                                                    {
                                                        item.icon &&
                                                        <img src={svgDir(`./${item.icon}.svg`)} className='' />
                                                    }
                                                    <div className='text-sm font-semibold'>
                                                        {item.name}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                            </Popup>
                        )
                            :
                            <div className='font-medium text-lg break-normal '>{item.name}</div>

                    )
                })
            }
        </div>

    )
}

export default NavLinks