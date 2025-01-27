import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import MenuItems from "./components/menuItems/MenuItems";
import Cart from "./components/cart/Cart";
import Payment from "./components/payment/Payment";

function App() {
  return (
    <div className="App">
      <Link to="/">Login</Link> <br />
      <Link to="/signup">SignUp</Link> <br />
      <Link to="/menuItems">MenuItems</Link> <br />
      <Link to="/cart">Cart</Link> <br />
      <Link to="/payment">Payment</Link> <br />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/menuItems" element={<MenuItems />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
