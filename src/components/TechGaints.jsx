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


export default function TechGaints() {
    return (
        <div className='prof' id="courses">
            <div className="prof-text">
              
            </div>
            <Swiper className="prof-swiper" modules={[Pagination, Autoplay]}
                slidesPerView={window.screen.width > 700 ? 6 : 2}
                autoplay={{
                    delay: 2000,  // sliding delay
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                loop={true}
                spaceBetween={0}>
                {TechGiants?.map((techGiant, ind) => (
                    <SwiperSlide key={ind} className="catalog-swiper">
                        <Stack direction="row"
                            justifyContent="center"
                            alignItems="center"
                            sx={{ height: "150px" }}>
                            <img src={techGiant.img}
                                width={100}
                                style={{ objectFit: "contain", maxHeight: "100px" }}></img>
                        </Stack>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}
