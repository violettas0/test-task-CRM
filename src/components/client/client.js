import React, {Component} from 'react';
import { connect } from "react-redux";
import { clientForm } from "../../../actions/actions"
import { StyledLabel, StyledDiv, StyledContainerAddInfo, StyledContainerMainInfo, StyledInfo, StyledLabelAdd, StyledUl, positions } from "../styled/styled-client"

class Client extends Component {
    handleClick = () => {
        this.props.dispatch(clientForm(this.props.clientInfo.id));
    };
    render() {
        let { clientInfo } = this.props;
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
                        {clientInfo.objectsToServe.map((object) => <li
                            key={Math.floor(Math.random() * 100)}>{object}</li>)}
                    </StyledUl>
                </StyledContainerAddInfo>
            </StyledDiv>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        form: state.form,
        clientId: state.id
    }
};

/*const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ clientChange }, dispatch);
};*/


export default connect(mapStateToProps)(Client);