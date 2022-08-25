import { createContext, useState } from "react";
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
const MenuContext = createContext({
    open:false,
    setOpen:()=>{},
    items:[]
})
const MenuProvieder = ({children}) =>{
    const [open , setOpen] = useState(false);
    const [items , setItems] = useState(data)
    const val = {
        open,
        setOpen,
        items,

    }
    return(
        <MenuContext.Provider value={val}>
            {children}
        </MenuContext.Provider>
    )
}
export {MenuContext, MenuProvieder}