import axios from "axios";
import { useState } from 'react';
import { orders } from '../Redux/actions';
export const NewOrder = () => {
  // Get data of only this user. store it in redux
  // GET /orders?owner_name=john will give you all order of user john
  //  on submit click create a new order, new order has status `Not Accepted`
  const [orders,setOrders]=useState("")
  // axios.get('http://localhost:8080/users', login).then(({ data }) => {
  //   console.log('data:', data);
  // });
 const handleOrders = (e) => {
   const { className, value } = e.target;
   setLogin({ ...orders, [className]: value });
 };


 const handleSubmit = (e) => {
   e.preventDefault();
   axios.get("http://localhost:8080/orders",login).then(({data})=>{
     console.log('data:', data)
   //   alert("user login successfully");
   // axios.get('http://localhost:8080/users').then(({data})=>{

   // });
   })
 };

  return (
    <div>
      <div className="form">
        <input
          className="new-problem"
          type="text"
          name="problem"
          placeholder="Enter problem"
          onChange={(event) => {
            handleOrders(event);
          }}
        />
        {/* This input is readonly, it's coming from redux */}
        <input
          className="owner-name"
          type="text"
          name="owner_name"
          placeholder="yourname"
          readOnly
          onChange={(event) => {
            handleOrders(event);
          }}
        />
        <input
          className="brand"
          type="text"
          name="brand"
          placeholder="Enter brand name"
          onChange={(event) => {
            handleOrders(event);
          }}
        />
        {/* Create new problem, show it in below form immediately */}
        <button className="submit" onClick={handleSubmit}>
          submit
        </button>
      </div>

      <div className="pastOrders">
        {/* this button filters the data below. */}
        {/* it's just a toggle of redux state something like `showUnfinished`  */}
        <button className="filter">
          {/* Text should change like:   Show {showUnfinished ? "all" : "Only unfinished"} */}
        </button>

        {/* Here create a div for every oreder, filter them before based on `showUnfinished` */}
        <div className="past-orders">
          <span className="id"></span>. <span className="problem"></span>{' '}
          <span className="cost">
            {/* if status is not accepted then keep it empty otherwise show cost like $1234 */}
          </span>
          <p className="status">Status: </p>
          <hr />
        </div>
      </div>
    </div>
  );
};
