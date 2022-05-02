import { legacy_createStore as createStore } from "redux";
// import {combineReducers,createStore } from "redux"
import {loginReducer} from "./reducer"
import { ordersReducer } from './reducer';
import {Provider} from "react-redux"
// export const store = legacy_createStore(reducer);
 export const store = createStore(
   loginReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__(),
   ordersReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
 );