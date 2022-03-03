import styled from 'styled-components'
import { IMAGES } from '../../navs/assets';
import { Link as LinkR } from 'react-router-dom';




export const ContainerBG = styled.div`
  height: 100%;
  width: 100%;
  background: url(${IMAGES.about_us_bg}) no-repeat center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 480px;
  min-height: 1000px;
 
`;


export const ContainerDiv = styled.div`
  flex-direction: column;
  display:flex;
  align-items: center;
  background-color:#ffff;
  min-width: 1500px;
  min-height: 800px;
  padding:40px;

  @media screen and (max-width: 560px) {
  min-width: 40px;
  min-height: 50px;
  }
  @media screen and (max-width: 1600px) {
  min-width: 300px;
  min-height: 500px;
  }

`;

// ICON POSITIONS ========================================================================
export const Icon = styled.img`

  height: 50%;
  width: 5%;
  object-fit: contain;
  margin-bottom:10px;
 
`;

export const AboutUsTitle = styled.h1`
 color:#1c53ba;
 font-size:75px;
 margin-bottom:10px;
 font-family: 'Work Sans', sans-serif;

 @media screen and (max-width: 560px) {
  font-size:45px;
    }
 
`;

export const AboutUsDescription = styled.p`

 font-size:35px;
 margin-bottom:10px;
 
 @media screen and (max-width: 560px) {
  font-size:25px;
    }
`;


