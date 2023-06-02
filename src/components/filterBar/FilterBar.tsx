"use client"
import FilterButton from "./FilterButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import './styles.css'


const FilterBar = () => {
   
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
                    <FilterButton label={'دسته'} />
                </SwiperSlide>
                <SwiperSlide>
                    <FilterButton label={'برگر'} />
                </SwiperSlide>
                <SwiperSlide>
                    <FilterButton label={'هات داگ'} />
                </SwiperSlide>
                <SwiperSlide>
                    <FilterButton label={'ساندیوچ'} />
                </SwiperSlide>
                <SwiperSlide>
                    <FilterButton label={'پیتزا'} />
                </SwiperSlide>
                <SwiperSlide>
                    <FilterButton label={'پیتزا'} />
                </SwiperSlide>
                <SwiperSlide>
                    <FilterButton label={'پیتزا'} />
                </SwiperSlide>
                <SwiperSlide>
                    <FilterButton label={'پیتزا'} />
                </SwiperSlide>
                <SwiperSlide>
                    <FilterButton label={'پیتزا'} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default FilterBar