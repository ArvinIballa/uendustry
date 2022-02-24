import React from 'react'
import Footer from '../../navs/Footers/Footers'
import { Link } from 'react-router-dom';
import Navbar from '../../navs/Headers/Navbar'
import * as BiIcons from 'react-icons/bi';
import { IMAGES } from '../../navs/assets';
import { Container,LeftSection,NavDiv,NavTitle,NavTitle1,NavTitle2,ProductDiv,ProductTitleDiv,ProductTitle,ProductListDiv,ButtonList1, RightSection, SellerList, DiggingDiv, DiggingTitle, TitleRight, TitleRightDiv, BannerDiv,
PictureBannerDiv,PictureDiv,PicturePriceDesc,PictureDesc} from './elements-categories/SeeAllDiggingElements'
const SeeAllDigging = () => {

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
                  <NavTitle1 to='/Categories/Digging'>Digging</NavTitle1>
                  <BiIcons.BiChevronRight style={{height:25, width:25}}/>
                  <NavTitle2>Edging Shovel</NavTitle2>
            </NavDiv>


      <ProductDiv>
      <ProductTitleDiv>
            <ProductTitle>Filter Products</ProductTitle> 
          </ProductTitleDiv>
     
          <ProductTitleDiv>
            <ProductTitle>By Sellers</ProductTitle> 
          </ProductTitleDiv>

        <ProductListDiv>
     
              <SellerList>
              <input type="checkbox" class="form-check-input" id="exampleCheck1" style={{marginRight:10}} />
                Ace Hardware
              </SellerList>

              <SellerList>
              <input type="checkbox" class="form-check-input" id="exampleCheck1" style={{marginRight:10}} />
                Handy Man
              </SellerList>

              <SellerList>
              <input type="checkbox" class="form-check-input" id="exampleCheck1" style={{marginRight:10}} />
                Lorem Constructions Co.
              </SellerList>

              <SellerList>
              <input type="checkbox" class="form-check-input" id="exampleCheck1" style={{marginRight:10}} />
                Lorem Industries
              </SellerList>

              <SellerList>
              <input type="checkbox" class="form-check-input" id="exampleCheck1" style={{marginRight:10}} />
                Starck Industries
              </SellerList>

              <SellerList>
              <input type="checkbox" class="form-check-input" id="exampleCheck1" style={{marginRight:10}} />
               Osborne Corp.
              </SellerList>

              <SellerList>
              <input type="checkbox" class="form-check-input" id="exampleCheck1" style={{marginRight:10}} />
                Lorem Movers
              </SellerList>

        </ProductListDiv>
      </ProductDiv>
      </LeftSection>

      <RightSection>
            <TitleRightDiv>
                    <TitleRight>
                        Edging Shovels
                    </TitleRight>
            </TitleRightDiv>


            <BannerDiv>

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

            </BannerDiv>




      </RightSection>



</Container>
<Footer/>
    </>
  )
}

export default SeeAllDigging