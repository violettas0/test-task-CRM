import React, {Component} from 'react';
import {connect} from "react-redux";
import {clientChange, clientClose} from "../../modules/clients-form/client-form-actions"
import {
    StyledInput,
    StyledFormUl,
    StyledLabel,
    StyledForm,
    StyledFieldset,
    StyledText,
    StyledCloseButton,
    StyledButtonAddContract,
    StyledButtonSaveChanges,
    StyledContainerButton
} from "../styled/styled-form"
import withCRMService from "../hoc/with-crm-service";
import CRMService from "../../services/crm-service";
import {clientsInfoLoaded} from "../../modules/clients-load/clients-load-actions";


class NewClientForm extends Component {
    crmService = new CRMService();

    handleCloseButton = () => {
        this.props.dispatch(clientClose());
    };

    handleChange = (e) => {
        this.props.dispatch(clientChange(e.target.id, e.target.value))
    };

    saveChanges = (e, id) => {
        e.preventDefault();
        let newData = [...this.props.clientsInfo];
        let newClient = {};
        for (let key in this.props.form) {
            if (key == "form" || key == "newForm") {
                continue
            }
            newClient = {...newClient, [key]: this.props.form[key]}
        }
        if (Object.entries(newClient).length <= 7) {
            return console.log('SORRY, CANT ADD SUCH CLIENT');
        } else {
            newData = [...newData, newClient];
            this.props.dispatch(clientClose());
            this.crmService.postJSON(newData).then(data => this.props.dispatch(clientsInfoLoaded(data)));
        }

    };


    render() {
        return (
            <StyledFieldset className="clientInfo">
                <StyledForm>
                    <StyledCloseButton onClick={this.handleCloseButton}>Закрыть</StyledCloseButton>
                    <StyledLabel id="lastName">Фамилия:</StyledLabel>
                    <StyledInput onChange={this.handleChange} type="text" id="lastName" className="client-data"
                                 value={this.props.lastName}/>
                    <StyledLabel id="name">Имя:</StyledLabel>
                    <StyledInput onChange={this.handleChange} type="text" id="name" className="client-data"
                                 value={this.props.name}/>
                    <StyledLabel id="middleName">Отчество:</StyledLabel>
                    <StyledInput onChange={this.handleChange} type="text" id="middleName" className="client-data"
                                 value={this.props.middleName}/>
                    <StyledLabel id="phoneNumber">Телефон:</StyledLabel>
                    <StyledInput onChange={this.handleChange} type="tel" id="phoneNumber" className="client-data"
                                 value={this.props.phoneNumber}/>
                    <StyledLabel id="email">Email:</StyledLabel>
                    <StyledInput onChange={this.handleChange} type="email" id="email" className="client-data"
                                 value={this.props.email}/>
                    <StyledLabel id="city">Город проживания:</StyledLabel>
                    <StyledInput onChange={this.handleChange} type="text" id="city" className="client-data"
                                 value={this.props.city}/>
                    <StyledLabel id="additionalInfo">Дополнительная информация:</StyledLabel>
                    <StyledText onChange={this.handleChange} id="additionalInfo" className="client-data"
                                value={this.props.additionalInfo}/>
                    <StyledLabel id="service-objects">Список объектов на обслуживание:</StyledLabel>
                    <StyledFormUl>
                    </StyledFormUl>
                    <StyledContainerButton>
                        <StyledButtonAddContract onClick={this.handleButtonClick}>Добавить
                            договор</StyledButtonAddContract>
                        <StyledButtonSaveChanges onClick={(e) => this.saveChanges(e, this.props.form.id)}>Сохранить
                            изменения</StyledButtonSaveChanges>
                    </StyledContainerButton>
                </StyledForm>
            </StyledFieldset>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        form: state.formClients,
        clientsInfo: state.loadClients.clientsInfo
    }
};


export default withCRMService(connect(mapStateToProps)(NewClientForm));