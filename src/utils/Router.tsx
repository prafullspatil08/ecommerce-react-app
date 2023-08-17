import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import { ROUTES } from './routes'
import Products from '../components/Products'
import ProductDetails from '../components/ProductDetails'
import Cart from '../components/Cart'
import AddProduct from '../components/AddProduct'
import Contact from '../components/Contact'
import PageNotFound from '../components/shared/PageNotFound'

const Router = () => {
  return (
    <Routes>
    <Route path={ROUTES.HOME} element={<Home />}></Route>
    <Route path={ROUTES.PRODUCTS} element={<Products/>}></Route>
    <Route path={ROUTES.PRODUCT_DETAILS} element={<ProductDetails />}></Route>
    <Route path={ROUTES.CART} element={<Cart/>}></Route>
    <Route path={ROUTES.ADD_PRODUCT} element={<AddProduct/>}></Route>
    <Route path={ROUTES.CONTACT} element={<Contact/>}></Route>
    <Route path={ROUTES.EDIT_PRODUCT} element={<AddProduct/>}></Route>
    <Route path={ROUTES.PAGE_NOT_FOUND} element={<PageNotFound/>}></Route>
  </Routes>
  )
}

export default Router
