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
import {objectInfoLoaded} from "../../modules/contract-load/contract-load-actions";
import CRMService from "../../services/crm-service";
import withCRMService from "../hoc/with-crm-service";

class Client extends Component {
    crmService = new  CRMService();

    componentDidMount() {
        this.crmService.getObjectInfo().then(r => this.props.dispatch(objectInfoLoaded(r)));
    }

    handleClick = () => {
        this.props.dispatch(clientForm(this.props.clientInfo.id));
    };

    render() {
        let {clientInfo, objectsInfo} = this.props;
        console.log(objectsInfo);
        let objects;
        if (objectsInfo) {
            let serviceObjects = this.props.objectsInfo.filter((obj) => obj.id.toString() === clientInfo.id);
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
            <StyledDiv className="clientInfo">
                <StyledContainerMainInfo>
                    <StyledLabel onClick={this.handleClick}>Фамилия:</StyledLabel>
                    <StyledInfo onClick={this.handleClick} positions={positions}>{clientInfo.lastName}</StyledInfo>
                    <StyledLabel onClick={this.handleClick}>Имя:</StyledLabel>
                    <StyledInfo onClick={this.handleClick} positions={positions}>{clientInfo.name}</StyledInfo>
                    <StyledLabel onClick={this.handleClick}>Отчество:</StyledLabel>
                    <StyledInfo onClick={this.handleClick} positions={positions}>{clientInfo.middleName}</StyledInfo>
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
        clientId: state.formClients.id,
        objectsInfo: state.loadContract.objectsInfo
    }
};

export default withCRMService(connect(mapStateToProps)(Client));