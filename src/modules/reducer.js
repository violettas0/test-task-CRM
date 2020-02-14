import { combineReducers } from "redux";
import loadReducer from "./clients-load/load-reducer";
import formReducer from "./clients-form/form-reducer";
import searchReducer from "./search/search-reducer";

export default combineReducers( {
    load: loadReducer,
    form: formReducer,
    search: searchReducer
} );



