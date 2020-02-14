import { combineReducers } from "redux";
import clientsLoadReducer from "./clients-load/clients-load-reducer";
import clientFormReducer from "./clients-form/client-form-reducer";
import searchReducer from "./search/search-reducer";
import contractLoadReducer from "./contract-load/contract-load-reducer";
import contractFormReducer from "./contract-form/contract-form-reducer"

export default combineReducers( {
    loadClients: clientsLoadReducer,
    formClients: clientFormReducer,
    search: searchReducer,
    loadContract: contractLoadReducer,
    openContract: contractFormReducer
} );



