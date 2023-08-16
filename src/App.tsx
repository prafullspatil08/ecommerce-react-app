import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import SingleProduct from "./screens/SingleProduct";
import Products from "./screens/Products";
import Cart from "./screens/Cart";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./app/Store";
import { fetchAllProduct } from "./features/Post/PostAction";
import AddProduct from "./screens/AddProduct";

function App() {
  const [isDark, setIsDark] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(()=>{
    dispatch(fetchAllProduct());
  })
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
