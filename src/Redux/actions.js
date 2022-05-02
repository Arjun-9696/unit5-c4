// action types
export const LOGIN="LOGIN";
export const ORDERS = 'ORDERS';
// Action Creators
export const userLogin =(payload)=>{
    type:LOGIN,payload
}
export const orders = (payload) => {
  type: ORDERS, payload;
};