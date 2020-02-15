import React, {Component} from "react";
import {connect} from "react-redux";
import withCRMService from "../hoc/with-crm-service";
import CRMService from "../../services/crm-service";
import {
    StyledInput,
    StyledFormUl,
    StyledLabel,
    StyledForm,
    StyledFieldset,
    StyledCloseButton,
    StyledP,
    StyledSelect, StyledContainerButton, StyledButtonSaveChanges
} from "../styled/styled-form"
import {objectClose, objectChange} from "../../modules/contract-form/contract-form-actions";
import {objectInfoLoaded} from "../../modules/contract-load/contract-load-actions";
import moment from 'moment';
import {clientClose} from "../../modules/clients-form/client-form-actions";




class ContractForm extends Component {
    crmService = new CRMService();

    closeButton = () => {
        this.props.dispatch(objectClose());
    };
    handleChange = (e) => {
        this.props.dispatch(objectChange(e.target.id, e.target.value))
    };
    saveChanges = (id, e) => {
        e.preventDefault();
        let newData = [...this.props.objectsInfo];
        for (let object of newData) {
            if (id === object.contractId) {
                Object.keys(object).forEach((data) => {
                    if (object[data] !== this.props.change[data] && this.props.change[data] !== undefined) {
                        object[data] = this.props.change[data];
                    }
                })
            }
        }
        this.crmService.postObjectsInfo(newData).then(data => this.props.dispatch(objectInfoLoaded(data)));
        this.props.dispatch(objectClose());
        this.props.dispatch(clientClose());
    };

    render() {
        let {contractInfo} = this.props;
        let contractInf = contractInfo[0];
        let services;
        if (contractInf.services) {
            services = contractInf.services.map((service) => {
                return <li key={Math.floor(Math.random() * 10)}>{service}</li>
            });
        }
        return (
            <StyledFieldset>
                <StyledForm>
                    <StyledCloseButton onClick={this.closeButton}>Закрыть</StyledCloseButton>
                    <StyledP>Тип объекта обслуживания:</StyledP>
                    <StyledSelect id="type" onChange={this.handleChange}
                                  value={this.props.change.type ? this.props.change.type : contractInf.type}>
                        <option value="Авто">Авто</option>
                        <option value="Недвижимость">Недвижимость</option>
                    </StyledSelect>
                </StyledForm>
                <StyledForm>
                    <StyledLabel id="contractId">Номер договора:</StyledLabel>
                    <StyledInput onChange={this.handleChange} id="contractId" type="number"
                                 value={this.props.change.contractId ? this.props.change.contractId : contractInf.contractId}/>
                </StyledForm>
                <StyledForm>
                    <StyledLabel>Подключенные услуги:</StyledLabel>
                    <StyledFormUl>
                        {services}
                    </StyledFormUl>
                </StyledForm>
                <StyledP/>
                <StyledForm>
                    <StyledP>Статус договора:</StyledP>
                    <StyledSelect id="status" onChange={this.handleChange}
                                  value={this.props.change.status ? this.props.change.status : contractInf.status}>
                        <option value="Действует">Действует</option>
                        <option value="Отключен">Отключен</option>
                        <option value="Ожидает оплаты">Ожидает оплаты</option>
                    </StyledSelect>
                </StyledForm>
                <StyledForm>
                    <StyledLabel id="dateActivate">Дата подключения:</StyledLabel>
                    <StyledInput onChange={this.handleChange} id="dateActivate" type="date"
                                 value={this.props.change.dateActivate ? this.props.change.dateActivate : moment(contractInf.startDate, moment.HTML5_FMT.DATE).format('YYYY-MM-DD')}/>
                    <StyledLabel id="dateOff">Действует до:</StyledLabel>
                    <StyledInput onChange={this.handleChange} id="dateOff" type="date"
                                 value={this.props.change.dateOff ? this.props.change.dateOff : moment(contractInf.endDate, moment.HTML5_FMT.DATE).format('YYYY-MM-DD')}/>
                </StyledForm>
                <StyledContainerButton>
                    <StyledButtonSaveChanges onClick={(e) => this.saveChanges(contractInf.contractId, e)}>Сохранить
                        изменения</StyledButtonSaveChanges>
                </StyledContainerButton>
            </StyledFieldset>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        change: state.openContract,
        objectsInfo: state.loadContract.objectsInfo
    }
};

export default withCRMService(connect(mapStateToProps)(ContractForm));