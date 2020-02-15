import styled from "styled-components";

import Line from "../../assets/img/line.png";
import Close from '../../assets/img/close.svg';

const StyledFieldset = styled.fieldset`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  flex-wrap: wrap;
  flex-shrink: 0;
  padding: 30px;
  margin: 25px auto;
  width: 650px;
  font-family: "Roboto Light", sans-serif;
  color: #0B0A07;
  border: none;
  background-color: #ffffff;
  box-shadow: 20px 14px 45px -6px rgba(0, 0, 0, 0.1);
`;

const StyledForm = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  align-content: space-between;
  text-align: center;
  width: 100%;
`;


const StyledInput = styled.input`
  display: inline-block;
  position: relative;
  margin-bottom: 13px;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: #000000;
  background-color: transparent;
  border: 3px solid #f1f1f1;
  word-break: break-word;
  width: fit-content;
  &::after {
      content: '';
      position: absolute;
      width: 175px;
      height: 3px;
      left: 3px;
      bottom: -9px;
      background-image: url(${Line});
      background-color: #e8e8e8;
  };
`;

const StyledText = styled.textarea`
  display: block;
  position: relative;
  overflow: auto;
  margin-bottom: 13px;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: #000000;
  background-color: transparent;
  border: 3px solid #f1f1f1;
  word-break: break-word;
  width: 100%;
  height: 150px;
  resize: none;
  &::after {
      content: '';
      position: absolute;
      width: 175px;
      height: 3px;
      left: 3px;
      bottom: -9px;
      background-image: url(${Line});
      background-color: #e8e8e8;
  };
`;

const StyledLabel = styled.label`
  margin-bottom: 3px;
  width: fit-content;
  font-family: Roboto, sans-serif;
  text-transform: uppercase;
  color: #2f2f2f;
  font-size: 18px;
  letter-spacing: 0.01em;
`;


const StyledFormUl = styled.ul`
  margin: 0 0 15px;
  padding: 0;
  list-style: none;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 18px;
  text-align: start;
  cursor: pointer;
  color: #2f5395;
  li {
    margin-bottom: 5px;
    &:hover {
        color: #44a757;
    }
  }
`;

const StyledCloseButton = styled.button`
  font-size: 0;
  cursor: pointer;
  position: absolute;
  right: -3px;
  top: -19px;
  padding: 0;
  margin: 0;
  width: 12px;
  height: 12px;
  border: none;
  background-color: transparent;
  &:before {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 20px;
    width: 3px;
    background-color: #e8e8e8;
    transform: rotate(45deg);
  }
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 20px;
    width: 3px;
    background-color: #e8e8e8;
    transform: rotate(-45deg);
  }
  &:focus {
    outline: none;
  }
`;

const StyledP = styled.p`
  margin-bottom: 3px;
  width: fit-content;
  font-family: Roboto, sans-serif;
  text-transform: uppercase;
  color: #2f2f2f;
  font-size: 18px;
  letter-spacing: 0.01em;
`;

const StyledButtonAddContract = styled.button`
  color: #2f5395;
  padding: 10px 0;
  cursor: pointer;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  height: 50px;
  width: 48%;
  border: 3px solid #2f5395;
  background-color: transparent;
  font-size: 18px;
  &:focus {
      color: #ffffff;
      background-color: #2f5395;
      border: none;
  }
`;

const StyledButtonSaveChanges = styled.button`
  color: #44a757;
  padding: 10px 0;
  cursor: pointer;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  height: 50px;
  width: 48%;
  border: 3px solid #44a757;
  background-color: transparent;
  font-size: 18px;
  &:focus {
      color: #ffffff;
      background-color: #44a757;
      border: none;
  }
`;

const StyledContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledSelect = styled.select`
  display: inline-block;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: #000000;
  background-color: transparent;
  border: 3px solid #f1f1f1;
  word-break: break-word;
  width: fit-content;
`;

export {
    StyledInput,
    StyledFormUl,
    StyledLabel,
    StyledForm,
    StyledFieldset,
    StyledText,
    StyledCloseButton,
    StyledP,
    StyledButtonAddContract,
    StyledButtonSaveChanges,
    StyledContainerButton,
    StyledSelect
}