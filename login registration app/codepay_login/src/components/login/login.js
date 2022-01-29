import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    //name: "",
    email: "",
    password: "",
    //reEnterPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const login = () => {
    const { email, password } = user;
    if (email && password) {
      axios.post("http://localhost:9002/login", user).then((res) => {
        alert(res.data.message);
        // setLoginUser(res.data.user);

        if (res.data.message === "Login sucess") history.push("/");
        else history.push("/login");
      });
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>

      <input
        className="row"
        name="email"
        value={user.email}
        type="text"
        placeholder="Enter your Email"
        onChange={handleChange}
      ></input>

      <input
        className="row"
        name="password"
        value={user.password}
        type="password"
        placeholder="Enter your Password"
        onChange={handleChange}
      ></input>

      <div className="button" onClick={login}>
        Login
      </div>
      <h6>OR</h6>
      <div className="button" onClick={() => history.push("/register")}>
        Register
      </div>
    </div>
  );
};
export default Login;
