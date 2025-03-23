import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import {
    Card, CardMedia, CardContent, Typography, Stack, Button, Box,
    Avatar,
    Link
} from "@mui/material";

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Proffesors, profs } from '../data/cources'
import { FaLinkedin } from "react-icons/fa";

export const ProfCard = ({ professor }) => {
    return (
        <Card sx={{ 
            maxWidth: 400, 
            height: 150,  
            
            mx: "auto", 
            boxShadow: 3, 
            borderRadius: 2, 
            p: 2, 
            display: "flex", 
            flexDirection: "column" 
        }}>
            <CardContent sx={{ flexGrow: 1 }}>
                <Box display="flex" justifyContent="space-between">
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar src={professor.img} alt={professor.name} sx={{ width: 56, height: 56 }} />
                        <Box>
                            <Typography variant="h6" fontWeight="bold">{professor.name}</Typography>
                            <Typography variant="body2" color="text.secondary">{professor.desc}</Typography>
                        </Box>
                    </Stack>
        
                    <Link mt={1} href={professor.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={24} color="#0077B5" />
                    </Link>
                </Box>
        
                
            </CardContent>
        </Card>
        

    );
};



export default function ProfList() {
    return (
        <div className="w-full">
         
            <Swiper className="catalog-swiper" modules={[Pagination, Autoplay]}
                slidesPerView={window.screen.width > 700 ? 3 : 1}
                autoplay={{
                    delay: 1000,  // sliding delay
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                loop={true}
                
                spaceBetween={0}>
                {profs?.map((proffesor, ind) => (
                    <SwiperSlide key={ind} className="catalog-swiper mx-5 mb-10">
                        <ProfCard professor={proffesor} />
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}
