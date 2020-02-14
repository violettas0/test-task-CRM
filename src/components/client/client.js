import React, {Component} from 'react';
import {connect} from "react-redux";
import {clientForm} from "../../modules/clients-form/client-form-actions"
import {
    StyledLabel,
    StyledDiv,
    StyledContainerAddInfo,
    StyledContainerMainInfo,
    StyledInfo,
    StyledLabelAdd,
    StyledUl,
    positions
} from "../styled/styled-client"

class Client extends Component {
    handleClick = () => {
        this.props.dispatch(clientForm(this.props.clientInfo.id));
    };

    render() {
        let {clientInfo} = this.props;
        let objects;
        if (clientInfo.objectsToServe) {
            objects = clientInfo.objectsToServe.map((object) => <li data-id={Object.values(object)[0]}
                                                                    key={Math.floor(Math.random() * 201920)}>{Object.keys(object)[0]}</li>)
        } else {
            objects = <li>Добавьте объект.</li>
        }

        return (
            <StyledDiv className="clientInfo">
                <StyledContainerMainInfo>
                    <StyledLabel onClick={this.handleClick}>Фамилия:</StyledLabel>
                    <StyledInfo positions={positions}>{clientInfo.lastName}</StyledInfo>
                    <StyledLabel onClick={this.handleClick}>Имя:</StyledLabel>
                    <StyledInfo positions={positions}>{clientInfo.name}</StyledInfo>
                    <StyledLabel onClick={this.handleClick}>Отчество:</StyledLabel>
                    <StyledInfo positions={positions}>{clientInfo.middleName}</StyledInfo>
                    <StyledLabel>Телефон:</StyledLabel>
                    <StyledInfo positions={positions}>{clientInfo.phoneNumber}</StyledInfo>
                    <StyledLabel>Email:</StyledLabel>
                    <StyledInfo positions={positions}>{clientInfo.email}</StyledInfo>
                    <StyledLabel>Город проживания:</StyledLabel>
                    <StyledInfo positions={positions}>{clientInfo.city}</StyledInfo>
                </StyledContainerMainInfo>
                <StyledContainerAddInfo>
                    <StyledLabelAdd>Дополнительная<br/> информация:</StyledLabelAdd>
                    <StyledInfo isSecond positions={positions}>{clientInfo.additionalInfo}</StyledInfo>
                    <StyledLabelAdd>Список объектов<br/> на<br/> обслуживание:</StyledLabelAdd>
                    <StyledUl>
                        {objects}
                    </StyledUl>
                </StyledContainerAddInfo>
            </StyledDiv>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        form: state.formClients.form,
        clientId: state.formClients.id
    }
};

export default connect(mapStateToProps)(Client);