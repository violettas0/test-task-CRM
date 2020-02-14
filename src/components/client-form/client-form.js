import React, {Component} from 'react';
import {connect} from "react-redux";
import {clientChange, clientForm} from "../../../actions/actions"
import styled from "styled-components";

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
  flex-direction: column;
  align-content: space-between;
  text-align: center;
  width: 250px;
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
      background-image: url("../../assets/img/line.png");
      background-color: #e8e8e8;
  };
`;

const StyledText = styled.textarea`
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
  width: 25px;
  height: 15px;
  resize: none;
  &::after {
      content: '';
      position: absolute;
      width: 175px;
      height: 3px;
      left: 3px;
      bottom: -9px;
      background-image: url("../../assets/img/line.png");
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


const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: #2f5395;
`;

class ClientForm extends Component {
    handleChange = (e) => {
        this.props.dispatch(clientChange(e.target.value))
    };
    render() {
        let { clientInfo } = this.props;
        return (
            <StyledFieldset className="clientInfo">
                <StyledForm>
                    <StyledLabel id="lastName">Фамилия:</StyledLabel>
                    <StyledInput onChange={this.handleChange} type="text" id="lastName" className="client-data"
                                 value={this.props.value ? this.props.value : clientInfo.lastName}/>
                    <StyledLabel id="name">Имя:</StyledLabel>
                    <StyledInput onChange={this.handleChange} type="text" id="name" className="client-data" value={this.props.value ? this.props.value : clientInfo.name}/>
                    <StyledLabel id="middleName">Отчество:</StyledLabel>
                    <StyledInput onChange={this.handleChange} type="text" id="middleName" className="client-data"
                                 value={this.props.value ? this.props.value : clientInfo.middleName}/>
                    <StyledLabel id="phoneNumber">Телефон:</StyledLabel>
                    <StyledInput onChange={this.handleChange} type="tel" id="phoneNumber" className="client-data"
                                 value={this.props.value ? this.props.value : clientInfo.phoneNumber}/>
                    <StyledLabel id="email">Email:</StyledLabel>
                    <StyledInput onChange={this.handleChange} type="email" id="email" className="client-data" value={this.props.value ? this.props.value : clientInfo.email}/>
                    <StyledLabel id="city">Город проживания:</StyledLabel>
                    <StyledInput onChange={this.handleChange} type="text" id="city" className="client-data" value={this.props.value ? this.props.value : clientInfo.city}/>
                    <StyledLabel id="additionalInfo">Дополнительная информация:</StyledLabel>
                    <StyledText onChange={this.handleChange} id="additionalInfo" className="client-data"
                                value={this.props.value ? this.props.value : clientInfo.additionalInfo}/>
                    <StyledLabel id="service-objects">Список объектов на обслуживание:</StyledLabel>
                    <StyledUl>
                        {clientInfo.objectsToServe.map((object) => <li
                            key={Math.floor(Math.random() * 100)}>{object}</li>)}
                    </StyledUl>
                </StyledForm>
            </StyledFieldset>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        value: state.value
    }
};


export default connect(mapStateToProps)(ClientForm);