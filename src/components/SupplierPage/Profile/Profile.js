import React, {useState} from 'react';
import Navbar from '../Navbar';
import {Container, TextField } from '@mui/material'
import './Profile.css'

import {
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  Input
} from 'reactstrap'
function Profile() {
  return (
    <>
        <Navbar></Navbar>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />
        <Container>
            <h2 className='h2-profile'>My Profile</h2>
            <label className='subHeader'>Edit and manage your profile</label>
            <div className='row'>
                <div className='col'>
                    <label style={{marginRight:'60px'}} className='profileLabel'> First Name: </label>
                    <input className='profileInput'></input>
                </div>

                <div className='col'>
                    <label style={{marginRight:'72px'}} className='profileLabel2'> Last Name: </label>
                    <input className='profileInput'></input>
                </div>
            </div>
                <div className='spacer'></div>
                <div className='row'>
                    <div className='col'>
                        <label className='profileLabel'> Contact Number: </label>
                        <input className='profileInput2'></input>
                    </div>
                </div>
                <div className='spacer'></div>
                <div className='row'>
                    <div className='col'>
                        <label style={{marginRight:'35px'}} className='profileLabel'> Email Address: </label>
                        <input className='profileInput'></input>
                    </div>

                    <div className='col'>
                        <label className='profileLabel2'> Password: </label>
                        <input type='password' className='profileInput'></input>
                    </div>
                </div>
                <div className='spacer'></div>
                <div className='row'>
                    <div className='col'>
                        <label style={{marginRight:'80px'}} className='profileLabel'> Industry:</label>
                        <select type='select' className='profileSelect'>
                            <option disabled selected>Select</option>
                            <option>Engineering</option>
                        </select>
                    </div>
                    <div className='col'>
                        <label className='profileLabel'>Confirm Password: </label>
                        <input type='password' className='profileInput'></input>
                    </div>
                </div>
                <div className='spacer'></div>
                <div className='row'>
                    <div className='col'></div>
                    <div className='col'><button className='btnSaveProfile'>Save</button></div>
                </div>
        </Container>
    </>
  )
}

export default Profile;
