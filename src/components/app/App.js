import React, {Fragment} from 'react';
import {connect} from "react-redux";
import ClientList from "../client-list";
import AddClientButton from "../add-client-button";
import ContractForm from "../contract-form";

function App({isNeedToOpen, contractInfo}) {
    if (isNeedToOpen === true) {
        return (<div>
            <ContractForm contractInfo={contractInfo}/>
        </div>)
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
        isNeedToOpen: state.openContract.isNeedToOpen,
        contractInfo: state.openContract.contractInfo
    }
};

export default connect(mapStateToProps)(App);
