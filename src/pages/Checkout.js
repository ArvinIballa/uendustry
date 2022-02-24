import { Checkbox, FormControlLabel, Radio } from '@mui/material';
import React, {useState} from 'react'
import { Card, Container, Row, Col, CardText } from 'reactstrap';
import Navbar from '../navs/Headers/Navbar';
import './checkout.css'
import Footer from '../navs/Footers/Footers'
import image from '../navs/assets/images/Edging_Shovel.png'

const Checkout = () => {

    const [selectedMOP, setSelectedMOP] = useState('')
  return (
    <>
        <Navbar/>
        <Container>
           <Row>
               <Col md={8}>
                    <Card className='cardDiv'>
                    <CardText>
                    <FormControlLabel
                        style={{color:'gray'}}
                        value="end"
                        control={<Checkbox />}
                        label="Select All Items"
                        labelPlacement="end"
                    />
                        <label className='delete'>Delete</label>
                    </CardText>
                    </Card>
                    <Row>
                        <Col md={12} >
                            <Card className='cardDiv' style={{borderBottom:'2px solid black'}}>
                                <CardText>
                                    <FormControlLabel
                                        style={{color:'gray'}}
                                        value="end"
                                        control={<Checkbox />}
                                        label="Ace Hardware"
                                        labelPlacement="end"
                                    />
                                </CardText>
                            </Card>
                            <Row style={{marginTop:'-40px'}}>
                                <Col md={12} >
                                    <Card className='cardDiv'>
                                        <table>
                                            <td>
                                            <Checkbox style={{marginLeft:'-34px'}}/>
                                            </td>
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
                <Card className='cardDiv'>
                    <label className='checkoutHeader'>Select Payment Method</label>
                    <Card className='checkoutButton'>
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
                    <Card className='checkoutButton'>
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
                    <button className='checkoutBtn'>Proceed to Checkout</button>
                </Card>
               </Col>
               
           </Row>
           
        </Container>
        <Footer/>
    </>
  )
}

export default Checkout