import {OPEN_OBJECT_SUCCESS, CLOSE_OBJECT_SUCCESS} from "../contract-form/contract-form-types";

const objectOpen = (obj) => {
    return {type: OPEN_OBJECT_SUCCESS, payload: obj}
};

const objectClose = () => {
    return{type: CLOSE_OBJECT_SUCCESS}
};

export { objectOpen, objectClose }