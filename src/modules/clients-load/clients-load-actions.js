import { FETCH_CLIENTS_SUCCESS, FETCH_CLIENTS_REQUESTED, FETCH_CLIENTS_FAILURE  } from "./clients-load-types"

const clientsInfoLoaded = (clients) => {
    return {type: FETCH_CLIENTS_SUCCESS, payload: clients};
};

const clientsRequested = () => {
    return {type: FETCH_CLIENTS_REQUESTED}
};

const clientsLoadingError = (error) => {
    return {type: FETCH_CLIENTS_FAILURE, payload: error}
};



export { clientsInfoLoaded, clientsRequested, clientsLoadingError }