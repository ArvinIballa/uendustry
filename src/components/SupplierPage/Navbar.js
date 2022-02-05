import React, {useState} from 'react'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData' 
import './Navbar.css'
import { IconContext } from 'react-icons/lib'
import * as CgIcons from 'react-icons/cg'
import UEndustryLogo from '../../images/uendustry_logo.jpg'
const Navbar = () => {

    const [sidebar, setSidebar] = useState(false)

    const toggleSidebar = () => {
        setSidebar(!sidebar)
    }

    const forLogout = () => {
      console.log('logout')
      sessionStorage.clear()
    }
    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaBars style={{color:'gray'}} onClick={toggleSidebar} />
          </Link>
          <div className='navbarLogo'>
            <img src={UEndustryLogo} className='logo'></img>
            <label className='iconText'>UE</label>
            <label className='iconText2'>ndustry</label>
          </div>
          <div className='navbarMenu'>
            <label className='navbarMenuText'>About us</label>
            <label className='navbarMenuText'>Our Partners</label>
            <label className='navbarMenuText'>News</label>
            <label className='navbarMenuText'>Blogs</label>
            <img className='profilePicture' src="https://static.vecteezy.com/system/resources/previews/000/379/329/original/edit-profile-vector-icon.jpg"></img>
            <label className='navbarMenuTextProfile'>John Doe</label>
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={toggleSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li onClick={forLogout} className='nav-text'>
              <Link to='/'>
                  <CgIcons.CgLogOut/>
                  <span>Logout</span>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
    )
}

export default Navbar
