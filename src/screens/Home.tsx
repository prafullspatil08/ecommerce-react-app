import React, { useEffect } from 'react'
import Carousel from './Carousel'
import ProductCard from '../components/ProductCard';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/Store';
import { fetchAllProduct } from '../features/Post/PostSlice';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(()=>{
    dispatch(fetchAllProduct());
  })
  return (
    <div>
      <Carousel />
      <ProductCard />
    </div>
  )
}

export default Home
