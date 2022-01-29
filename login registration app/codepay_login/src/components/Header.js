import React from "react";
import "./Header.css";
import { useHistory } from "react-router-dom";

export default function Header(props) {
  const history = useHistory();
  return (
    <header className="row block center">
      <div>
        {/* current page link */}
        <a href="#/">
          <h1>CouPay Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">Cart</a>{" "}
        <a
          href="#/signin"
          onClick={() => {
            history.push("/login");
          }}
        >
          LogOut
        </a>
      </div>
    </header>
  );
}
