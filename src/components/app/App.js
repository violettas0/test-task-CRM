import React, {Fragment} from 'react';
import {connect} from "react-redux";
import ClientList from "../client-list";
import AddClientButton from "../add-client-button";
import ContractForm from "../contract-form";
import NewContractForm from "../new-contract-form/new-contract-form";

function App({isNeedToOpenContract, isNeedToAddContract, contractInfo}) {
    if (isNeedToOpenContract === true) {
        return (<ContractForm contractInfo={contractInfo}/>)
    } else if (isNeedToAddContract) {
        return (<NewContractForm/>)
    }
    return (
        <div>
            <ClientList/>
            <AddClientButton/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isNeedToOpenContract: state.openContract.isNeedToOpenContract,
        isNeedToAddContract: state.openContract.isNeedToAddContract,
        contractInfo: state.openContract.contractInfo
    }
};

export default connect(mapStateToProps)(App);
