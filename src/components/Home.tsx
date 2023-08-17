import React, { useEffect } from 'react'
import Carousel from '../components/shared/Carousel'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/Store';
import { fetchAllProduct } from '../app/slices/ProductSlice';
import ProductCard from './shared/ProductList';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(()=>{
    dispatch(fetchAllProduct());
  },[dispatch])
  return (
    <div>
      <Carousel />
      <ProductCard />
    </div>
  )
}

export default Home
