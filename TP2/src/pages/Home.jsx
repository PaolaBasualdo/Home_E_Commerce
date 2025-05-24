import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import FilterBar from "../components/FilterBar";
import ProductList from "../components/ProductList";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Box } from '@mui/material';

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      
      <Box sx={{ bgcolor: "#EAD8C0", py: 4 }}>
        <FilterBar />
        <ProductList />
        <Hero />
      </Box>

      <Footer />
    </>
  );
}
export default Home;
