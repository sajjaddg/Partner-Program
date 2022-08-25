import React from 'react'
import Popup from 'reactjs-popup'
import NavLink from '../nav-link/nav-link.component';
const NavLinks = () => {
    const data = [
        {
            name: 'Partnerships',
            link: '/Partnerships',
            subMenu: true,
            sublinks: [
                {
                    name: 'Solution Program',
                    link: '/Partnerships/SolutionProgram',

                },
                {
                    name: 'Affiliate Program',
                    link: '/Partnerships/AffiliateProgram'
                }
            ]
        },
        {
            name: 'Products',
            link: '/Products',
            subMenu: true,
            sublinks: [
                {
                    name: 'LiveChat',
                    link: '/Products/LiveChat',
                    icon: 'orange'

                },
                {
                    name: 'ChatBot',
                    link: '/Products/ChatBot',
                    icon: 'blue'
                    
                }
            ]
        },
        {
            name: 'Blog',
            link: '/Blog',
            subMenu: false,

        },
        {
            name: 'Help Center',
            link: '/HelpCenter',
            subMenu: false,

        },
    ]
    const svgDir = require.context('../../assets/logo/');
    return (
        <div>
            <ul className='flex flex-row transform transition-all  mod2:space-x-16 mod1:space-x-8 mod2:pl-20 mod1:pl-8 '>
                {
                    data.map((item) => {
                        return (
                            item.subMenu ? (
                                
                                <Popup trigger={<li key={item} className='font-semibold'>{item.name}</li>}
                                    on="hover"
                                    
                                >
                                    <div className='flex flex-col ml-32 drop-shadow-md bg-white w-72 h-44 rounded-lg justify-center p-6 space-y-4'>
                                        {
                                            item.sublinks?.map((item) => {
                                                return (
                                                    <div className='flex rounded-lg space-x-3 hover:bg-[#dfdfe2cc] p-4 justify-start flex-row items-center'>
                                                        {
                                                            item.icon &&
                                                            <div className=' flex items-center'>
                                                                <img src={svgDir(`./${item.icon}.svg`)} className='' />
                                                            </div>
                                                        }
                                                        <p key={item} className='font-semibold text-sm'>{item.name}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                </Popup>
                            )
                                :
                                <NavLink key={item} name={item.name} link={item.link}/>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default NavLinks