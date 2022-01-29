import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Register = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    //console.log(e.target);
    setUser({ ...user, [name]: value });
  };

  const register = () => {
    const { name, email, password } = user;
    if (name && email && password) {
      //alert("posted");
      axios
        .post("http://localhost:9002/register", user)
        .then((res) => alert(res.data.message));
    } else {
      alert("Invalid");
    }
  };
  return (
    <div className="Register">
      <h1>Login</h1>
      {console.log("User:", user)}
      <input
        className="row"
        type="text"
        name="name"
        value={user.name}
        placeholder="Enter your Name"
        onChange={handleChange}
      ></input>

      <input
        className="row"
        type="text"
        name="email"
        value={user.email}
        placeholder="Enter your Email"
        onChange={handleChange}
      ></input>

      <input
        className="row"
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter your Password"
        onChange={handleChange}
      ></input>

      <input
        className="row"
        name="reEnterPassword"
        value={user.reEnterPassword}
        type="password"
        placeholder="Renter your Password"
        onChange={handleChange}
      ></input>

      <div className="button" onClick={register}>
        Register
      </div>

      <h6>OR</h6>

      <div className="button" onClick={() => history.push("/login")}>
        Login
      </div>
    </div>
  );
};
export default Register;
