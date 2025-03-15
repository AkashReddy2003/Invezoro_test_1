import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import {
    Card, CardMedia, CardContent, Typography, Stack, Button, Box
} from "@mui/material";

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { TechGiants } from "../data/cources";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function TechGaints() {
    const images = import.meta.glob('../assets/logos/*.{png,jpg,jpeg,svg}', { eager: true });
const imageList = Object.values(images);

    return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
          Secure Placements with Top Brands
          </p>
         
          <div className='prof' id="courses">
            <div className="prof-text">
              
            </div>
            <Swiper className="prof-swiper" modules={[Pagination, Autoplay]}
                slidesPerView={window.screen.width > 700 ? 6 : 2}
                autoplay={{
                    delay: 500,  // sliding delay
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                loop={true}
                spaceBetween={0}>
                {imageList.map((image, index)  => (
                    <SwiperSlide key={index} className="catalog-swiper">
                        <Stack direction="row"
                            justifyContent="center"
                            alignItems="center"
                            sx={{ height: "150px" }}>
                            <img src={image.default}
                            className="grayscale hover:grayscale-0"
                                width={100}
                                style={{ objectFit: "contain", maxHeight: "100px" }}></img>
                        </Stack>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
          
        </motion.div>
        
    )
}
