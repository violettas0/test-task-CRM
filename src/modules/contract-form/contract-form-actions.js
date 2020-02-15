import { OPEN_OBJECT_SUCCESS, CLOSE_OBJECT_SUCCESS, CHANGE_OBJECT_FORM, NEW_OBJECT_FORM } from "../contract-form/contract-form-types";

const objectOpen = (obj) => {
    return { type: OPEN_OBJECT_SUCCESS, payload: obj }
};

const objectClose = () => {
    return { type: CLOSE_OBJECT_SUCCESS }
};

const objectNew = (id) => {
    return { type: NEW_OBJECT_FORM, payload: id }
};

const objectChange = (name, value) => {
    return{ type:CHANGE_OBJECT_FORM, payload: [name, value] }
};

export { objectOpen, objectClose, objectChange, objectNew };