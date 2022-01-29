import React from "react";
//import Basket from "../Basket";
//import Header from "../Header";
import Main from "../Main";
import Header from "../Header";
import Basket from "../Basket";

import "./homepage.css";
//import "./Navbar.jsx";
//import { useHistory } from "react-router-dom";

//const Logout =

const Homepage = () => {
  //const history = useHistory();
  return (
    <div className="homepage">
      <Header></Header>
      <div>
        <Main></Main>
        <Basket></Basket>
      </div>
    </div>
  );
};

export default Homepage;
