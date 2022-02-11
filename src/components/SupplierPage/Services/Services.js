import React, {useState} from 'react';
import Navbar from '../Navbar';
import {Container, TextField } from '@mui/material'
import './Services.css'

import {
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
} from 'reactstrap'
const SupplierProfile = () => {

  const [modalAddInventory, setModalAddInventory] = useState(false)
  const [modalEditInventory, setModalEditInventory] = useState(false)

  const toggleAddInventory = () => {
    setModalAddInventory(!modalAddInventory)
  }

  const toggleEditInventory = () => {
    setModalEditInventory(!modalEditInventory)
  }

  return(
      <>
        <Navbar></Navbar>
        {/** ADD INVENTORY MODAL */}
        <Modal centered backdrop="static" size="md" isOpen={modalAddInventory}>
                <ModalHeader>
                    My Services
                    <label className='modalBtn' onClick={toggleAddInventory}>X</label>
                </ModalHeader>
                <ModalBody>
                   <TextField
                    label="Product Title"
                    variant='outlined'
                    style={{ width: "90%", justifyContent: "center", display: "flex", margin: "auto" }}
                   />
                   <br/>
                   <TextField
                    label="Price"
                    variant='outlined'
                    style={{ width: "90%", justifyContent: "center", display: "flex", margin: "auto" }}
                   />
                    <br/>
                   <TextField
                    label="Quantity"
                    variant='outlined'
                    style={{ width: "90%", justifyContent: "center", display: "flex", margin: "auto" }}
                   />
                    <br/>
                   <TextField
                    label="Product Description"
                    rows={4}
                    multiline
                    variant='outlined'
                    style={{ width: "90%", justifyContent: "center", display: "flex", margin: "auto" }}
                   />
                </ModalBody>
                <ModalFooter>
                <button className="btnTable" onClick={toggleAddInventory}>Add</button>
                </ModalFooter>
            </Modal>

             {/** EDIT INVENTORY MODAL */}
        <Modal centered backdrop="static" size="md" isOpen={modalEditInventory}>
                <ModalHeader>
                    My Services
                    <label className='modalBtn' onClick={toggleEditInventory}>X</label>
                </ModalHeader>
                <ModalBody>
                   <TextField
                    label="Product Title"
                    variant='outlined'
                    style={{ width: "90%", justifyContent: "center", display: "flex", margin: "auto" }}
                    value={'Osborne Corp. All Purpose Content'}
                  />
                   <br/>
                   <TextField
                    label="Price"
                    variant='outlined'
                    style={{ width: "90%", justifyContent: "center", display: "flex", margin: "auto" }}
                    value={'₱50,000.00'}
                   />
                    <br/>
                   <TextField
                    label="Quantity"
                    variant='outlined'
                    style={{ width: "90%", justifyContent: "center", display: "flex", margin: "auto" }}
                    value={'Qty: 100'}
                   />
                    <br/>
                   <TextField
                    label="Product Description"
                    rows={4}
                    multiline
                    variant='outlined'
                    style={{ width: "90%", justifyContent: "center", display: "flex", margin: "auto" }}
                    value={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
                   />
                </ModalBody>
                <ModalFooter>
                <button className="btnTable" onClick={toggleEditInventory}>Save</button>
                </ModalFooter>
            </Modal>
        <Container>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />
          <div className='h2-wrapper'>  
            <h2>My Services
              <button
                className='btnTable'
                onClick={toggleAddInventory}
              >Add Services</button></h2>
          </div>
          <div className="containerTable">             
            <div className="tableWrapper">
              <table>
                <tr>
                  <th className='thServices' scope="col">Item Number</th>
                  <th className='thServices' scope="col">Description</th>
                  <th className='thServices' scope="col">Price</th>
                  <th className='thServices' scope="col">Quantity</th>
                  <th className='thServices'>Action</th>
                </tr>
              
                    <tr>
                      <td scope="row">1</td>
                      <td>
                        <div className='row'>
                          <div className='col-md-3'>
                          <img className='tablePic' src='https://image.made-in-china.com/2f0j00PuQYlrWZsCcI/ASTM-A312-Carbon-Galvanized-Seamless-Steel-Pipe.jpg'></img>
                          </div>
                          <div className='col-md-9'>
                            <span style={{ whiteSpace: 'pre-wrap' }}>
                              <label className='descTitle'>Osborne Corp. All Purpose Content{'\u000A'}<label className='descDescServices'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </label></label>
                            </span>
                            </div>
                          </div>
                      </td>                           
                      <td>₱50,000.00</td>
                      <td>Qty: 100</td>
                      <td>
                        <button className="btnEdit" onClick={toggleEditInventory}>Edit</button>
                        <button className="btnClose">Delete</button>
                      </td>                       
                    </tr>

                    <tr>
                      <td scope="row">1</td>
                      <td>
                        <div className='row'>
                          <div className='col-md-3'>
                          <img className='tablePic' src='https://image.made-in-china.com/2f0j00PuQYlrWZsCcI/ASTM-A312-Carbon-Galvanized-Seamless-Steel-Pipe.jpg'></img>
                          </div>
                          <div className='col-md-9'>
                            <span style={{ whiteSpace: 'pre-wrap' }}>
                              <label className='descTitle'>Osborne Corp. All Purpose Content{'\u000A'}<label className='descDescServices'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </label></label>
                            </span>
                            </div>
                          </div>
                      </td>                           
                      <td>₱50,000.00</td>
                      <td>Qty: 100</td>
                      <td>
                        <button className="btnEdit" onClick={toggleEditInventory}>Edit</button>
                        <button className="btnClose">Delete</button>
                      </td>                       
                    </tr>

                    <tr>
                      <td scope="row">1</td>
                      <td>
                        <div className='row'>
                          <div className='col-md-3'>
                          <img className='tablePic' src='https://image.made-in-china.com/2f0j00PuQYlrWZsCcI/ASTM-A312-Carbon-Galvanized-Seamless-Steel-Pipe.jpg'></img>
                          </div>
                          <div className='col-md-9'>
                            <span style={{ whiteSpace: 'pre-wrap' }}>
                              <label className='descTitle'>Osborne Corp. All Purpose Content{'\u000A'}<label className='descDescServices'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </label></label>
                            </span>
                            </div>
                          </div>
                      </td>                           
                      <td>₱50,000.00</td>
                      <td>Qty: 100</td>
                      <td>
                        <button className="btnEdit" onClick={toggleEditInventory}>Edit</button>
                        <button className="btnClose">Delete</button>
                      </td>                       
                    </tr>
              </table>
            </div>
          </div>
        </Container>
      </>
  )
}

export default SupplierProfile;
