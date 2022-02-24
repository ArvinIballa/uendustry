import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../navs/Headers/Navbar'
import Footer from '../../navs/Footers/Footers'
import * as BiIcons from 'react-icons/bi';

import { IMAGES } from '../../navs/assets';

import Carousel from 'react-grid-carousel'
import { Container,LeftSection,NavDiv,NavTitle,NavTitle2,ProductDiv,ProductTitleDiv,ProductTitle,ProductListDiv,ButtonList1,RightSection,
  DiggingDiv,DiggingTitle,CarouselDiv,SecondBannerDiv,Title2Div,Title2, SeeAllDiv, SeeAll, HeaderDiv, PictureDiv, PictureBannerDiv, PictureDesc, PicturePriceDesc} from './elements-categories/DiggingElements'

const Digging = () => {

   //Cards data
 const cardData =[
  {id: 0, icon: IMAGES.Ace_EdgingShovel, title: 'Building', path: 'Ace_EdgingShovel'},
  {id: 1, icon: IMAGES.Edging_Shovel, title: 'Houses', path: 'Edging_Shovel'},
  {id: 2, icon: IMAGES.Flat_Shovel, title: 'Pipes', path: 'Flat_Shovel'},
  {id: 3, icon: IMAGES.Lorem_EdgingShovel, title: 'Machine', path: 'Lorem_EdgingShovel'},
  {id: 4, icon: IMAGES.Lorem_TrenchShovel, title: 'Machine', path: 'Lorem_TrenchShovel'},
  {id: 5, icon: IMAGES.Power_Shovel, title: 'Machine', path: 'Power_Shovel'},
  {id: 6, icon: IMAGES.TreePlanting_Shovel, title: 'Machine', path: 'TreePlanting_Shovel'},
  {id: 7, icon: IMAGES.Trench_Shovel, title: 'Machine', path: 'Trench_Shovel'},
]

  return (
    <>
    <Navbar/>
      <Container>
        <LeftSection>
            <NavDiv>
                  <NavTitle to='/'>Home</NavTitle> 
                  <BiIcons.BiChevronRight style={{height:25, width:25}}/>
                  <NavTitle2>Digging</NavTitle2>
            </NavDiv>
      <ProductDiv>
          <ProductTitleDiv>
            <ProductTitle>Products</ProductTitle> 
          </ProductTitleDiv>
        <ProductListDiv>
     
              <ButtonList1  to='/'>
                Edging Shovel
              </ButtonList1>

              <ButtonList1  to='/'>
                Trench Shovel
              </ButtonList1>

              <ButtonList1  to='/'>
                Flat Shovel
              </ButtonList1>

              <ButtonList1  to='/'>
                Tree-Planting Shovel
              </ButtonList1>

              <ButtonList1  to='/'>
                Power Shovel
              </ButtonList1>

              <ButtonList1  to='/'>
                Post Hole Shovel
              </ButtonList1>

              <ButtonList1  to='/'>
                Handheld Shovel
              </ButtonList1>

              <ButtonList1  to='/'>
                Root Shovel
              </ButtonList1>

              <ButtonList1  to='/'>
                Scoop Shovel
              </ButtonList1>

              <ButtonList1  to='/'>
                Snow Shovel
              </ButtonList1>

              <ButtonList1  to='/'>
                Pointed Digger Shovel
              </ButtonList1>

              <ButtonList1  to='/'>
                Round Digger Shovel
              </ButtonList1>

              <ButtonList1  to='/'>
                Folding Shovel
              </ButtonList1>
        </ProductListDiv>
      </ProductDiv>
      </LeftSection>
  
      <RightSection>
            <DiggingDiv>
              <DiggingTitle>
                  Digging Material
              </DiggingTitle>
            </DiggingDiv>

            <CarouselDiv>

                    <Carousel cols={5} rows={1} gap={10} loop autoplay={10000} mobileBreakpoint={600} containerStyle={{padding:15}}>
                        <Carousel.Item >
                          <img width="75%" src={cardData[5].icon} />
                        
                        </Carousel.Item>
                        <Carousel.Item>
                          <img width="75%" src={cardData[5].icon} />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img width="75%" src={cardData[5].icon} />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img width="75%" src={cardData[5].icon} />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img width="75%" src={cardData[5].icon} />
                        </Carousel.Item>

                        <Carousel.Item>
                          <img width="75%" src={cardData[5].icon} />
                        </Carousel.Item>

                        <Carousel.Item>
                          <img width="75%" src={cardData[5].icon} />
                        </Carousel.Item>

                        <Carousel.Item>
                          <img width="75%" src={cardData[5].icon} />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img width="75%" src={cardData[5].icon} />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img width="75%" src={cardData[5].icon} />
                        </Carousel.Item>
                
                  </Carousel>
            </CarouselDiv>



        <SecondBannerDiv>

        <HeaderDiv>
          <Title2Div>
          <Title2>Edging Shovel</Title2>
          </Title2Div>
          <SeeAllDiv>
            <SeeAll to='/Categories/SeeAllDigging'>See All</SeeAll>
          </SeeAllDiv>
        </HeaderDiv>

        <PictureBannerDiv>
            <PictureDiv>
            <img width="80%" src={cardData[3].icon} />
            <PictureDesc>Lorem Shovel (75cm)</PictureDesc>
            <PicturePriceDesc>PHP 600.00</PicturePriceDesc>
            </PictureDiv>
            <PictureDiv>
            <img width="80%" src={cardData[3].icon} />
            <PictureDesc>Lorem Shovel (75cm)</PictureDesc>
            <PicturePriceDesc>PHP 600.00</PicturePriceDesc>
            </PictureDiv>

            <PictureDiv>
            <img width="80%" src={cardData[3].icon} />
            <PictureDesc>Lorem Shovel (75cm)</PictureDesc>
            <PicturePriceDesc>PHP 600.00</PicturePriceDesc>
            </PictureDiv>

        </PictureBannerDiv>
        </SecondBannerDiv>


        <SecondBannerDiv>

                    <HeaderDiv>
                      <Title2Div>
                      <Title2>Trench Shovel</Title2>
                      </Title2Div>
                      <SeeAllDiv>
                        <SeeAll to='/Categories/SeeAllDigging'>See All</SeeAll>
                      </SeeAllDiv>
                    </HeaderDiv>

                    <PictureBannerDiv>
                        <PictureDiv>
                        <img width="55%" src={cardData[4].icon} />
                        <PictureDesc>Lorem Shovel (75cm)</PictureDesc>
                        <PicturePriceDesc>PHP 600.00</PicturePriceDesc>
                        </PictureDiv>
                        <PictureDiv>
                        <img width="55%" src={cardData[4].icon} />
                        <PictureDesc>Lorem Shovel (75cm)</PictureDesc>
                        <PicturePriceDesc>PHP 600.00</PicturePriceDesc>
                        </PictureDiv>

                        <PictureDiv>
                        <img width="55%" src={cardData[4].icon} />
                        <PictureDesc>Lorem Shovel (75cm)</PictureDesc>
                        <PicturePriceDesc>PHP 600.00</PicturePriceDesc>
                        </PictureDiv>

                    </PictureBannerDiv>
          </SecondBannerDiv>

        



      </RightSection>

      </Container>
    

    <Footer/>
    </>
  )
}

export default Digging