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
   //  <!-- ------- Footer ----------- -->
    <div class="footer">
    <div class="container">
        <div class="row">
            <div class="footer-col-1">
                <h3>Download Our App</h3>
                <p>Download App for Adnroid and Ios Mobile Phone</p>
                <div class="app-logo">
                    <img src={IMAGES.playstore} alt=""/>
                    <img src={IMAGES.appstore} alt=""/>
                </div>
            </div>
            <div class="footer-col-2">
                <img src={IMAGES.icon} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut doloribus, corporis repellendus corrupti eos laborum totam praesentium, 
                    ab voluptatibus dicta perspiciatis.</p>
            </div>
            <div class="footer-col-3">
                <h3>Useful Links</h3>
                <ul>
                    <li>Coupons</li>
                    <li>Blog Post</li>
                    <li>Return Policy</li>
                    <li>Join Affiliate</li>
                </ul>
            </div>
            <div class="footer-col-4">
                <h3>Follow Us</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>Youtube</li>
                </ul>
            </div>
        </div>
        <hr/>
         
        <p class="copyright">Copyright 2022 -  UEndustry</p>
    </div>
</div>
  );
};

export default Footer;
