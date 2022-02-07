import React, {useState} from 'react';
import { IMAGES } from '../assets';
import { Link } from "react-router-dom";
const Footers =() =>{
       //Cards data
 const cardData =[
   {id: 0, icon: IMAGES.icon, title: 'Building', path: 'icon'},
 
]
    return(
        <>
        <footer>
<div class="main-footer">
   <div class="container">
      <div class="row">
         <div class="footer-top clearfix">
            <div class="col-md-2 col-sm-6">
               <h2>REGISTER NOW
               </h2>
            </div>
            <div class="col-md-6 col-sm-6">
               <div class="form-box">
                  <input type="text" placeholder="Enter Email..." />
                  <button>Continue</button>
               </div>
            </div>
         
         </div>
      
      </div>
   </div>
</div>
<div class="copyright">
   <div class="container">
      <div class="row">
         <div class="col-md-8">
            <p><img style={{ height: 40, width: 50, backgroundColor:'coral'}} src={cardData[0].icon} alt="" /> All Rights Reserved. Company Name © 2022.</p>
         </div>
         <div class="col-md-4">
            <ul class="list-inline socials">
               <li>
                  <a href="">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
               </li>
               <li>
                  <a href="">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
               </li>
               <li>
                  <a href="">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
               </li>
               <li>
                  <a href="#">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
               </li>
            </ul>
         
         </div>
      </div>
   </div>
</div>
</footer>
        </>
    )
}

export default Footers;
