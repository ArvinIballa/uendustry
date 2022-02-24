import styled from 'styled-components'

import { Link as LinkR } from 'react-router-dom';




export const Container = styled.div`
  height: 100%;
  width: 100%;
  min-width: 480px;
  justify-content: center;
  min-height: 1000px;
  background-color:#F5F5F5;
  align-items: center;
  padding:50px;
  display: flex;


 

  
  @media screen and (max-height: 860px) {
    height: 100%;
  }
`;
export const LeftSection = styled.div`
  height: 100%;
  width: 400px;
  justify-content: center;
  min-height: 1100px;
  align-items: center;
  @media screen and (max-height: 860px) {
    height: 100%;
  }
`;



export const NavDiv = styled.div`
 
  display:flex;
  width:300px;
  height:30px;
  
`

export const NavTitle = styled(LinkR)`
  font-size:18px;
  font-weight:bold;
  text-decoration:none;
  color: #000;

 :hover {
    color: #000;
  }
`
export const NavTitle2 = styled.h1`
  font-size:20px;
  font-weight:bold;
  color: red;
  
`
//====================
export const ProductDiv = styled.div`

width:300px;
height:600px;


`

export const ProductTitleDiv = styled.div`
 padding-top:15px;
  
`

export const ProductTitle = styled.h1`
  font-size:18px;
  font-weight:bold;
  
  
`

export const ProductListDiv = styled.div`
display:flex;
flex-direction:column;
padding-left:50px;
padding-top:20px;
  
`

export const ButtonList1 = styled(LinkR)`
  cursor: pointer;
  text-decoration: none;
  border: none;
  color:gray;
  font-size: 15px;
  font-weight: bold;
  margin-bottom:10px;
  width: 150px;

  :hover {
    color: #000;
  }

  @media screen and (max-width: 560px) {
    font-size: 10px;
  
  }
`;


//====================
export const RightSection = styled.div`
justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  min-height:1000px;
  @media screen and (max-height: 860px) {
    height: 100%;
  }
`;
export const DiggingDiv = styled.div`
padding-top:40px;
  
`;

export const DiggingTitle = styled.h1`
  font-size:40px;
  font-weight:bold;
  
  
`

export const CarouselDiv = styled.div`

background-color:white;
height:250px;
border-radius:20px;
margin-bottom:20px;

`

export const SecondBannerDiv = styled.div`

background-color:white;
height:350px;
border-radius:20px;
margin-bottom:20px;

`

export const HeaderDiv = styled.div`
display:flex;

flex-direction:row;
justify-content:space-between

`

export const Title2Div = styled.div`
justify-content:flex-start;
padding:20px;

`
export const Title2 = styled.h1`
  font-size:18px;
  font-weight:bold;
  
  
`
export const SeeAllDiv = styled.div`
padding:20px;

`
export const SeeAll = styled(LinkR)`
 font-size:18px;
 font-weight:bold;
 color: #000;

 :hover {
    color: #000;
  }

`

export const PictureBannerDiv = styled.div`
justify-content:space-between;
display:flex;
flex-direction:row;
padding:50px;

`


export const PictureDiv = styled.div`


`
export const PictureDesc = styled.h4`
padding-left:20px;
font-size:18px;
font-weight:bold;
`

export const PicturePriceDesc = styled.h4`
padding-left:20px;
font-size:14px;
font-weight:bold;
`


