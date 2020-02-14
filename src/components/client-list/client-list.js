import React, {Component} from "react";
import Client from "../client/client";
import withCRMService from "../hoc/with-crm-service";
import {connect} from "react-redux";
import {clientsInfoLoaded, clientsRequested, clientsLoadingError} from "../../modules/clients-load/clients-load-actions"
import styled from "styled-components";
import Loader from "../loader";
import ErrorIndicator from "../error-indicator";
import ClientForm from "../client-form/client-form";
import NewClientForm from "../new-client-form";
import SearchPanel from "../search-panel";
import ContractForm from "../contract-form";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 1700px;
  padding: 0 50px;
  margin: 0 auto;
  `;

const StyledP = styled.p`
  display: inline-block;
  margin: 300px auto;
  font-family: Roboto, sans-serif;
  font-size: 35px;
  font-weight: bold;
  color: #b52331;
`;

class ClientList extends Component {
    componentDidMount() {
        this.props.fetchClients();
    }

    render() {
        let {clientsInfo, isLoading, errorObject, form, clientId, filteredInfo, searching, isNeedToOpen, contractInfo, newForm} = this.props;

        let clientsRender = (info) => {
            return info.map((client) => {
                return (<Client key={Math.floor(Math.random() * 1000)} clientInfo={client}/>)
            })
        };

        if (isLoading) {
            return (
                <Loader/>
            )
        }
        if (errorObject) {
            return (
                <ErrorIndicator/>
            )
        }
        if (form) {
            for (let key of clientsInfo) {
                if (key.id === clientId) {
                    return <ClientForm clientInfo={key}/>
                }
            }
        }
        if (newForm) {
            return (<NewClientForm/>)
        }


        let render = clientsInfo;
        let failSearch;

        if (searching) {
            render = filteredInfo;
            if (filteredInfo == 0) {
                failSearch = <StyledP>Поиск не дал результатов :(</StyledP>
            }
        }

        return (
            <StyledDiv className="clients-container">
                <SearchPanel/>
                {clientsRender(render)}
                {failSearch}
            </StyledDiv>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        clientsInfo: state.loadClients.clientsInfo,
        isLoading: state.loadClients.isLoading,
        errorObject: state.loadClients.errorObject,
        form: state.formClients.form,
        newForm: state.formClients.newForm,
        clientId: state.formClients.id,
        filteredInfo: state.search.filteredInfo,
        searching: state.search.search,
        isNeedToOpen: state.openContract.isNeedToOpen,
        contractInfo: state.openContract.contractInfo
    }

};

const mapDispatchToProps = (dispatch, ownProps) => {
    let {CRMService} = ownProps;
    return {
        fetchClients: () => {
            dispatch(clientsRequested());
            CRMService.getClientsInfo()
                .then((data) => dispatch(clientsInfoLoaded(data)))
                .catch((error) => dispatch(clientsLoadingError(error)))
        }
    }
};

export default withCRMService(connect(mapStateToProps, mapDispatchToProps)(ClientList))