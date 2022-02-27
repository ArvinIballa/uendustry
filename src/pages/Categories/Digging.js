import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../navs/Headers/Navbar'
import Footer from '../../navs/Footers/Footers'
import * as BiIcons from 'react-icons/bi';
import * as IoIcons from 'react-icons/io'
import * as AiIcons from 'react-icons/ai'
import { IMAGES } from '../../navs/assets';
import successImg from '../../../src/images/success.png'
import SignUp from '../../pages/SignUp';


import Carousel from 'react-grid-carousel'
import { Container,LeftSection,NavDiv,NavTitle,NavTitle2,ProductDiv,ProductTitleDiv,ProductTitle,ProductListDiv,ButtonList1,RightSection,
  DiggingDiv,DiggingTitle,CarouselDiv,SecondBannerDiv,Title2Div,Title2, SeeAllDiv, SeeAll, HeaderDiv, PictureDiv, PictureBannerDiv, PictureDesc, PicturePriceDesc} from './elements-categories/DiggingElements'

  import {Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Input, Button} from 'reactstrap'
import './Digging.css'
const Digging = () => {

  const [orderModal, setOrderModal] = useState(false)
  const [addToCardModal, setAddToCartModal] = useState(false)

  const showModal = () => {
    setOrderModal(!orderModal)
  }

  const isAddToCart = () => {
    setAddToCartModal(!addToCardModal)
    setOrderModal(false)
  }


  const [orderModalNotLogin,setOrderModalNotLogin] = useState(false)
  const [addToCardModalNotLogin, setAddToCartModalNotLogin] = useState(false)

  const showModal2 = () => {
    setOrderModalNotLogin(!orderModalNotLogin)
  }

  const isAddToCartNotLogin = () => {
    setAddToCartModalNotLogin(!addToCardModalNotLogin)
    setOrderModalNotLogin(false)
  }
  
     // open how to SignUp modal
     const [showHowToSignUpModal, setShowHowToSignUpModal] = useState(false);
     const openHowToSignUpModal = () =>{
       setShowHowToSignUpModal(true)
       setAddToCartModalNotLogin(false)
      }
     const closeHowToSignUpModal = () => {setShowHowToSignUpModal(false)}

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
      <SignUp showHowToSignUpModal={showHowToSignUpModal} closeHowToSignUpModal={closeHowToSignUpModal}/>
    {/** MODAL Add To Cart */}

      <Modal backdrop='static' centered isOpen={addToCardModal} size='lg'>
        <div class="modal-header">
          <div class="modal-title">
          <h4><AiIcons.AiOutlineCheckCircle style={{color:'#71d0f0'}}/> <label style={{color:'#71d0f0'}}>Added to Cart Successfully</label></h4>
          </div>
        <IoIcons.IoIosCloseCircleOutline className='buttonExit' onClick={isAddToCart}/>
      </div>
        <ModalBody>
          <div className='imgWrapper'>
           <img className='successImg' src={successImg}></img>
          </div>
         
        </ModalBody>
      </Modal>
  
    {/** MODAL END Add To Cart */}

     {/** MODAL Add To Cart NOT Login*/}

     <Modal backdrop='static' centered isOpen={addToCardModalNotLogin} size='lg'>
        <div class="modal-header">
          <div class="modal-title">
          <h4> <label >Log In</label></h4>
          </div>
        <IoIcons.IoIosCloseCircleOutline className='buttonExit' onClick={isAddToCartNotLogin}/>
      </div>
        <ModalBody>
          
          <div class="InputDiv">
          <Input placeholder='Phone number/ Username/ Email'></Input>
          </div>
          <div class="InputDiv">
          <Input placeholder='Password'></Input>
          </div>
          <div >
            <label class='ButtonLogin'><Link to='/Supplier/Profile' style={{textDecoration:'none', color:'white'}}>Login</Link></label>
          </div>

          <div style={{justifyContent:'space-between', display:'flex', marginTop:6}}>
            <label class='labelBottom'>Forgot Password</label>
            <label class='labelBottom'>Log In with Phone Number</label>
          </div>

          <div style={{justifyContent:'center', display:'flex'}}>
              
              <labe class='labelOr'>New to B2B? <a onClick={openHowToSignUpModal} style={{cursor:'pointer', color:'red'}}>Sign Up</a></labe>
         
          </div>
         
        </ModalBody>
      </Modal>
  
    {/** MODAL END Add To Cart */}
    {/** MODAL   */}

      <Modal centered backdrop='static' size='xl' isOpen={orderModal}>
      <div class="modal-header">
        <h4 class="modal-title">Edging Shovel</h4>
        <IoIcons.IoIosCloseCircleOutline className='buttonExit' onClick={showModal}/>
      </div>
        <ModalBody>
          <Row>
            <Col md={6}>
              <img className='modalImg' src={IMAGES.Ace_EdgingShovel}></img>
            </Col>
            <Col md={6}>
              <div className='headerDiv'>
                <h1 className='headerDivText'>ACE HARDWARE</h1>
                <h1 className='headerDivText'>LOREM SHOVEL (75cm)</h1>
                <br/>
              </div>
              <div className='bodyDiv'>
                  <Row>
                    <Col>
                      <label className='headerDivText'>Brand: </label>&nbsp;<label>Ace Hardware</label>
                    </Col>
                    <Col>
                      <label className='headerDivText'>Sold: </label>&nbsp;<label>567 products</label>
                    </Col>
                  </Row>
                  <br/>
                  <Row>
                    <Col>
                      <label className='headerDivText'>Price: </label>&nbsp;<label>₱600.00</label>
                    </Col>
                    <Col>
                      <label className='headerDivText'>Ratings: </label>&nbsp;<label><AiIcons.AiFillStar style={{color:'#71d0f0'}}/><AiIcons.AiFillStar style={{color:'#71d0f0'}}/><AiIcons.AiFillStar style={{color:'#71d0f0'}}/><AiIcons.AiOutlineStar style={{color:'gray'}}/><AiIcons.AiOutlineStar style={{color:'gray'}}/></label>
                    </Col>
                  </Row>
                  <br/>
                  <Row>
                    <Col>
                    <label className='headerDivText'>Quantity: </label>&nbsp;&nbsp;<input defaultValue={1} min={1} className='quantity' type='number'></input>
                    </Col>
                  </Row>
                  <br/>
                  <Row>
                    <Col>
                      <button className='Add-to-Cart' onClick={isAddToCart}>Add to Cart</button>
                      <Link to='/Checkout'><button className='Checkout'>Checkout</button></Link>
                    </Col>
                  </Row>
                  <br/>
                  <br/>
              </div>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    {/** END  MODAL   */}
    {/* //=======================MODAL ADD TO CART NOT LOGIN ============= */}

    <Modal centered backdrop='static' size='xl' isOpen={orderModalNotLogin}>
      <div class="modal-header">
        <h4 class="modal-title">Edging Shovel</h4>
        <IoIcons.IoIosCloseCircleOutline className='buttonExit' onClick={showModal2}/>
      </div>
        <ModalBody>
          <Row>
            <Col md={6}>
              <img className='modalImg' src={IMAGES.Ace_EdgingShovel}></img>
            </Col>
            <Col md={6}>
              <div className='headerDiv'>
                <h1 className='headerDivText'>ACE HARDWARE</h1>
                <h1 className='headerDivText'>LOREM SHOVEL (75cm)</h1>
                <br/>
              </div>
              <div className='bodyDiv'>
                  <Row>
                    <Col>
                      <label className='headerDivText'>Brand: </label>&nbsp;<label>Ace Hardware</label>
                    </Col>
                    <Col>
                      <label className='headerDivText'>Sold: </label>&nbsp;<label>567 products</label>
                    </Col>
                  </Row>
                  <br/>
                  <Row>
                    <Col>
                      <label className='headerDivText'>Price: </label>&nbsp;<label>₱600.00</label>
                    </Col>
                    <Col>
                      <label className='headerDivText'>Ratings: </label>&nbsp;<label><AiIcons.AiFillStar style={{color:'#71d0f0'}}/><AiIcons.AiFillStar style={{color:'#71d0f0'}}/><AiIcons.AiFillStar style={{color:'#71d0f0'}}/><AiIcons.AiOutlineStar style={{color:'gray'}}/><AiIcons.AiOutlineStar style={{color:'gray'}}/></label>
                    </Col>
                  </Row>
                  <br/>
                  <Row>
                    <Col>
                    <label className='headerDivText'>Quantity: </label>&nbsp;&nbsp;<input defaultValue={1} min={1} className='quantity' type='number'></input>
                    </Col>
                  </Row>
                  <br/>
                  <Row>
                    <Col>
                      <button className='Add-to-Cart' onClick={isAddToCartNotLogin}>Add to Cart</button>
                     <button className='Checkout' onClick={isAddToCartNotLogin}>Checkout</button>
                    </Col>
                  </Row>
                  <br/>
                  <br/>
              </div>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
  {/* //END MODAL ADD TO CART NOT LOGIN*/}


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
            <PictureDiv style={{cursor:'pointer'}} onClick={showModal}>
            <img width="80%" src={cardData[3].icon} />
            <PictureDesc>Lorem Shovel (75cm)</PictureDesc>
            <PicturePriceDesc>PHP 600.00</PicturePriceDesc>
            </PictureDiv>
            <PictureDiv  style={{cursor:'pointer'}} onClick={showModal2}>
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