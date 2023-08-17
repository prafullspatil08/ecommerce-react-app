import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/Store';
import { fetchAllProduct } from '../app/slices/ProductSlice';
import ProductCard from '../components/shared/ProductCard';

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(()=>{
    dispatch(fetchAllProduct());
  })
  return (
    <div>
        <ProductCard />
    </div>
  )
}

export default Products
