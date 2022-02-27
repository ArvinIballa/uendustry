import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as CgIcons from 'react-icons/cg'
import * as BiIcons from 'react-icons/bi'
import * as MdIcons from 'react-icons/md'

export const SidebarData = [
    {
        title: 'Profile',
        path: '/Customer/Profile',
        icon: <AiIcons.AiOutlineUser/>,
        className: 'nav-text'
    },

    {
        title: 'My Orders',
        path:  '/Customer/Orders',
        icon: <CgIcons.CgShoppingBag/>,
        className: 'nav-text'
    },

 ]
