import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import UEndustryLogo from '../../images/uendustry_logo.jpg'
import Login from '../../pages/Login';
import SignUp from '../../pages/SignUp';
function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  
  // open how to Login modal
  const [showHowToPlayModal, setShowHowToPlayModal] = useState(false);
  const openHowToPlayModal = () => {setShowHowToPlayModal(true)}
  const closeHowToPlayModal = () => {setShowHowToPlayModal(false)}

   // open how to SignUp modal
   const [showHowToSignUpModal, setShowHowToSignUpModal] = useState(false);
   const openHowToSignUpModal = () => {setShowHowToSignUpModal(true)}
   const closeHowToSignUpModal = () => {setShowHowToSignUpModal(false)}

  return (
    <>
     <Login showHowToPlayModal={showHowToPlayModal} closeHowToPlayModal={closeHowToPlayModal}/>
      <SignUp showHowToSignUpModal={showHowToSignUpModal} closeHowToSignUpModal={closeHowToSignUpModal}/>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-barss'>
            <FaIcons.FaBars onClick={showSidebar} style={{color:'gray'}} />
          </Link>

          <div className='navbarLogo'>
          <Link to='/' ><img src={UEndustryLogo} className='logo'></img></Link>
          <Link to='/' ><label className='iconText'>UE</label></Link>
          <Link to='/' ><label className='iconText2'>ndustry</label></Link>
          </div>

          <div className='navbarMenu2' >
            <Link to='/Checkout' className='navbarCart'><RiIcons.RiShoppingCartLine style={{color:'black'}}/></Link>
            <Link to='/AboutUs'  className='navbarMenuText1'>About us</Link>
            <Link to='/OurPartners' className='navbarMenuText1'>Our Partners</Link>
            <Link to='/News' className='navbarMenuText1'>News</Link>
            <Link to='/Blogs' className='navbarMenuText1'>Blogs</Link>
            
            <label className='navbarMenuText1'><a onClick={openHowToPlayModal}>Log In</a></label>
            <label className='navbarMenuText2' ><a onClick={openHowToSignUpModal}>Sign Up</a></label>
           
          </div>
        </div>
        
        <nav className={sidebar ? 'nav-menu2 active' : 'nav-menu2'}>
          <ul className='nav-menu-items2' onClick={showSidebar}>
            <li className='navbar-toggle2'>
              <Link to='#' className='menu-bars2'>
                <AiIcons.AiOutlineClose />
              </Link>
           
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;