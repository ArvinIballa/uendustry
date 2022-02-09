import React, {useState} from 'react';
import { IMAGES } from '../assets';
import { Link } from "react-router-dom";
import './Footer.css'
import UEndustryLogo from '../../images/uendustry_logo.jpg'

// reactstrap components
import { Row, Col } from "reactstrap";

const Footer = () => {


   const cardData =[
      {id: 0, icon: IMAGES.icon, title: 'Building', path: 'icon'},
    
   ]

  return (
    <footer className="footer" fluid >
    <div className='label-div'>
               <label className='label'>Register Now</label>
                           <div className="wrap">
                                 <div className="search">
                                    <input type="text" className="searchTerm" placeholder="Enter Email"/>
                                    <button type="submit" className="searchButton">
                                    <i className="fa fa-search"></i>
                                 </button>
                                 </div>
                           </div>    
   </div>
   <div className='footer-div'>
         <img src={UEndustryLogo} className='footerLogo'></img>
         <p className='iconText'>UE</p>
         <p className='iconText2'>ndustry</p>

   <div className='rightsDiv'>         
   <p className='rights'>All Rights Reserved. Company Name © 2022.</p>
   </div>

   </div>
    
      
    </footer>
  );
};

export default Footer;
