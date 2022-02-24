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
export const NavTitle1 = styled(LinkR)`
  font-size:18px;
  font-weight:bold;
  text-decoration:none;
  color: #000;

 :hover {
    color: #000;
  }
 
  
  
`
export const NavTitle2 = styled.h1`
  margin-top:5px;
  font-size:18px;
  font-weight:bold;
  text-decoration:none;
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

padding-top:20px;
  
`

export const SellerList = styled.div`
  margin-bottom:10px;
  
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

export const TitleRightDiv = styled.div`
padding-top:40px;
  
`;

export const TitleRight = styled.h1`
  font-size:40px;
  font-weight:bold;
  
  
`

export const BannerDiv = styled.div`

background-color:white;
height:1050px;
border-radius:20px;
margin-bottom:20px;

`

export const PictureBannerDiv = styled.div`
justify-content:space-between;
display:flex;
flex-direction:row;
padding:100px;

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
