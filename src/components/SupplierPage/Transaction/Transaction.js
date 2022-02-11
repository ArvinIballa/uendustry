import React, {useState} from 'react';
import Navbar from '../Navbar';
import {Container, TextField } from '@mui/material'
import * as RiIcons from 'react-icons/ri'
import * as BiIcons from 'react-icons/bi'
import './Transaction.css'

import {
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
} from 'reactstrap'
const Transaction = () => {

  const [isAll, setIsAll] = useState(1)
  const [isSend, setIsSend] = useState(0)
  const [isProgress, setIsProgress] = useState(0)
  const [isDelivered, setIsDelivered] = useState(0)
  const [isCancelled, setIsCancelled] = useState(0)

  const handleToSend = () => {
    setIsSend(1)
    setIsAll(0)
    setIsProgress(0)
    setIsDelivered(0)
    setIsCancelled(0)
  }

  const handleProgress = () => {
    setIsSend(0)
    setIsAll(0)
    setIsProgress(1)
    setIsDelivered(0)
    setIsCancelled(0)
  }

  const handleAll = () => {
    setIsSend(0)
    setIsAll(1)
    setIsProgress(0)
    setIsDelivered(0)
    setIsCancelled(0)
  }

  const handleDelivered = () => {
    setIsSend(0)
    setIsAll(0)
    setIsProgress(0)
    setIsDelivered(1)
    setIsCancelled(0)
  }

  const handleCancelled = () => {
    setIsSend(0)
    setIsAll(0)
    setIsProgress(0)
    setIsDelivered(0)
    setIsCancelled(1)
  }
  return(
      <>
        <Navbar></Navbar>
        <Container>
          <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/3.0/css/font-awesome.css"></link>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />
          <div className='h2-wrapper'>  
            <h2>My Transaction</h2>
          </div>
          <input
              className='searchTransaction'
              placeholder= "&#xf002; Search"
              style={{fontFamily:'FontAwesome, sans-serif'}}
              type='text'
          ></input>
          <div className="containerTable">             
            <div className="tableWrapper">
              <table>
                  <th onClick={handleAll} className='thTransaction' scope="col" style={isAll == 1 ? {borderBottom:'2px solid red', color:'red'} : {borderBottom:'2px solid white', color:'black'}}>All</th>
                  <th onClick={handleToSend} className='thTransaction' scope="col" style={isSend == 1 ? {borderBottom:'2px solid red', color:'red'} : {borderBottom:'2px solid white', color:'black'}}>To Send</th>
                  <th onClick={handleProgress} className='thTransaction' scope="col" style={isProgress == 1 ? {borderBottom:'2px solid red', color:'red'} : {borderBottom:'2px solid white', color:'black'}}>In Progress Delivery</th>
                  <th onClick={handleDelivered} className='thTransaction' scope="col" style={isDelivered == 1 ? {borderBottom:'2px solid red', color:'red'} : {borderBottom:'2px solid white', color:'black'}}>Delivered</th>
                  <th onClick={handleCancelled} className='thTransaction' scope="col" style={isCancelled == 1 ? {borderBottom:'2px solid red', color:'red'} : {borderBottom:'2px solid white', color:'black'}}>Cancelled</th>
              </table>
            </div>
            <br/>
            <div className="tableWrapper">
              <label className='storeLabel'> <RiIcons.RiStore2Line/> Osborne Corp. <label className='subStoreLabel'>Delivered on 10 January 2022</label></label><button disabled className='btnDelivered'>Delivered</button>
              <table>
              <tr>
                <td>
                    <div>
                      <img className='tablePicTransaction' src='https://image.made-in-china.com/2f0j00PuQYlrWZsCcI/ASTM-A312-Carbon-Galvanized-Seamless-Steel-Pipe.jpg'></img>
                      <span style={{ whiteSpace: 'pre-wrap' }}>
                        <label className='descTitle'>Osborne Corp. All Purpose Content{'\u000A'}<label className='descDesc'>Size: 100mm</label></label> 
                      </span>
                    </div>
                  </td>                           
                  <td>₱50,000.00</td>
                  <td>Qty: 100</td>
                </tr>
                <tr>
                <td>
                    <div>
                      <img className='tablePicTransaction' src='https://image.made-in-china.com/2f0j00PuQYlrWZsCcI/ASTM-A312-Carbon-Galvanized-Seamless-Steel-Pipe.jpg'></img>
                      <span style={{ whiteSpace: 'pre-wrap' }}>
                        <label className='descTitle'>Osborne Corp. All Purpose Content{'\u000A'}<label className='descDesc'>Size: 100mm</label></label> 
                      </span>
                    </div>
                  </td>                           
                  <td>₱50,000.00</td>
                  <td>Qty: 100</td>
                </tr>
                <tr>
                <td>
                    <div>
                      <img className='tablePicTransaction' src='https://image.made-in-china.com/2f0j00PuQYlrWZsCcI/ASTM-A312-Carbon-Galvanized-Seamless-Steel-Pipe.jpg'></img>
                      <span style={{ whiteSpace: 'pre-wrap' }}>
                        <label className='descTitle'>Osborne Corp. All Purpose Content{'\u000A'}<label className='descDesc'>Size: 100mm</label></label> 
                      </span>
                    </div>
                  </td>                           
                  <td>₱50,000.00</td>
                  <td>Qty: 100</td>
                </tr>
              </table>
            </div>
            <br/>
            <div className="tableWrapper">
              <label className='storeLabel'> <RiIcons.RiStore2Line/> Stark Industries <label className='subStoreLabel'>Delivery In Progress</label></label><button disabled className='btnInProgress'>In Progress</button>
              <table>
              <tr>
                <td>
                    <div>
                      <img className='tablePicTransaction' src='https://image.made-in-china.com/2f0j00PuQYlrWZsCcI/ASTM-A312-Carbon-Galvanized-Seamless-Steel-Pipe.jpg'></img>
                      <span style={{ whiteSpace: 'pre-wrap' }}>
                        <label className='descTitle'>Osborne Corp. All Purpose Content{'\u000A'}<label className='descDesc'>Size: 100mm</label></label> 
                      </span>
                    </div>
                  </td>                           
                  <td>₱50,000.00</td>
                  <td>Qty: 100</td>
                </tr>
                <tr>
                <td>
                    <div>
                      <img className='tablePicTransaction' src='https://image.made-in-china.com/2f0j00PuQYlrWZsCcI/ASTM-A312-Carbon-Galvanized-Seamless-Steel-Pipe.jpg'></img>
                      <span style={{ whiteSpace: 'pre-wrap' }}>
                        <label className='descTitle'>Osborne Corp. All Purpose Content{'\u000A'}<label className='descDesc'>Size: 100mm</label></label> 
                      </span>
                    </div>
                  </td>                           
                  <td>₱50,000.00</td>
                  <td>Qty: 100</td>
                </tr>
                <tr>
                <td>
                    <div>
                      <img className='tablePicTransaction' src='https://image.made-in-china.com/2f0j00PuQYlrWZsCcI/ASTM-A312-Carbon-Galvanized-Seamless-Steel-Pipe.jpg'></img>
                      <span style={{ whiteSpace: 'pre-wrap' }}>
                        <label className='descTitle'>Osborne Corp. All Purpose Content{'\u000A'}<label className='descDesc'>Size: 100mm</label></label> 
                      </span>
                    </div>
                  </td>                           
                  <td>₱50,000.00</td>
                  <td>Qty: 100</td>
                </tr>
              </table>
            </div>
            <br/>
            <div className="tableWrapper">
              <label className='storeLabel'> <RiIcons.RiStore2Line/> Umbrella Corporation <label className='subStoreLabel'>Cancelled</label></label><button disabled className='btnCancelled'>Cancelled</button>
              <table>
              <tr>
                <td>
                    <div>
                      <img className='tablePicTransaction' src='https://image.made-in-china.com/2f0j00PuQYlrWZsCcI/ASTM-A312-Carbon-Galvanized-Seamless-Steel-Pipe.jpg'></img>
                      <span style={{ whiteSpace: 'pre-wrap' }}>
                        <label className='descTitle'>Osborne Corp. All Purpose Content{'\u000A'}<label className='descDesc'>Size: 100mm</label></label> 
                      </span>
                    </div>
                  </td>                           
                  <td>₱50,000.00</td>
                  <td>Qty: 100</td>
                </tr>
               
              </table>
            </div>
          </div>
        </Container>
      </>
  )
}

export default Transaction;
