import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { clientNewForm } from "../../modules/clients-form/client-form-actions"

const StyledButton = styled.button`
  position: fixed;
  font-size: 0;
  cursor: pointer;
  background-color: #44a757;
  color: #ffffff;
  border: none;
  width: 50px;
  height: 50px;
  right: 10px;
  bottom: 10px;
  border-radius: 50%;
  z-index: 20000;
  transition: border-radius 0.5s ease 0s;
  &::before {
      content: '';
      position: absolute;
      width: 6px;
      height: 28px;
      right: 22px;
      top: 12px;
      background-color: #ffffff;
  };
  &::after {
      content: '';
      position: absolute;
      height: 6px;
      width: 27px;
      left: 12px;
      bottom: 21px;
      background-color: #ffffff;
  };
  &:focus {
     font-family: Roboto, sans-serif;
     font-weight: bold;
     font-size: 24px;
     color: #ffffff;
     right: 10px;
     bottom: 10px;
     width: 250px;
     height: 50px;
     border-radius: 0;
     transition: all 0.5s ease 0s;
  }
  &:focus::after {
      content: '';
      position: absolute;
      height: 0px;
      width: 0px;
      background-color: transparent;
  }
  &:focus::before {
      content: '';
      position: absolute;
      height: 0px;
      width: 0px;
      background-color: transparent;
  }
`;


function AddClientButton({dispatch}) {
    const handleClick = () => {
        return dispatch(clientNewForm(Math.floor(Math.random()*130020)))
    };
    return (
        <StyledButton onClick={handleClick}>Добавить клиента</StyledButton>
    )
}



export default connect()(AddClientButton)