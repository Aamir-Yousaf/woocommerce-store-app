
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navebar";
import Home from "./Home";
import "./Home/Home.css";
 import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
import { Cart } from "./MyCart";
import User from "./Login/login"

function App() {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        {/* Product Page */}
        <Route path="/product-details" element={<h1>Product Details</h1>} />
        {/* Login Page */}
        <Route path="/login" element={<User />} />
        {/* Cart Page */}
        <Route path="/cart" element={<Cart />} />
        {/* Checkout Page */}
        <Route path="/checkout" element={<h1>Checkout</h1>} />
      </Routes>
    </div>
  );
}

export default App;
