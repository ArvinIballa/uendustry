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

  
  @media screen and (max-height: 860px) {
    height: 100%;
  }
`;

export const CatDiv = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: center;
padding:50px;

`;

export const CatTitle = styled.h1`
font-size:50px;
color:blue;

@media screen and (max-width: 560px) {
    font-size: 30px;
  }
`;

// ICON POSITIONS ========================================================================
export const IconDiv = styled.div`
  border: none;
  z-index: 2;
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  padding:20px;


  @media screen and (max-height: 560px) {
    z-index: 2;
  }
`;
export const IconDiv2 = styled.div`
 
 margin-right:-50px;
`;


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