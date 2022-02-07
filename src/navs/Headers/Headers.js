import React, {useState} from 'react';
import { Link } from "react-router-dom";

import { IMAGES } from '../assets';

import Login from '../../pages/Login';
import SignUp from '../../pages/SignUp';
import UEndustryLogo from '../../images/uendustry_logo.jpg'
import { MyIcon, NavBar, NavbarLogoDiv } from './HeadersElements';

 const Headers = () => {
    //Cards data
 const cardData =[
   {id: 0, icon: IMAGES.icon, title: 'Building', path: 'icon'},
 
]

  // open how to play modal
  const [showHowToPlayModal, setShowHowToPlayModal] = useState(false);
  const openHowToPlayModal = () => {setShowHowToPlayModal(true)}
  const closeHowToPlayModal = () => {setShowHowToPlayModal(false)}

   // open how to play modal
   const [showHowToSignUpModal, setShowHowToSignUpModal] = useState(false);
   const openHowToSignUpModal = () => {setShowHowToSignUpModal(true)}
   const closeHowToSignUpModal = () => {setShowHowToSignUpModal(false)}
 

  return (


   
     <>
      <Login showHowToPlayModal={showHowToPlayModal} closeHowToPlayModal={closeHowToPlayModal}/>
      <SignUp showHowToSignUpModal={showHowToSignUpModal} closeHowToSignUpModal={closeHowToSignUpModal}/>
      <NavBar>
      <NavbarLogoDiv>
      <Link to='/' ><img style={{ height: 45, width: 60,}} src={cardData[0].icon} alt="" /></Link>
      <Link to='/'><label className='iconText'>UE</label></Link>
      <Link to='/'><label className='iconText2'>ndustry</label></Link>
      </NavbarLogoDiv>

      <form class="navbar-form navbar-left web-sh">
                      <div class="form">
                         <input type="text" class="form-control" placeholder="Search..."/>
                      </div>
                   </form>


                   <div class="col-md-8 col-sm-12">
                   <div class="right-nav">
                      <div class="login-sr">
                         <div class="login-signup">
                            <ul>
                               <li> <a onClick={openHowToPlayModal} style={{cursor:'pointer',}}>Login</a></li>
                               <li><a onClick={openHowToSignUpModal} style={{cursor:'pointer',}} class="custom-b" >Sign up</a></li>
                            </ul>
                         </div>
                      </div>
                
                      <div class="nav-b hidden-xs">
                         <div class="nav-box">
                            <ul>
                               <li><Link to='/AboutUs'>About Us</Link></li>
                               <li><Link to='/OurPartners'>Our Partners</Link></li>
                               <li><Link to='/News'>News</Link></li>
                               <li><Link to='/Blogs'>Blogs</Link></li>
                             
                            </ul>
                         </div>
                      </div>
                   </div>
                </div>
      </NavBar>
   
      </>
  );
}
export default Headers;