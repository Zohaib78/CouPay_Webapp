//import logo from './logo.svg';
import "./App.css";
//import Header from "./components/Header";
//import Basket from "./components/Basket";
//import Main from "./components/Main";
import Homepage from "./components/homepage/hompage";
import Login from "./components/login/login";
import Register from "./components/register/register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import { useState } from "react";

function App() {
  //functionality to move to home page after login
  //const [user, setLoginUser] = useState({});
  //document.querySelector(".hi").style.display=bloc

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
            {/* if id present in mongo db than show home page*/}
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
