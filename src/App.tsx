import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/shared/Footer";
import AddProduct from "./components/AddProduct";
import Header from "./components/shared/Header";
import PageNotFound from "./components/shared/PageNotFound";
import Home from "./components/Home";
import Products from "./components/Products";
import SingleProduct from "./components/ProductDetails";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import { ROUTES } from "./utils/routes";

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
        <Route path={ROUTES.HOME} element={<Home />}></Route>
        <Route path={ROUTES.PRODUCTS} element={<Products/>}></Route>
        <Route path={ROUTES.PRODUCT_DETAILS} element={<SingleProduct/>}></Route>
        <Route path={ROUTES.CART} element={<Cart/>}></Route>
        <Route path={ROUTES.ADD_PRODUCT} element={<AddProduct/>}></Route>
        <Route path={ROUTES.CONTACT} element={<Contact/>}></Route>
        <Route path={ROUTES.EDIT_PRODUCT} element={<AddProduct/>}></Route>
        <Route path={ROUTES.PAGE_NOT_FOUND} element={<PageNotFound/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
