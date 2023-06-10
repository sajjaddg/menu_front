"use client"
import { useMemo } from "react"
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './styles.css';
import AdditivesButton from "./AdditivesButton";

const AdditivesBar = ({ data, loading, onPress ,active }: { data: any, loading: boolean, onPress: (id:number) => void , active:number[] }) => {
    const loadingData = useMemo(
        () => [
            { id: 1, title: "" },
            { id: 2, title: "" },
            { id: 3, title: "" },
            { id: 4, title: "" },
            { id: 5, title: "" },
            { id: 6, title: "" },
            { id: 7, title: "" },
        ],
        []
    )
    return (
        <div>
            <Swiper
                spaceBetween={6}
                slidesOffsetAfter={22}
                slidesOffsetBefore={22}
                slidesPerView={'auto'}
                freeMode={true}
                modules={[FreeMode]}
            >{loading ?
                loadingData.map(it =>
                    <SwiperSlide key={it.id}>
                        <AdditivesButton label={it.title} active={[]} {...{ loading, onPress, id: it.id }} />
                    </SwiperSlide>
                )
                : (
                    data?.map((it: any) => (
                        <SwiperSlide key={it.id}>
                            <AdditivesButton label={it.title} {...{ loading,active, onPress, id: it.id }} />
                        </SwiperSlide>
                    ))
                )
                }
            </Swiper>
        </div>
    )
}

export default AdditivesBar