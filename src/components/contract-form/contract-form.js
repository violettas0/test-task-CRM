import React, {Component} from "react";
import {connect} from "react-redux";
import {
    StyledInput,
    StyledFormUl,
    StyledLabel,
    StyledForm,
    StyledFieldset,
    StyledText,
    StyledCloseButton,
    StyledP
} from "../styled/styled-form"
import {objectClose} from "../../modules/contract-form/contract-form-actions";
import moment from 'moment';

class ContractForm extends Component {
    closeButton = () => {
        this.props.dispatch(objectClose());
    };
    render() {
        let { contractInfo } = this.props;
        let contractInf = contractInfo[0];
        let services;
        if (contractInf.services) {
            services = contractInf.services.map((service) => {return <li key={Math.floor(Math.random()*10)}>{service}</li>});
        }
        console.log(contractInf.endDate);
        return (
            <StyledFieldset>
                <button onClick={this.closeButton}>Закрыть</button>
                <StyledForm>
                    <StyledP>Тип объекта обслуживания:</StyledP>
                    <StyledLabel id="typeOfObjectAuto">Авто</StyledLabel>
                    <StyledInput id="typeOfObjectAuto" value="auto" type="radio"/>
                    <StyledLabel id="typeOfObjectRealEstate">Недвижимость</StyledLabel>
                    <StyledInput id="typeOfObjectRealEstate" value="realEstate" type="radio"/>
                </StyledForm>
                <StyledForm>
                    <StyledLabel id="contractId">Номер договора:</StyledLabel>
                    <StyledInput id="contractId" type="number" value={contractInf.contractId}/>
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
                    <StyledLabel id="statusOff">Отключен</StyledLabel>
                    <StyledInput id="statusOff" type="radio" value=""/>
                    <StyledLabel id="statusPaid">Оплачен</StyledLabel>
                    <StyledInput id="statusPaid" type="radio" value=""/>
                    <StyledLabel id="statusWaiting">Ждёт оплаты</StyledLabel>
                    <StyledInput id="statusWaiting" type="radio" value=""/>
                </StyledForm>
                <StyledForm>
                    <StyledLabel id="dateActivate">Дата подключения:</StyledLabel>
                    <StyledInput id="dateActivate" type="date" value={moment(contractInf.startDate, moment.HTML5_FMT.DATE).format('YYYY-MM-DD')}/>
                    <StyledLabel id="dateOff">Действует до:</StyledLabel>
                    <StyledInput id="dateOff" type="date" value={moment(contractInf.endDate, moment.HTML5_FMT.DATE).format('YYYY-MM-DD')}/>
                </StyledForm>
            </StyledFieldset>
        )
    }

}

export default connect()(ContractForm);