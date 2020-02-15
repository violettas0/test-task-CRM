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
import {objectInfoLoaded} from "../../modules/contract-load/contract-load-actions";
import {objectOpen} from "../../modules/contract-form/contract-form-actions";

class ClientForm extends Component {
    crmService = new CRMService();

    componentDidMount() {
        this.crmService.getObjectInfo().then(r => this.props.dispatch(objectInfoLoaded(r)));
    }

    openContract = (e) => {
        let object = this.props.objectsInfo.filter((obj) => obj.contractId.toString() === e.target.dataset.id);
        this.props.dispatch(objectOpen(object));
    };

    handleCloseButton = () => {
        this.props.dispatch(clientClose());
    };

    handleChange = (e) => {
        this.props.dispatch(clientChange(e.target.id, e.target.value))
    };

    saveChanges = (id, e) => {
        e.preventDefault();
        let newData = [...this.props.clientsInfo];
        for (let client of newData) {
            if (id === client.id) {
                Object.keys(client).forEach((data) => {
                    if (client[data] !== this.props.form[data] && this.props.form[data] !== undefined) {
                        client[data] = this.props.form[data];
                    }
                })
            }
        }
        this.crmService.postClientsInfo(newData).then(data => this.props.dispatch(clientsInfoLoaded(data)));
        this.props.dispatch(clientClose());
    };

    render() {
        let {clientInfo, objectsInfo} = this.props;
        let objects;
        if (objectsInfo) {
            let serviceObjects = this.props.objectsInfo.filter((obj) => obj.id.toString() === clientInfo.id);
            console.log(serviceObjects);
            objects = serviceObjects.map((object) => <li onClick={(e) => this.openContract(e)}
                                                         data-id={object.contractId}
                                                         key={Math.floor(Math.random() * 201920)}>{object.type}</li>)

        } else if (clientInfo.objectsToServe) {
            objects = clientInfo.objectsToServe.map((object) => <li onClick={(e) => this.openContract(e)}
                                                                    data-id={Object.values(object)[0]}
                                                                    key={Math.floor(Math.random() * 201920)}>{Object.keys(object)[0]}</li>)
        } else {
            objects = <li>Добавьте объект обслуживания.</li>
        }
        return (
            <StyledFieldset className="clientInfo">
                <StyledForm>
                    <StyledCloseButton onClick={this.handleCloseButton}>Закрыть</StyledCloseButton>
                    <StyledLabel id="lastName">Фамилия:</StyledLabel>
                    <StyledInput onChange={this.handleChange} type="text" id="lastName" className="client-data"
                                 value={this.props.form.lastName ? this.props.form.lastName : clientInfo.lastName}/>
                    <StyledLabel id="name">Имя:</StyledLabel>
                    <StyledInput onChange={this.handleChange} type="text" id="name" className="client-data"
                                 value={this.props.form.name ? this.props.form.name : clientInfo.name}/>
                    <StyledLabel id="middleName">Отчество:</StyledLabel>
                    <StyledInput onChange={this.handleChange} type="text" id="middleName" className="client-data"
                                 value={this.props.form.middleName ? this.props.form.middleName : clientInfo.middleName}/>
                    <StyledLabel id="phoneNumber">Телефон:</StyledLabel>
                    <StyledInput onChange={this.handleChange} type="tel" id="phoneNumber" className="client-data"
                                 value={this.props.form.phoneNumber ? this.props.form.phoneNumber : clientInfo.phoneNumber}/>
                    <StyledLabel id="email">Email:</StyledLabel>
                    <StyledInput onChange={this.handleChange} type="email" id="email" className="client-data"
                                 value={this.props.form.email ? this.props.form.email : clientInfo.email}/>
                    <StyledLabel id="city">Город проживания:</StyledLabel>
                    <StyledInput onChange={this.handleChange} type="text" id="city" className="client-data"
                                 value={this.props.form.city ? this.props.form.city : clientInfo.city}/>
                    <StyledLabel id="additionalInfo">Дополнительная информация:</StyledLabel>
                    <StyledText onChange={this.handleChange} id="additionalInfo" className="client-data"
                                value={this.props.form.additionalInfo ? this.props.form.additionalInfo : clientInfo.additionalInfo}/>
                    <StyledLabel id="service-objects">Список объектов на обслуживание:</StyledLabel>
                    <StyledFormUl>
                        {objects}
                    </StyledFormUl>
                    <StyledContainerButton>
                        <StyledButtonAddContract onClick={this.handleButtonClick}>Добавить
                            договор</StyledButtonAddContract>
                        <StyledButtonSaveChanges onClick={(e) => this.saveChanges(clientInfo.id, e)}>Сохранить
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
        loadContract: state.loadContract,
        objectsInfo: state.loadContract.objectsInfo
    }
};


export default withCRMService(connect(mapStateToProps)(ClientForm));