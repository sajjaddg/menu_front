"use client";
import { getSliders } from "@/services/api";
import { useQuery } from '@tanstack/react-query';
import FoodSlider from '@/components/foodBar/FoodSlider';
import { Slider } from '@/types/data';
import { useFilter } from "@/utils/Context/FilterContext";
import FilteredFoodList from "@/components/filtredFoodList/FilteredFoodList";
import SortPicker from "@/components/sortPicker/SortPicker";


export default function Home() {
  const { data } = useQuery<Slider[]>({
    queryKey: ["sliders"],
    queryFn: () => getSliders(),
  })

  const { filter } = useFilter()

  return (
    <>
      <div className='flex flex-col space-y-[32px] pb-[32px] pt-[16px]'>
        {
          !filter ?
            data?.map((item: Slider) => <FoodSlider key={item.id} {...{ item }} />) :
            <FilteredFoodList />
        }
      </div>
      <SortPicker />
    </>
  )
}
