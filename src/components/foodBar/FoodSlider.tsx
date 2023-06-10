import {Slider } from "@/types/data";
import FoodBar from "./FoodBar"


interface FoodSliderProps {
    item: Slider;
}

const FoodSlider = ({ item }: FoodSliderProps) => {
    const {foods,title} = item
    return (
        <div className="flex flex-col space-y-[18px]">
            <span className='font-shabnamBold text-[18px] px-[22px] text-additional-1'>{title}</span>
            <FoodBar {...{foods}} />
        </div>
    )
}

export default FoodSlider