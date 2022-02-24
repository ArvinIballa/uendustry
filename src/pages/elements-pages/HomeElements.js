import styled from 'styled-components'
import { IMAGES } from '../../navs/assets';
import { Link as LinkR } from 'react-router-dom';



export const ContainerAll = styled.div`
 
  flex:1;
 
  max-width: 100%;
    overflow-x: hidden;
`;

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:#F5F5F5;
  

  @media screen and (max-height: 860px) {
    height: 100%;
  }
`;
// LEFT SECTION =================================================================
export const ContainerLeft = styled.div`
 flex: 0.3;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-right: 20%;
  margin-left: 5%;
  margin-bottom: 15%;
`
export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  color: ${({color}) => color? '#d42812': 'lightgray'};
  font-size: 110px;
  transition: all 0.2s ease-in-out;
  cursor: default;
  color:#8e8f89;
  @media screen and (max-width: 560px) {
    font-size: 85px;
  }
`;

export const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 35px;
`;

export const Description = styled.p`
  color: ${({design}) => design? '#d42812': '#fff'};
  font-size: ${({design}) => design? '18px': '20px'};
  font-weight: ${({design}) => design? 'bold': 'normal'};
  margin-top: ${({design}) => design? '20px': '0'};
 text-align:left;
  color:#030303;
  cursor: default;

  @media screen and (max-width: 560px) {
    font-size: 16px;
  }
`;


export const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
 
`;

export const Button1 = styled(LinkR)`
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  border: none;
  background-color: #FF0000;
  color: #fff;
  transition: all 0.2s ease-in-out;
  padding: 10px;
  margin-right: 7.5px;
  border-radius: 75px;
  font-size: 18px;
  font-weight: bold;
  width: 150px;
  :hover {
    background-color: #FF0000;
  }

  @media screen and (max-width: 560px) {
    font-size: 14px;
    width: 140px;
  }
`;

// RIGHT SECTION ================================================================
export const ContainerRight = styled.div`
  flex: 1;
  display: flex;
  background: url(${IMAGES.bg_2}) no-repeat center center;
  background-size: cover;
  object-fit: contain;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  min-width: 480px;
  min-height: 909px;
 
 
`;

export const GameImage = styled.img`  
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//CATEGORIES SECTION =============================================================



export const CategoriesBG = styled.div`
  height: 100%;
  width: 100%;
  background: url(${IMAGES.bg_cat}) no-repeat center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 480px;
  min-height: 900px;
`;

export const CategoriesDiv = styled.div`
  display: flex;
  margin-bottom: 700px;
  margin-left:450px;
  
    
`

export const CategoriesTitle = styled.h1`
 font-size: 90px;
 color:#ffff;


 @media screen and (max-width: 560px) {
    font-size: 85px;
  }
`

export const IconDiv = styled.div`
  border: none;
  margin-right: 50px;
  z-index: 20;
  position: relative;

  @media screen and (max-height: 560px) {
    z-index: 2;
  }
`;

// ICON POSITIONS ========================================================================
export const Icon = styled.img`
  height: 380px;
  width: 350px;
  object-fit: contain;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  resize: stretch;
  border-radius: 25px;


  :hover {
    transform: scale(1.2);
  }
`;
// PRODUCT ------------------------------------------

export const Prod1Div = styled.div`
  height: 180px;
  width: 175px;
  position: absolute;
  bottom: 130px;
  right: 600px;
  transition: all 0.2s ease-in-out;
`;

export const Prod2Div = styled.div`
  height: 180px;
  width: 175px;
  position: absolute;
  bottom: 130px;
  right: 350px;
  transition: all 0.2s ease-in-out;
`;

export const Prod3Div = styled.div`
  height: 180px;
  width: 175px;
  position: absolute;
  bottom: 130px;
  right: 100px;
  transition: all 0.2s ease-in-out;
`;

// export const Prod4Div = styled.div`
//   height: 180px;
//   width: 175px;
//   position: absolute;
//   bottom: 100px;
//   right: -100px;
//   transition: all 0.2s ease-in-out;
// `;


export const Prod5Div = styled.div`
  height: 180px;
  width: 175px;
  position: absolute;
  bottom: -250px;
  right: 600px;
  transition: all 0.2s ease-in-out;
`;



export const Prod6Div = styled.div`
  height: 180px;
  width: 175px;
  position: absolute;
  bottom: -250px;
  right: 350px;
  transition: all 0.2s ease-in-out;
`;


// export const Prod7Div = styled.div`
//   height: 180px;
//   width: 175px;
//   position: absolute;
//   bottom: -250px;
//   right: 175px;
//   transition: all 0.2s ease-in-out;
// `;


//OURPARTNER SECTION =============================================================

export const PartnerBG = styled.div`
  height: 100%;
  width: 100%;
  background: url(${IMAGES.bg_1}) no-repeat center center;
  background-size: cover;
  background-repeat: no-repeat;
  flex-direction: column;
  display:flex;
  align-items: center;
  padding:60px;
  min-width: 480px;
  min-height: 900px;
`;

export const CarouselDiv = styled.div `
 
  
`

export const OurPartnerTitleDIV = styled.div`
 margin-left:600px;


  
`;
export const OurPartnerTitle = styled.h1`
 font-size: 75px;
 color:#1c53ba;
 



 @media screen and (max-width: 560px) {
    font-size: 65px;
  }
`

