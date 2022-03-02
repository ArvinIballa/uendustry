import styled from 'styled-components'
import { IMAGES } from '../../navs/assets';
import { Link as LinkR } from 'react-router-dom';




export const ContainerBG = styled.div`
  height: 100%;
  width: 100%;
  background: url(${IMAGES.our_partners_bg}) no-repeat center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 480px;
  min-height: 909px;
  padding:100px;
`;

//OURPARTNER SECTION =============================================================


export const CarouselDiv = styled.div `
 
  
`

export const OurPartnerTitleDIV = styled.div`
 margin-left:600px;


  
`;
export const OurPartnerTitle = styled.h1`
 font-size: 75px;
 color:#1c53ba; 
 font-family: 'Work Sans', sans-serif;
 



 @media screen and (max-width: 560px) {
    font-size: 65px;
  }
`
//FIRST PARTNER ===========================
export const ContainerLeft = styled.div`
  height: 100%;
  width: 100%;
  flex: 0.3;
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-width: 480px;
  min-height: 700px;
  padding:60px;
  
`
export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  margin-left:40px;
`;
export const Title = styled.h1`
 
  font-size: 65px;
  transition: all 0.2s ease-in-out;
  cursor: default;
 
  font-family: 'Work Sans', sans-serif;

  @media screen and (max-width: 560px) {
    font-size: 45px;
  }
`;
export const ImageLeft = styled.img`
  width: 30%;
  object-fit: contain;
  position:relative
`;
export const ImageLeftDesc = styled.h2`
 text-align:left;
 font-size:45px;
 font-family: 'Roboto', sans-serif;
`;

// SECOND PARTNER

export const Container2nd = styled.div`
  height: 100%;
  width: 100%;
  flex: 0.3;
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-width: 480px;
  min-height: 700px;
  padding:60px;
  
  
`