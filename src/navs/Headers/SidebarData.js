import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FcIcons from 'react-icons/fc';
import * as BiIcons from 'react-icons/bi';
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text2'
  },
  {
    title: 'About Us',
    path: '/AboutUs',
    icon: <BiIcons.BiInfoCircle/>,
    cName: 'nav-text2'
  },
  {
    title: 'Our Partners',
    path: '/OurPartners',
    icon: <AiIcons.AiOutlineTeam /> ,
    cName: 'nav-text2'
  },
  {
    title: 'News',
    path: '/News',
    icon: <BiIcons.BiNews />,
    cName: 'nav-text2'
  },
  {
    title: 'Blogs',
    path: '/Blogs',
    icon: <FaIcons.FaBlogger />,
    cName: 'nav-text2'
  },
  {
    title: 'Log In',
    path: '/LogIn',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text2'
  }
  
];