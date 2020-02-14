import React, {Component} from "react";
import {connect} from "react-redux";
import {
    StyledInput,
    StyledUl,
    StyledLabel,
    StyledForm,
    StyledFieldset,
    StyledText,
    StyledCloseButton,
    StyledP
} from "../styled/styled-form"
import {objectClose} from "../../modules/contract-form/contract-form-actions";

class NewContractForm extends Component {
    closeButton = () => {
        this.props.dispatch(objectClose());
    };
    render() {
        return (
            <StyledFieldset>
                <StyledCloseButton onClick={this.closeButton}>Закрыть</StyledCloseButton>
                <StyledForm>
                    <StyledP>Тип объекта обслуживания:</StyledP>
                    <StyledLabel id="typeOfObjectAuto">Авто</StyledLabel>
                    <StyledInput id="typeOfObjectAuto" value="auto" type="radio"/>
                    <StyledLabel id="typeOfObjectRealEstate">Недвижимость</StyledLabel>
                    <StyledInput id="typeOfObjectRealEstate" value="realEstate" type="radio"/>
                </StyledForm>
                <StyledForm>
                    <StyledLabel id="contractId">Номер договора:</StyledLabel>
                    <StyledInput id="contractId" type="number" value={contractInfo.contractId}/>
                </StyledForm>
                <StyledForm>
                    <StyledLabel>Подключенные услуги:</StyledLabel>
                    <StyledUl>
                        {services}
                    </StyledUl>
                </StyledForm>
                <StyledP/>
                <StyledForm>
                    <StyledP>Статус договора:</StyledP>
                    <StyledLabel id="statusOff">Отключен</StyledLabel>
                    <StyledInput id="statusOff" type="radio" value=""/>
                    <StyledLabel id="statusPaid">Оплачен</StyledLabel>
                    <StyledInput id="statusPaid" type="radio" value=""/>
                    <StyledLabel id="statusWaiting">Ждёт оплаты</StyledLabel>
                    <StyledInput id="statusWaiting" type="radio" value=""/>
                </StyledForm>
                <StyledForm>
                    <StyledLabel id="dateActivate">Дата подключения:</StyledLabel>
                    <StyledInput id="dateActivate" type="date"/>
                    <StyledLabel id="dateOff">Действует до:</StyledLabel>
                    <StyledInput id="dateOff" type="date"/>
                </StyledForm>
            </StyledFieldset>
        )
    }

}

export default connect()(NewContractForm);