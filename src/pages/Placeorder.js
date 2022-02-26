import { Checkbox, FormControlLabel, Radio } from '@mui/material';
import React, {useState} from 'react'
import { Card, Container, Row, Col, CardText, Modal, ModalBody } from 'reactstrap';
import Navbar from '../navs/Headers/Navbar';
import * as IoIcons from 'react-icons/io'
import * as AiIcons from 'react-icons/ai'
import './checkout.css'
import Footer from '../navs/Footers/Footers'
import image from '../navs/assets/images/Edging_Shovel.png'
import {Link} from 'react-router-dom'


const Placeorder = () => {
    const [selectedMOP, setSelectedMOP] = useState('')
    const [placeorderModal, setPlaceorderModal] = useState(false)
    const isPlaceorder = () => {
        setPlaceorderModal(!placeorderModal)
    }

    return (
        <>
            {/** MODAL PLACE ORDER */}

            <Modal backdrop='static' centered isOpen={placeorderModal} size='lg'>
                <div class="modal-header">
                    <div class="modal-title">
                    <h4><AiIcons.AiOutlineCheckCircle style={{color:'#71d0f0'}}/> <label style={{color:'#71d0f0'}}>Your order has been placed successfully!</label></h4>
                    </div>
                    <Link to='/'><IoIcons.IoIosCloseCircleOutline className='buttonExit' onClick={isPlaceorder}/></Link>
                </div>
                <ModalBody>
                    <h5 style={{fontWeight:'bold'}}>Expected Delivery Date</h5>
                    <label style={{color:'gray', fontSize:'14px'}}>February 28, 2022 9:00AM</label>
                    <br/> <br/> <br/>
                    <h5 style={{fontWeight:'bold'}}>Order Summary</h5>
                    <br/>
                    <table>
                        <td>
                            <div>
                                <img className='checkoutImg' src={image}></img>
                                    <span style={{ whiteSpace: 'pre-wrap' }}>
                                        <label className='descTitle'>Osborne Corp. All Purpose Content{'\u000A'}<label className='descDesc'>Size: 100mm{'\u000A'}<label>Quantity: 1</label></label></label>
                                    </span>
                            </div>
                        </td>                           
                        <td style={{float:'right'}}>₱600.00</td>
                    </table>
                    <br/>
                    <h5 style={{fontWeight:'bold'}}>Delivery Charges<label style={{color:'black', fontSize:'16px', float:'right', fontWeight:'normal', marginRight:'28px'}}>₱50.00</label></h5>
                    <br/><br/>
                    <h5 style={{fontWeight:'bold'}}>Total<label style={{color:'black', fontSize:'16px', float:'right', fontWeight:'normal', marginRight:'28px'}}>₱650.00</label></h5>
                    <br/> <br/>
                </ModalBody>
            </Modal>
    
        {/** MODAL END PLACE ORDER */}
            <Navbar/>
            <Container className='containerCheckout'>
                <Row>
                    <Col md={8}>
                        <Card style={{borderBottom:'2px solid black'}} className='cardDiv'>
                        <CardText>
                            <label style={{color:'gray'}}>Shipping Address</label>
                        </CardText>
                        </Card>
                        <Row style={{marginTop:'-40px'}}>
                                    <Col md={12} >
                                        <Card className='cardDiv'>
                                            <label> John Doe &nbsp; &nbsp;  <label> 09123456789  </label></label>
                                            <label> 123 Doe Street, Brgy Agony, Lorem City</label>
                                        </Card>
                                    </Col>
                                </Row>
                        <Row>
                            <Col md={12} >
                                <Card className='cardDiv' style={{borderBottom:'2px solid black'}}>
                                    <CardText>
                                    <label style={{color:'gray'}}>Product 1 of 1</label>
                                    </CardText>
                                </Card>
                                <Row style={{marginTop:'-40px'}}>
                                    <Col md={12} >
                                        <Card className='cardDiv'>
                                            <table>
                                            
                                                <td>
                                                    <div>
                                                    <img className='checkoutImg' src={image}></img>
                                                    <span style={{ whiteSpace: 'pre-wrap' }}>
                                                        <label className='descTitle'>Osborne Corp. All Purpose Content{'\u000A'}<label className='descDesc'>Size: 100mm</label></label>
                                                        
                                                    </span>
                                                    </div>
                                                
                                                    
                                                </td>                           
                                                <td>₱600.00</td>
                                                <td>Qty: 1</td>
                
                                            </table>
                                        </Card>
                                    </Col>
                                </Row>
                        </Col>
                        </Row>
                </Col>
                
                <Col>
                    <Card  className='cardDiv'>
                        <label className='checkoutHeader'>Select Payment Method</label>
                        <Card  style={ selectedMOP == 'CreditDebit' ? {border: '2px solid lightblue'} : {border: '2px solid gray'}} className='checkoutButton'>
                            <Row>
                                <Col>
                                <label className='checkoutBtnLabel'>***********88123</label>
                                </Col>
                                <Col>
                                <Radio
                                    value="CreditDebit"
                                    onChange={e => setSelectedMOP(e.target.value)}
                                    name="radio-buttons"
                                    checked={selectedMOP === 'CreditDebit'}
                                    style={{marginLeft:'110px'}}
                                />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <label className='checkoutBtnSubLabel'>Credit/Debit Card</label>
                                </Col>
                            </Row>
                        
                        </Card>
                        <Card style={ selectedMOP == 'COD' ? {border: '2px solid lightblue'} : {border: '2px solid gray'}} className='checkoutButton'>
                            <Row>
                                <Col>
                                <label className='checkoutBtnLabel'>Cash on Delivery</label>
                                </Col>
                                <Col>
                                <Radio
                                    value="COD"
                                    onChange={e => setSelectedMOP(e.target.value)}
                                    name="radio-buttons"
                                    checked={selectedMOP === 'COD'}
                                    style={{marginLeft:'110px'}}
                                />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <label className='checkoutBtnSubLabel'>Pay when you recieve</label>
                                </Col>
                            </Row>
                        </Card>
                        <label className='checkoutHeader' style={{marginTop:'20px', color:'black'}}>Order Summary</label>
                        <label className='checkoutSubHeader'>Subtotal (1 item/s)<label className='checkoutSubHeaderRight'>PHP 600.00</label></label>
                        <label className='checkoutSubHeader'>Shipping Fee<label className='checkoutSubHeaderRight'>PHP 50.00</label></label>
                        <br/>
                        <label className='checkoutSubHeader' style={{color:'black'}}>Total<label className='checkoutSubHeaderRight'>PHP 650.00</label></label>
                        <br/>
                        <button onClick={isPlaceorder} className='checkoutBtn'>Place Order</button>
                    </Card>
                </Col>
                
            </Row>
            
            </Container>
            <Footer/>
        </>
    )
}

export default Placeorder