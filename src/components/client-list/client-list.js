import React, { Component } from "react";
import Client from "../client/client";
import withCRMService from "../hoc/with-crm-service";
import { connect } from "react-redux";
import { clientsInfoLoaded, clientsRequested, clientsLoadingError } from "../../../actions/actions"
import styled from "styled-components";
import Loader from "../loader";
import ErrorIndicator from "../error-indicator";
import ClientForm from "../client-form/client-form";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  `

class ClientList extends Component {
    componentDidMount() {
        const { CRMService, clientsInfoLoaded, clientsRequested, clientsLoadingError } = this.props;
        clientsRequested();
        CRMService.getClientsInfo()
            .then((data) => clientsInfoLoaded(data))
            .catch((error) => clientsLoadingError(error));
    }

    render() {
        let { clientsInfo, isLoading, errorObject, form, clientId } = this.props;
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
        return (
            <StyledDiv className="clients-container">
                {clientsInfo.map((client) => {
                    return(<Client clientInfo={client}/>)
                })}
            </StyledDiv>
    )
    }
}

const mapStateToProps = (state) => {
  return {
      clientsInfo: state.clientsInfo,
      isLoading: state.isLoading,
      errorObject: state.errorObject,
      form: state.form,
      clientId: state.id
  }
};

const mapDispatchToProps = {
    clientsInfoLoaded,
    clientsRequested,
    clientsLoadingError,
};

export default withCRMService(connect(mapStateToProps, mapDispatchToProps)(ClientList))