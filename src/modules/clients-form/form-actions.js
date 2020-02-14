import {CLIENT_FORM_OPEN, CLIENT_FORM_CHANGE, CLIENT_FORM_CLOSE} from "./form-types";

const clientForm = (id) => {
    return {type: CLIENT_FORM_OPEN, payload: id}
};

const clientChange = (name, value) => {
    return {type: CLIENT_FORM_CHANGE, payload: [name, value]}
};

const clientClose = () => {
    return {type: CLIENT_FORM_CLOSE}
};


export { clientForm, clientChange, clientClose }