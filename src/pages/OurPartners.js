import React from 'react';
import Footers from '../navs/Footers/Footers';
import Headers from '../navs/Headers/Headers';
import { Carousel } from 'react-bootstrap';
import { ContainerBG,CategoriesTitle, OurPartnerTitle, OurPartnerTitleDIV, CarouselDiv, ContainerLeft, TitleDiv, Title, ImageLeft, ImageLeftDesc, Container2nd} from './elements-pages/OurPartnerElements';
import { IMAGES } from '../navs/assets';
import Navbar from '../navs/Headers/Navbar';
 const OurPartners = () => {

    
 //Cards data
 const cardData =[
    {id: 0, icon: IMAGES.prod1, title: 'Building', path: 'prod1'},
    {id: 1, icon: IMAGES.icon, title: 'Houses', path: 'prod2'},
    {id: 2, icon: IMAGES.prod3, title: 'Pipes', path: 'prod3'},
    {id: 3, icon: IMAGES.prod4, title: 'Machine', path: 'prod4'},
    {id: 4, icon: IMAGES.prod5, title: 'Machine', path: 'prod5'},
    {id: 5, icon: IMAGES.prod6, title: 'Machine', path: 'prod6'},
    {id: 6, icon: IMAGES.prod7, title: 'Machine', path: 'prod7'},
    {id: 7, icon: IMAGES.prod8, title: 'Machine', path: 'prod8'},
    {id: 8, icon: IMAGES.toxic2, title: 'Machine', path: 'prod8'},
 ]

  return (
      <>
          <Navbar/>
          <ContainerBG>
                                <div >
                                <OurPartnerTitleDIV>
                                <OurPartnerTitle >OUR PARTNERS</OurPartnerTitle>
                                </OurPartnerTitleDIV>
                            <CarouselDiv>
                        <Carousel controls={false} >

                        
                        <Carousel.Item>
                            <img
                            className="d-block w-100" 
                            src={cardData[8].icon}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                        
                            className="d-block w-100" 
                            src={cardData[8].icon}
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100" 
                            src={cardData[8].icon}
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>
                        </CarouselDiv>
                        </div>

          </ContainerBG>

          <ContainerLeft>

            
            <ImageLeft src={cardData[1].icon}></ImageLeft>
            <TitleDiv> 
            <Title>  Dummy Company </Title> 
            <ImageLeftDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ipsum elit,molestie et lorem eu, vehicula mollis risus.</ImageLeftDesc>
            </TitleDiv>
     
          </ContainerLeft>

          <Container2nd>

                            
           
                <TitleDiv> 
                <Title>  Dummy Company </Title> 
                <ImageLeftDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ipsum elit,molestie et lorem eu, vehicula mollis risus.</ImageLeftDesc>
                </TitleDiv>
                <ImageLeft src={cardData[1].icon}></ImageLeft>
        </Container2nd>

        <ContainerLeft>     
            <ImageLeft src={cardData[1].icon}></ImageLeft>
            <TitleDiv> 
            <Title>  Dummy Company </Title> 
            <ImageLeftDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ipsum elit,molestie et lorem eu, vehicula mollis risus.</ImageLeftDesc>
            </TitleDiv>

        </ContainerLeft>

          <Footers/>
      </>
  )
}
export default OurPartners;
