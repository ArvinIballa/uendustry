import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Headers from '../navs/Headers/Headers';

import {  Modal, ModalSection, ModalWrapper, ModalTop, ModalTitle,
  ModalBottom, ModalSubtitleDiv, ModalSubtitle, ModalSubtitle2, 
  ModalButtonDiv, ModalButton, Input, DropCheckIcon, ModalCategoryDiv, InputCategory, SelectCategory} from './elements-pages/SignUpElements';
import { IMAGES } from '../navs/assets';
import Footers from '../navs/Footers/Footers';

 const  SignUp = ({showHowToSignUpModal, closeHowToSignUpModal}) => {

   
  
  
 //Cards data
 const cardData =[
  {id: 0, icon: IMAGES.prod1, title: 'Building', path: 'prod1'},
  {id: 1, icon: IMAGES.prod2, title: 'Houses', path: 'prod2'},
  {id: 2, icon: IMAGES.prod3, title: 'Pipes', path: 'prod3'},
  {id: 3, icon: IMAGES.prod4, title: 'Machine', path: 'prod4'},
  {id: 4, icon: IMAGES.prod5, title: 'Machine', path: 'prod5'},
  {id: 5, icon: IMAGES.prod6, title: 'Machine', path: 'prod6'},
  {id: 6, icon: IMAGES.prod7, title: 'Machine', path: 'prod7'},
  {id: 7, icon: IMAGES.prod8, title: 'Machine', path: 'prod8'},
]
  return (
  <>
   { showHowToSignUpModal ? 
  <Modal>
    <ModalSection>
    <ModalWrapper>

    <DropCheckIcon onClick={closeHowToSignUpModal}/>

            <ModalTop>
           
              <ModalTitle>Registration</ModalTitle>
            </ModalTop>

            <ModalBottom>
              <ModalSubtitleDiv>
                <Input placeholder='First Name' type="text"></Input>
                <Input placeholder='Last Name' type="text"></Input>
              </ModalSubtitleDiv>

              <ModalCategoryDiv>
                <InputCategory placeholder='Contact Number' type="text"></InputCategory>
              </ModalCategoryDiv>

              <ModalCategoryDiv>
                <InputCategory placeholder='Email Address' type="text"></InputCategory>
              </ModalCategoryDiv>

              <ModalCategoryDiv>
                <InputCategory placeholder='Password' type="text"></InputCategory>
              </ModalCategoryDiv>

              <ModalCategoryDiv>
                <SelectCategory placeholder='Industry' type="select">
                <option value="" hidden style={{Color:'gray'}} > Industry..
                        </option>
                        <option value="1">Engineering</option>
                        <option value="2"></option>
                        <option value="3"></option>
            
                </SelectCategory>
              </ModalCategoryDiv>

              <ModalCategoryDiv>
                <SelectCategory placeholder='Industry' type="select">
                <option value="" hidden > Category..
                        </option>
                        <option value="1">Business Owner</option>
                        <option value="2">Customer</option>
                      
            
                  </SelectCategory>
              </ModalCategoryDiv>

              <ModalButtonDiv>
               <Link to='/Customer/Profile' style={{textDecoration:'none'}}> <ModalButton >Sign Up</ModalButton></Link>
              </ModalButtonDiv>
            </ModalBottom>



    </ModalWrapper>


    </ModalSection>

  </Modal>



    : null
    }

  </>
  );
}


export default SignUp;