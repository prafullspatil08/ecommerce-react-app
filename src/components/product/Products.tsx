import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/Store";
import { fetchAllProduct } from "../../app/slices/ProductSlice";
import ProductList from "../shared/ProductList";

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchAllProduct());
  });
  return (
    <div>
      <ProductList />
    </div>
  );
};

export default Products;
