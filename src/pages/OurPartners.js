import React from 'react';
import Footers from '../navs/Footers/Footers';
import Headers from '../navs/Headers/Headers';
import Carousel from 'react-grid-carousel'
import { ContainerBG,CategoriesTitle, OurPartnerTitle, OurPartnerTitleDIV, CarouselDiv, ContainerLeft, TitleDiv, Title, ImageLeft, ImageLeftDesc, Container2nd, Carouselp, CarouselItemDiv} from './elements-pages/OurPartnerElements';
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
                        <Carousel cols={1} rows={1} gap={10} loop autoplay={10000} mobileBreakpoint={600} >
                        <Carousel.Item >
                        <CarouselItemDiv>
                          <img width="40%" src={IMAGES.icon} />
                       
                          <Carouselp>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                          sunt in culpa qui officia deserunt mollit anim id est laborum." <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco "</Carouselp>

                          
                          </CarouselItemDiv>
                        </Carousel.Item>

                        <Carousel.Item >
                        <CarouselItemDiv>
                          <img width="40%" src={IMAGES.icon} />
                       
                         
                          <Carouselp>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                          sunt in culpa qui officia deserunt mollit anim id est laborum." <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco "</Carouselp>
                          </CarouselItemDiv>
                        </Carousel.Item>

                        <Carousel.Item >
                        <CarouselItemDiv>
                          <img width="40%" src={IMAGES.icon} />
                       
                           
                          <Carouselp>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                          sunt in culpa qui officia deserunt mollit anim id est laborum." <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco "</Carouselp>
                          </CarouselItemDiv>
                        </Carousel.Item>

                        <Carousel.Item >
                        <CarouselItemDiv>
                          <img width="40%" src={IMAGES.icon} />
                       
                          <Carouselp>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                          sunt in culpa qui officia deserunt mollit anim id est laborum." <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco "</Carouselp>
                          </CarouselItemDiv>
                        </Carousel.Item>

                        <Carousel.Item >
                        <CarouselItemDiv>
                          <img width="40%" src={IMAGES.icon} />
                        
                          <Carouselp>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                          sunt in culpa qui officia deserunt mollit anim id est laborum." <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco "</Carouselp>
                          </CarouselItemDiv>
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
