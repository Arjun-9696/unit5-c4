import axios from 'axios';
import { useState } from 'react';
import { userLogin } from '../Redux/actions';
import { NewOrder } from './NewOrder';
export const Login = () => {
  const [login, setLogin] = useState({
    username: '',
    password: '',
  });

  const handleLogin = (e) => {
    const { className, value } = e.target;
    setLogin({ ...login, [className]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location = 'https://unit5-c4-updated.vercel.app/neworder';

    axios.get('http://localhost:8080/orders', login).then(({ data }) => {
      console.log('data:', data);
      //   alert("user login successfully");
      // axios.get('http://localhost:8080/users').then(({data})=>{

      // });
    });
  };
  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={(event) => {
          handleLogin(event);
        }}
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={(event) => {
          handleLogin(event);
        }}
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit" onClick={handleSubmit}>
        Login
      </button>
      <div></div>
    </div>
  );
};
