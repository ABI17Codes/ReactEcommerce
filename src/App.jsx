import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Collection from "./Pages/Collection";
import Contact from "./Pages/Contact";
import Order from "./Pages/Order";
import PlaceOrder from "./Pages/PlaceOrder";
import Product from "./Pages/Product";
import AppLayout from "./Layout/AppLayout";


const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/placeorder" element={<PlaceOrder />} />
            <Route path="/orders" element={<Order />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
    </div>
  );
};

export default App;
