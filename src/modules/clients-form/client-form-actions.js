import {CLIENT_FORM_OPEN, CLIENT_FORM_CHANGE, CLIENT_FORM_CLOSE, CLIENT_MAKE_NEW_FORM} from "./client-form-types";

const clientForm = (id) => {
    return {type: CLIENT_FORM_OPEN, payload: id}
};

const clientChange = (name, value) => {
    return {type: CLIENT_FORM_CHANGE, payload: [name, value]}
};

const clientClose = () => {
    return {type: CLIENT_FORM_CLOSE}
};

const clientNewForm = (id) => {
    return {type: CLIENT_MAKE_NEW_FORM, payload: id}
};


export { clientForm, clientChange, clientClose, clientNewForm }