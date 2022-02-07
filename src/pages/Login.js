import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Modal, ModalSection, ModalWrapper, ModalTop, ModalTitle,
    ModalBottom, ModalSubtitleDiv, ModalSubtitle, ModalSubtitle2, 
    ModalButtonDiv, ModalButton, Input, DropCheckIcon
  } from './elements-pages/LoginElements';

const Login = ({showHowToPlayModal, closeHowToPlayModal}) => {
  return (
  <>
  { showHowToPlayModal ? 
  <Modal>
    <ModalSection>
    <ModalWrapper>

    <DropCheckIcon onClick={closeHowToPlayModal}/>

            <ModalTop>
           
              <ModalTitle>Account Info</ModalTitle>
            </ModalTop>

            <ModalBottom>
              <ModalSubtitleDiv>
                <Input placeholder='EMAIL' type="text"></Input>
                <Input placeholder='PASSWORD' type="text"></Input>
              </ModalSubtitleDiv>
              <ModalButtonDiv>
               <Link to='/Supplier/Profile' style={{textDecoration:'none'}}> <ModalButton >Log In</ModalButton></Link>
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

export default Login;