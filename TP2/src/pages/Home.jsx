import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import FilterBar from '../components/FilterBar';
import ProductList from '../components/ProductList';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <FilterBar />
      <ProductList />
      <Hero />
      <Footer />
    </>
  );
}
export default Home
