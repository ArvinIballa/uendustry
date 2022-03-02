import styled from 'styled-components'
import { IMAGES } from '../../navs/assets';
import { Link as LinkR } from 'react-router-dom';




export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  
`;


//CONTAINER LEFT====================================================
export const ContainerLeft = styled.div`
  min-width: 700px;
  min-height: 910px;
  padding:40px;
  background-color:#F5F5F5;
`;


export const NewsTitleDiv = styled.div`
  display: flex;
`;

export const NewsTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
 font-size:35px;
 margin-bottom:10px;
 
`;

export const NewsContainerLeft = styled.div`

 height: 750px;
 width: 600px;
 overflow-y: scroll;
 scroll-behavior: smooth;
 background-color:#ffff;
 flex:1;
 position:absolute;
 --ms-overflow-style: none;
 ::-webkit-scrollbar {
    display: none;
}
`;

export const ImageLeft = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const ImageLeftDesc = styled.h2`
 text-align:left;
 font-size:20px;
 font-family: 'Roboto', sans-serif;
 padding-bottom:30px;
 border-bottom: 2px solid gray;
`;


export const Image2LeftDiv = styled.div`
  margin-top:20px;
  height: 120px;
  width: 583px;
  position: absolute;
  border-bottom: 2px solid gray;
  display:flex;
`;

export const Image2Left = styled.img`
  height: 70%;
  width: 50%;
  object-fit: contain;
`;

export const Image2LeftDesc = styled.p`
 text-align:left;
 font-size:20px;
 font-family: 'Roboto', sans-serif;
`;

export const Image3LeftDiv = styled.div`
  margin-top:160px;
  height: 120px;
  width: 583px;
  position: absolute;
  border-bottom: 2px solid gray;
  display:flex;
`;

export const Image3Left = styled.img`
  height: 70%;
  width: 50%;
  object-fit: contain;
`;

export const Image3LeftDesc = styled.p`
 text-align:left;
 font-size:20px;
 font-family: 'Roboto', sans-serif;
`;

export const Image4LeftDiv = styled.div`
  margin-top:300px;
  height: 120px;
  width: 583px;
  position: absolute;

  display:flex;
`;

export const Image4Left = styled.img`
  height: 70%;
  width: 50%;
  object-fit: contain;
`;

export const Image4LeftDesc = styled.p`
 text-align:left;
 font-size:20px;
 font-family: 'Roboto', sans-serif;
 
`;
//CONTAINER RIGHT====================================================


export const ContainerRight = styled.div`
  min-width: 100%;
  min-height: 910px;
  padding:40px;
  
`;

export const TitleRightDiv = styled.div`
  display: flex;
  margin-bottom: 10px;
`;


export const TitleRight = styled.p`
  font-size:30px;
  font-family: 'Roboto', sans-serif;
  
  cursor: default;

  @media screen and (max-width: 560px) {
    font-size: 16px;
  }

`;
export const AuthorRightDiv = styled.div`
  display: flex;
 
`;

export const AuthorRight = styled.p`
  font-size:10px;
  font-family: 'Roboto', sans-serif;
  
  cursor: default;

  @media screen and (max-width: 560px) {
    font-size: 16px;
  }

`;

export const DateRightDiv = styled.div`
  display: flex;
 
`;


export const DateRight = styled.p`
  font-size:10px;
  
  cursor: default;
  @media screen and (max-width: 560px) {
    font-size: 16px;
  }

`;

export const ImageRight = styled.img`
  width: 100%;
  height:100%;
  
  
`;


export const ImageRightPos = styled.div`
  height: 50%;
  width: 62%;

 
`;

export const DescRightDiv = styled.div`
  display: flex;
  width: 62%;
  flex-direction:row;
  justify-content:center
 
`;

export const DescRight = styled.p`
  font-size:20px;
  font-family: 'Roboto', sans-serif;
  text-align:left;
  cursor: default;

  @media screen and (max-width: 560px) {
    font-size: 16px;
  }

`;





