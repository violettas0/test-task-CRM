import { clientsLoadType, clientsReqType, clientsLoadErrorType, clientChangeType, clientFormType } from '../types/types'

const clientsInfoLoaded = (clients) => {
    return {type: clientsLoadType, payload: clients};
};

const clientsRequested = () => {
    return {type: clientsReqType }
};

const clientsLoadingError = (error) => {
    return {type: clientsLoadErrorType, payload: error}
};



export { clientsInfoLoaded, clientsRequested, clientsLoadingError, clientForm, clientChange }