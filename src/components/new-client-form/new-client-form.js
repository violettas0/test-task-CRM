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
import {objectNew} from "../../modules/contract-form/contract-form-actions";
import {objectInfoLoaded} from "../../modules/contract-load/contract-load-actions";


class NewClientForm extends Component {
    crmService = new CRMService();

    componentDidMount() {
        this.crmService.getObjectInfo().then(r => this.props.dispatch(objectInfoLoaded(r)));
    }

    addNewContract = (e) => {
        this.saveChanges(e);
        this.props.dispatch(objectNew(this.props.form.id));
    };

    handleCloseButton = () => {
        this.props.dispatch(clientClose());
    };

    handleChange = (e) => {
        this.props.dispatch(clientChange(e.target.id, e.target.value))
    };

    saveChanges = (e) => {
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
            this.crmService.postClientsInfo(newData).then(data => this.props.dispatch(clientsInfoLoaded(data)));
        }

    };


    render() {
        let objects;
        let serviceObjects = this.props.objectsInfo.filter((obj) => obj.id.toString() === this.props.form.id.toString());
        if (serviceObjects != 0) {
            objects = serviceObjects.map((object) => <li onClick={(e) => this.openContract(e)}
                                                         data-id={object.contractId}
                                                         key={Math.floor(Math.random() * 201920)}>{object.type}</li>)

        } else {
            objects = <li>Добавьте объект обслуживания.</li>
        }
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
                        {objects}
                    </StyledFormUl>
                    <StyledContainerButton>
                        <StyledButtonAddContract onClick={(e) => this.addNewContract(e)}>Добавить
                            договор</StyledButtonAddContract>
                        <StyledButtonSaveChanges onClick={(e) => this.saveChanges(e)}>Сохранить
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
        clientsInfo: state.loadClients.clientsInfo,
        objectsInfo: state.loadContract.objectsInfo
    }
};


export default withCRMService(connect(mapStateToProps)(NewClientForm));