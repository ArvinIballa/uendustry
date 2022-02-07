import styled from 'styled-components'
import { IMAGES } from '../../navs/assets';
import { Link as LinkR } from 'react-router-dom';




export const ContainerBG = styled.div`
  height: 100%;
  width: 100%;
  background: url(${IMAGES.bg_cat}) no-repeat center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 480px;
  min-height: 909px;
`;


export const ContainerDiv = styled.div`
  flex-direction: column;
  display:flex;
  align-items: center;
  background-color:#ffff;
  min-width: 1500px;
  min-height: 800px;
  padding:40px;
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
 
`;

export const AboutUsDescription = styled.div`

 font-size:35px;
 margin-bottom:10px;
 
`;


