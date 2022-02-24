import React from 'react'



import { CatDiv, CatTitle, Container, Icon, IconDiv, IconDiv2 } from './elements-categories/AllCategoriesElements';

import { Link } from 'react-router-dom';
import { IMAGES } from '../../navs/assets';
import Navbar from '../../navs/Headers/Navbar';
import Footer from '../../navs/Footers/Footers';
const AllCategories = () => {

    
 //Cards data
 const cardData =[
    {id: 0, icon: IMAGES.Spade_Categories,         title: 'Digging',   path: 'Spade_Categories'},
    {id: 1, icon: IMAGES.Drills_Categories,        title: 'Drilling',  path: 'Drills_Categories'},
    {id: 2, icon: IMAGES.MeasuringMats_Categories, title: 'Measuring', path: 'MeasuringMats_Categories'},
    {id: 3, icon: IMAGES.ChemicalsMats_Categories, title: 'Chemicals', path: 'ChemicalsMats_Categories'},
 
 ]
  return (
    <>
    <Navbar/>
        <Container>
        <CatDiv>
            <CatTitle> Categories</CatTitle>
        </CatDiv>

        <IconDiv>
        <Link to='/Categories/Digging'>
            <IconDiv2>
                 <Icon  src={cardData[0].icon}/>
            </IconDiv2>
         </Link>
           <IconDiv2>
                <Icon  src={cardData[1].icon}/>
            </IconDiv2>

            <IconDiv2>
                <Icon  src={cardData[2].icon}/>
            </IconDiv2>

            <IconDiv2>
                <Icon  src={cardData[3].icon}/>
            </IconDiv2>
        </IconDiv>

        <IconDiv>
            <IconDiv2>
                 <Icon  src={cardData[0].icon}/>
            </IconDiv2>

           <IconDiv2>
                <Icon  src={cardData[1].icon}/>
            </IconDiv2>

            <IconDiv2>
                <Icon  src={cardData[2].icon}/>
            </IconDiv2>

            <IconDiv2>
                <Icon  src={cardData[3].icon}/>
            </IconDiv2>
        </IconDiv>

        <IconDiv>
            <IconDiv2>
                 <Icon  src={cardData[0].icon}/>
            </IconDiv2>

           <IconDiv2>
                <Icon  src={cardData[1].icon}/>
            </IconDiv2>

            <IconDiv2>
                <Icon  src={cardData[2].icon}/>
            </IconDiv2>

            <IconDiv2>
                <Icon  src={cardData[3].icon}/>
            </IconDiv2>
        </IconDiv>

        

    




        </Container>

   <Footer/>

    </>
  )
}

export default AllCategories