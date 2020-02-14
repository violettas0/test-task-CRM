import { createStore } from "redux";
import { reducer } from './Redux/reducers/reducer'

export const store = createStore(reducer);