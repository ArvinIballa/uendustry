import styled from 'styled-components'
import { IMAGES } from '../../navs/assets';
import { Link as LinkR } from 'react-router-dom';



export const ContainerAll = styled.div`
 
  flex:1;
 
  display:flex;
  flex-direction:column;
    overflow-x: hidden;
    align-items: center;
  justify-content: center;
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
  padding:175px;
  margin-bottom: 100px;
  
`
export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 20px;
  margin-left:-20px;

`;

export const Title = styled.h1`
  color: ${({color}) => color? '#d42812': 'lightgray'};
  font-size: 110px;
  transition: all 0.2s ease-in-out;
  cursor: default;
  font-family: 'Work Sans', sans-serif;
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
  font-family: 'Roboto', sans-serif;
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
  background: url(${IMAGES.categories_bg}) no-repeat center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 480px;
  min-height: 900px;
`;

export const CategoriesDiv = styled.div`
 
  margin-bottom: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
 
  
    
`

export const CategoriesTitle = styled.h1`
 font-size: 60px;
 color:#ffff;
 font-family: 'Work Sans', sans-serif;

 @media screen and (max-width: 560px) {
    font-size: 45px;
  }
`

export const DivIcon = styled.div `
justify-content:'space-between'
`

export const IconDiv = styled.div`
  border: none;
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
  @media screen and (max-width: 560px) {
  height: 200px;
  width: 350px;
  }
`;
// PRODUCT ------------------------------------------

export const Prod1Div = styled.div`
  height: 180px;
  width: 175px;
  position: absolute;
  bottom: 130px;
  right: 450px;

  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 560px) {
  bottom: 100px;
  right: 260px;
  }
  
`;

export const Prod2Div = styled.div`
  height: 180px;
  width: 175px;
  position: absolute;
  bottom: 130px;
  right: 175px;

  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 560px) {
    bottom: 100px;
    right: 110px;
}
`;

export const Prod3Div = styled.div`
  height: 180px;
  width: 175px;
  position: absolute;
  bottom: 130px;
  right: -100px;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 560px) {
    bottom: 100px;
    right: -40px;
}
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
  right: 325px;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 560px) {
    bottom: -100px;
    right: 180px;
}
`;



export const Prod6Div = styled.div`
  height: 180px;
  width: 175px;
  position: absolute;
  bottom: -250px;
  right: 50px;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 560px) {
    bottom: -100px;
    right: 30px;
}
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
  background: url(${IMAGES.our_partners_bg}) no-repeat center center;
  background-size: cover;
  background-repeat: no-repeat;
  flex-direction: column;
  display:flex;
  align-items: center;
 
  min-width: 480px;
  min-height: 900px;
`;

export const CarouselDiv = styled.div `
  padding:60px;
  
`

export const OurPartnerTitleDIV = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:25px;


  
`;
export const OurPartnerTitle = styled.h1`
 font-size: 55px;
 color:#1c53ba;
 font-family: 'Work Sans', sans-serif;
 



 @media screen and (max-width: 560px) {
    font-size: 40px;
  }
`

