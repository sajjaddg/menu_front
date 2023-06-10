"use client"
import { useCallback, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { getCategories } from "@/services/api";
import FilterButton from "./FilterButton";
import "swiper/css";
import './styles.css';
import { useFilter } from "@/utils/Context/FilterContext";
import SortButton from "./SortButton";


const FilterBar = () => {
    const { setFilterCategory, categoty } = useFilter()

    const { data, isLoading, isFetching } = useQuery({
        queryKey: ["categories"],
        queryFn: () => getCategories(),
    })

    const onPress = useCallback((id: number) => setFilterCategory(id == categoty ? -1 : id), [categoty, setFilterCategory])

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
    );
    const loading = useMemo(() => isLoading || isFetching, [isFetching, isLoading])

    return (
        <div className={`${loading && 'pr-5'}`}>
            <Swiper
                spaceBetween={4}
                slidesOffsetAfter={22}
                slidesOffsetBefore={22}
                slidesPerView={'auto'}
                freeMode={true}
                modules={[FreeMode]}
            >
                {loading ?
                    loadingData.map(it =>
                        <SwiperSlide key={it.id}>
                            <FilterButton label={it.title} active={-1} {...{ loading, onPress, id: it.id }} />
                        </SwiperSlide>
                    )
                    : (
                        <>
                            <SwiperSlide>
                                <SortButton label='مرتب سازی' />
                            </SwiperSlide>
                            {data?.map((it: any) => (
                                <SwiperSlide key={it.id}>
                                    <FilterButton label={it.title} {...{ loading, onPress, active: categoty, id: it.id }} />
                                </SwiperSlide>
                            ))}
                        </>
                    )}


            </Swiper>
        </div>
    )
}

export default FilterBar