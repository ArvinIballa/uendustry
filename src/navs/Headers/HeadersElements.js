import styled from 'styled-components'
import { IMAGES } from '../../navs/assets';
import { Link as LinkR } from 'react-router-dom';





export const MyIcon = styled.img.attrs(props => ({
    src: IMAGES.icon
  }))`
    width: 50px;
    height:42px;
    background: rgba(0, 0, 0, 0.6);
        color: #fff;
   
  `;

export const NavBar = styled.div`
background-color: #fff;
  height: 90px;
  display: flex;
  justify-content: start;
  align-items: center;

`;

export const NavbarLogoDiv = styled.div`
width:700px;
border-Right: 1px solid gray;
margin-left: 20px;
`