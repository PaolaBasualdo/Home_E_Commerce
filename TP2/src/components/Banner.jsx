import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
//import "swiper/css/pagination"; // si querés usar paginación
//import "swiper/css/navigation";
// si querés flechas

import {
   Autoplay,
  EffectCreative,
} from "swiper/modules";
import { Box } from "@mui/material";

// imágenes locales
import miel2 from "../assets/miel2.jpg";
import panes from "../assets/panes.jpg";
import tomates2 from "../assets/tomates2.jpg";
import huevos2 from "../assets/huevos2.jpg";
import lechuga2 from "../assets/lechuga2.jpg";
import duraznos from "../assets/duraznos.jpg";

const images = [miel2, tomates2, panes, huevos2, lechuga2, duraznos];

function Banner() {
  return (
    <Box sx={{ width: "100%", maxHeight: "350px", overflow: "hidden" }}>
      <Swiper
        modules={[Autoplay, EffectCreative]}
        effect="creative" //  activás el efecto
        creativeEffect={{
          // configurás el comportamiento de las slides

          prev: {
            translate: ["-10%", 0, -100],
          },
          next: {
            translate: ["10%", 0, 0],
          },
        }}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        
        
        autoplay={{ delay: 4000 }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default Banner;
