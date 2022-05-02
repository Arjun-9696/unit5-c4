import {LOGIN} from "./actions";
import { ORDERS } from './actions';
const initialState ={users:{}};
const init = {};
export const ordersReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...store, users: payload };
    default:
      return store;
  }
};

export const loginReducer =(store=initialState,{type,payload})=>{
  switch(type){
    case LOGIN:
      return{...store,users:payload};
      default:
        return store;
  }
}

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    default:
      return store;
  }
};
