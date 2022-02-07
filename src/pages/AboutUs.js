import React from 'react';
import { Link } from 'react-router-dom';
import Headers from '../navs/Headers/Headers';
import Footers from '../navs/Footers/Footers';
import { AboutUsDescription, AboutUsTitle, ContainerBG, ContainerDiv, Icon } from './elements-pages/AboutUsElements';

import { IMAGES } from '../navs/assets';



const AboutUs = () =>  {

 //Cards data
 const cardData =[
   {id: 0, icon: IMAGES.icon, title: 'Building', path: 'icon'},
 
]
   
  return (
  <>
    <Headers/>
      <ContainerBG>
         {/* <ContainerDiv>
                  <Icon src={cardData[0].icon}></Icon>
                  <AboutUsTitle>WHAT WE DO</AboutUsTitle>
                  <AboutUsDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ipsum  <br/>elit,molestie et lorem eu, vehicula mollis risus. Curabitur at aliquam nunc.</AboutUsDescription>

         </ContainerDiv> */}
         <ContainerDiv>
         <Icon src={cardData[0].icon}/>
         <AboutUsTitle>WHAT WE DO</AboutUsTitle>
         <AboutUsDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ipsum  <br/>elit,molestie et lorem eu, vehicula mollis risus. Curabitur at aliquam nunc.</AboutUsDescription>

         </ContainerDiv>
      </ContainerBG>
    
    <Footers/>
    
  </>
  );
}

export default AboutUs;
