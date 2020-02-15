import React, {Component} from "react";
import {connect} from "react-redux";
import withCRMService from "../hoc/with-crm-service"
import {search} from "../../modules/search/search-actions";
import styled from "styled-components";

const StyledInput = styled.input`
    position: absolute;
    font-family: Roboto, sans-serif;
    font-size: 18px;
    width: fit-content;
    border: dashed 2px #2f2f2f;
    z-index: 10000;
    margin: 10px 50px;
    padding-left: 5px;
    background-color: #ffffff;
    transition: border 1s ease-in-out;
    &:focus {
        outline: none;
        border: solid 2px #2f2f2f;
        transition: border 1s ease-in-out;
    }
`;

class SearchPanel extends Component {
    handleSearch = (e) => {
        const searchWord = e.target.value.toLowerCase();
        const filter = this.props.clientsInfo.filter((client) => {
            let serviceObjects = [];
            for (let object of client.objectsToServe) {
                serviceObjects = [...serviceObjects, Object.keys(object)]
            }
            client = [...Object.values(client), serviceObjects];
            console.log(client);
            return client.toString().toLowerCase().includes(searchWord)
        });
        
        this.props.dispatch(search(searchWord, filter))
    };

    render() {
        return <StyledInput onChange={this.handleSearch} type="search" placeholder="Поиск..."/>
    }
}

const mapStateToProps = (state) => {
    return {
        searchValue: state.search.searchValue,
        clientsInfo: state.loadClients.clientsInfo
    }
};

export default withCRMService(connect(mapStateToProps)(SearchPanel));