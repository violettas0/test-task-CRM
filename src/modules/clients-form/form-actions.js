import {CLIENT_FORM_CLOSE, clientChangeType, clientFormType} from "./form-types";

const clientForm = (id) => {
    return {type: clientFormType, payload: id}
};

const clientChange = (name, value) => {
    return {type: clientChangeType, payload: [name, value]}
};

const clientClose = () => {
    return {type: CLIENT_FORM_CLOSE}
};


export { clientForm, clientChange, clientClose }