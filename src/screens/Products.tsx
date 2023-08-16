import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/Store';
import { fetchAllProduct } from '../features/Post/PostSlice';

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
