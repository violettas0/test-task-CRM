import React, {Component} from "react";
import {connect} from "react-redux";
import {
    StyledInput,
    StyledFormUl,
    StyledLabel,
    StyledForm,
    StyledFieldset,
    StyledCloseButton,
    StyledP, StyledSelect, StyledContainerButton, StyledButtonSaveChanges
} from "../styled/styled-form"
import {objectChange, objectClose} from "../../modules/contract-form/contract-form-actions";
import {objectInfoLoaded} from "../../modules/contract-load/contract-load-actions";
import CRMService from "../../services/crm-service";
import withCRMService from "../hoc/with-crm-service";

class NewContractForm extends Component {
    crmService = new CRMService();


    handleChange = (e) => {
        this.props.dispatch(objectChange(e.target.id, e.target.value))
    };

    saveChanges = (e) => {
        e.preventDefault();
        let newData = [...this.props.objectsInfo];
        let newObject = {};
        for (let key in this.props.form) {
            if (key == "isNeedToOpenContract" || key == "isNeedToAddContract" || key == "contractInfo") {
                continue
            }
            newObject = {...newObject, [key]: this.props.form[key]}
        }
        if (Object.entries(newObject).length <= 4) {
            return console.log('SORRY, CANT ADD SUCH CONTRACT');
        } else {
            newData = [...newData, newObject];
            this.crmService.postObjectsInfo(newData).then(data => this.props.dispatch(objectInfoLoaded(data)));
        }

    };

    closeButton = () => {
        this.props.dispatch(objectClose());
    };

    render() {
        return (
            <StyledFieldset>
                <StyledForm>
                    <StyledCloseButton onClick={this.closeButton}>Закрыть</StyledCloseButton>
                    <StyledP>Тип объекта обслуживания:</StyledP>
                    <StyledSelect id="type" onChange={this.handleChange}
                                  value={this.props.form.type || ''}>
                        <option value="Авто">Авто</option>
                        <option value="Недвижимость">Недвижимость</option>
                    </StyledSelect>
                </StyledForm>
                <StyledForm>
                    <StyledLabel id="contractId">Номер договора:</StyledLabel>
                    <StyledInput onChange={this.handleChange} id="contractId" type="number"
                                 value={parseInt(this.props.form.contractId || '')}/>
                </StyledForm>
                <StyledForm>
                    <StyledLabel>Подключенные услуги:</StyledLabel>
                    <StyledFormUl>
                        <li>Добавить услуги.</li>
                    </StyledFormUl>
                </StyledForm>
                <StyledP/>
                <StyledForm>
                    <StyledP>Статус договора:</StyledP>
                    <StyledSelect id="status" onChange={this.handleChange}
                                  value={this.props.form.status || ''}>
                        <option value="Действует">Действует</option>
                        <option value="Отключен">Отключен</option>
                        <option value="Ожидает оплаты">Ожидает оплаты</option>
                    </StyledSelect>
                </StyledForm>
                <StyledForm>
                    <StyledLabel id="dateActivate">Дата подключения:</StyledLabel>
                    <StyledInput onChange={this.handleChange} id="dateActivate" type="date"
                                 value={this.props.form.dateActivate || ''}/>
                    <StyledLabel id="dateOff">Действует до:</StyledLabel>
                    <StyledInput onChange={this.handleChange} id="dateOff" type="date"
                                 value={this.props.form.dateOff || ''}/>
                </StyledForm>
                <StyledContainerButton>
                    <StyledButtonSaveChanges onClick={(e) => this.saveChanges(e)}>Сохранить
                        изменения</StyledButtonSaveChanges>
                </StyledContainerButton>
            </StyledFieldset>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        form: state.openContract,
        objectsInfo: state.loadContract.objectsInfo
    }
};

export default withCRMService(connect(mapStateToProps)(NewContractForm));