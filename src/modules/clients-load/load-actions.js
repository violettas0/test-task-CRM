import { clientsLoadErrorType, clientsReqType, clientsLoadType } from "./load-types"

const clientsInfoLoaded = (clients) => {
    return {type: clientsLoadType, payload: clients};
};

const clientsRequested = () => {
    return {type: clientsReqType}
};

const clientsLoadingError = (error) => {
    return {type: clientsLoadErrorType, payload: error}
};



export { clientsInfoLoaded, clientsRequested, clientsLoadingError }