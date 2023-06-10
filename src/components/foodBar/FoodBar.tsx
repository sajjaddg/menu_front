"use client";
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import FoodItem from './FoodItem';
import "swiper/css";
import { Food } from '@/types/data';

interface FoodBarProps {
    foods: Food[];
}

const FoodBar = ({ foods }: FoodBarProps) => {

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
                {
                    foods.map(it =>
                        <SwiperSlide key={it.id} >
                            <FoodItem item={it} />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    )
}

export default FoodBar