import React, {useState} from 'react';
import Navbar from '../Navbar';
import {Container, TextField } from '@mui/material'
import './Deliveries.css'

import {
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
} from 'reactstrap'
const DeliveriesProfile = () => {

  return(
      <>
        <Navbar></Navbar>
        <Container>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />
          <div className='h2-wrapper'>  
            <h2>My Deliveries
              <input
                className='searchInput'
              ></input></h2>
          </div>
          <div className="containerTable">             
            <div className="tableWrapper">
              <table>
                <tr>
                  <th scope="col">Order ID</th>
                  <th scope="col">Client Name</th>
                  <th scope="col">Status</th>
                  <th style={{textAlign:'center'}} scope="col">Address</th>
                  <th style={{textAlign:'center'}}>Action</th>
                </tr>
              
                    <tr>
                      <td scope="row">1</td>
                      <td>John Doe</td>                           
                      <td>In Progress</td>
                      <td><label className='tableAddress'>123 Street Block 1023 Anonymous Subdivision, Newborne, Cyber City</label></td>
                      <td>
                        <button className="btnTable">Mark as Delivered</button>
                      </td>                       
                    </tr>

                    <tr>
                      <td scope="row">2</td>
                      <td>John Doe</td>                           
                      <td>Delivered</td>
                      <td><label className='tableAddress'>123 Street Anonymous Subdivision, Newborne, Cyber City</label></td>
                      <td>
                        <button className="btnTable">Mark as Delivered</button>
                      </td>                       
                    </tr>

                    <tr>
                      <td scope="row">3</td>
                      <td>John Doe</td>                           
                      <td>Cancelled</td>
                      <td><label className='tableAddress'>123 Street Block 1023 Anonymous Subdivision, Newborne, Cyber City</label></td>
                      <td>
                        <button className="btnTable">Mark as Delivered</button>
                      </td>                       
                    </tr>

                    <tr>
                      <td scope="row">4</td>
                      <td>John Doe</td>                           
                      <td>Delivered</td>
                      <td><label className='tableAddress'>123 Street Anonymous Subdivision, Newborne, Cyber City</label></td>
                      <td>
                        <button className="btnTable">Mark as Delivered</button>
                      </td>                       
                    </tr>

                    <tr>
                      <td scope="row">5</td>
                      <td>John Doe</td>                           
                      <td>Cancelled</td>
                      <td><label className='tableAddress'>123 Street Block 1023 Anonymous Subdivision, Newborne, Cyber City</label></td>
                      <td>
                        <button className="btnTable">Mark as Delivered</button>
                      </td>                       
                    </tr>
              </table>
            </div>
          </div>
        </Container>
      </>
  )
}

export default DeliveriesProfile;
