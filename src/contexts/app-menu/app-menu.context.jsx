import { createContext, useState } from "react";
const data = [
    {
        name: 'Home',
        link: '',
        subMenu: false,
    },
    {
        name: 'Profile settings',
        link: '/profile',
        subMenu: true,
        sublinks: [
            {
                name: 'Profile details',
                link: '/profile/details',

            },
            {
                name: 'Billing',
                link: '/profile/billing',

            },
            {
                name: 'Email preferences',
                link: '/profile/email',

            },
            {
                name: 'Security',
                link: '/profile/security',

            }
            ,
            {
                name: 'API tokens',
                link: '/profile/api',

            }
        ]
    },
    {
        name: 'Balance',
        link: '',
        subMenu: false,

    }
]
const MenuAppContext = createContext({
    open: false,
    setOpen: () => { },
    items: [],
    active:'',
    setActive :()=>{},
})
const MenuAppProvieder = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [active,setActive] = useState(data[0])
    const [items, setItems] = useState(data)
    const val = {
        open,
        setOpen,
        items,
        active,
        setActive
    }
    return (
        <MenuAppContext.Provider value={val}>
            {children}
        </MenuAppContext.Provider>
    )
}
export { MenuAppContext, MenuAppProvieder }