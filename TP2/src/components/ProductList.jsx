import React from 'react';
import ProductCard from './ProductCard';
import { Box } from '@mui/material';

{/*imagenes*/}

import miel from '../assets/miel.jpg';
import pan from '../assets/pan.jpg';
import zapallo from '../assets/zapallo.jpg';
import frutillas from '../assets/frutillas.jpg';
import tomates from '../assets/tomates.jpg';
import limones from '../assets/limones.jpg';
import huevos from '../assets/huevos.jpg';
import calabacin from '../assets/calabacin.jpg';
import citricos from '../assets/citricos.jpg';
import panBrioche from '../assets/panBrioche.jpg';

const productos = [
  { id: 1, title: 'Pan Cacero', price: 1000, image: pan, category: 'Panificacion' },
  { id: 2, title: 'Miel', price: 1500, image: miel, category: 'Conservas'},
  { id: 3, title: 'Zapallo Cabutia', price: 1200, image: zapallo, category: 'Verduras'},
  { id: 4, title: 'Frutillas', price: 1800, image: frutillas,category: 'Frutas' },
  { id: 5, title: 'Tomates', price: 2000, image: tomates, category: 'Verduras'},
  { id: 6, title: 'Limones', price: 1800, image: limones, category: 'Frutas'},
  { id: 7, title: 'Huevos', price: 3800, image: huevos, category: 'Huevos'},
  { id: 8, title: 'Calabacin', price: 1200, image: calabacin, category: 'Verduras'},
  { id: 9, title: 'Pomelos', price: 2000, image: citricos, category: 'Verduras'},
  { id: 10, title: 'Pan Brioche', price: 3000, image: panBrioche, category: 'Panificacion'},
];

function ProductList() {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap={2}
      padding={2}
    >
      {productos.map((prod) => (
        <ProductCard
          key={prod.id}
          title={prod.title}
          price={prod.price}
          image={prod.image}
        />
      ))}
    </Box>
  );
}

export default ProductList
