import React, { useContext } from 'react'
import { Menu } from 'antd';
import { MenuContext } from '../../contexts/menu/menu.context';
import 'antd/dist/antd.min.css'
import './nav-menu-mobile.styles.css'
const MobileMenu = () => {
    const { items } = useContext(MenuContext)
    return (
        items &&
        <Menu mode="inline"  >
            {items.map((item) => {
                if (item.subMenu) {
                    return (
                        <Menu.SubMenu  className='hover:bg-[#f3f3f3] border-b border-[#f3f3f3]' key={item.name} title={<>   <h1 className='text-lg font-bold'>{item.name}</h1></>}>
                            {
                                item.sublinks.map((subitem) => {
                                    return (
                                        <Menu.Item className='subitem border-b border-[#f3f3f3]'  key={subitem.link} >
                                            <h1 className='text-lg font-light'>{subitem.name}</h1>
                                        </Menu.Item>
                                    )
                                })
                            }
                        </Menu.SubMenu>
                    )
                }
                else {
                    return (
                        <Menu.Item key={item.link} className='hover:bg-[#f3f3f3] border-b border-[#f3f3f3]'  >
                            <h1 className='text-lg font-bold'>{item.name}</h1>
                        </Menu.Item>
                    )
                }
            })}
        </Menu>

    )
}

export default MobileMenu