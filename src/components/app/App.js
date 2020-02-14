import React from 'react';
import Client from "../client/client";
import ClientList from "../client-list/client-list";
import styled from "styled-components";
import AddClientButton from "../add-client-button";

const StyledDiv = styled.div`
   
`;

function App() {
    return (
        <StyledDiv>
            <ClientList/>
            <AddClientButton/>
        </StyledDiv>
    );
}

export default App;
