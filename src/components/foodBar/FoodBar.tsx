"use client";
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import FoodItem from './FoodItem';

const FoodBar = () => {
    return (
            <div>
                <Swiper
                    spaceBetween={4}
                    slidesOffsetAfter={22}
                    slidesOffsetBefore={22}
                    slidesPerView={'auto'}
                    freeMode={true}
                    modules={[FreeMode]}
                >
                    <SwiperSlide >
                        <FoodItem />
                    </SwiperSlide>
                    <SwiperSlide >
                        <FoodItem />
                    </SwiperSlide>
                    <SwiperSlide >
                        <FoodItem />
                    </SwiperSlide>
                    <SwiperSlide >
                        <FoodItem />
                    </SwiperSlide>
                    <SwiperSlide >
                        <FoodItem />
                    </SwiperSlide>
                    <SwiperSlide >
                        <FoodItem />
                    </SwiperSlide>
                    <SwiperSlide >
                        <FoodItem />
                    </SwiperSlide>
                    <SwiperSlide >
                        <FoodItem />
                    </SwiperSlide>

                </Swiper>
            </div>
    )
}

export default FoodBar