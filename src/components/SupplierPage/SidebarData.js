import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as CgIcons from 'react-icons/cg'
import * as BiIcons from 'react-icons/bi'
import * as MdIcons from 'react-icons/md'

export const SidebarData = [
    {
        title: 'Profile',
        path: '/Supplier/Profile',
        icon: <AiIcons.AiOutlineUser/>,
        className: 'nav-text'
    },

    {
        title: 'My Inventory',
        path: '/Supplier/Inventory',
        icon: <MdIcons.MdOutlineInventory/>,
        className: 'nav-text'
    },

    {
        title: 'My Services',
        path: '/Supplier/Services',
        icon: <AiIcons.AiOutlineCheckCircle/>,
        className: 'nav-text'
    },
    {
        title: 'My Transactions',
        path: '/Supplier/Transactions',
        icon: <BiIcons.BiTransferAlt/>,
        className: 'nav-text'
    },
    {
        title: 'My Deliveries',
        path: '/Supplier/Deliveries',
        icon: <CgIcons.CgShoppingBag/>,
        className: 'nav-text'
    },
]
