import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/shared/Footer";
import AddProduct from "./components/AddProduct";
import Header from "./components/shared/Header";
import PageNotFound from "./components/shared/PageNotFound";
import Home from "./components/Home";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart";
import Contact from "./components/Contact";

function App() {
  const [isDark, setIsDark] = useState(false);
  const themeHandler = () =>{
   if(!isDark){
    setIsDark(true);
   }else{
     setIsDark(false);
   }
  }
  return (
    <div className={`${isDark ? "dark" : "light"}`}>
      <Header isDark={isDark} setDarkMode = {themeHandler}/>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/product/:id" element={<SingleProduct/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/add-product" element={<AddProduct/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/add-product/:id" element={<AddProduct/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
