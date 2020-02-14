import {clientChangeType, clientFormType} from "../types/types";

const clientForm = (id) => {
    return {type: clientFormType, payload: id}
};

const clientChange = (value) => {
    return {type: clientChangeType, payload: value}
};