'use clinet';
import { useState } from "react";
interface FilterButtonProps {
    label: string;
  }
  
const FilterButton = ({ label }: FilterButtonProps)=>{
    const [active,setActive] = useState(false)

    return (
        <div onClick={()=>setActive(!active)} className={`px-4 rounded-2xl flex justify-center py-1 cursor-pointer border border-primary-2 flex-1 ${active?'bg-primary-1':'bg-additional-5'}`}>
            <span className={`text-center whitespace-nowrap font-shabnamMedium ${active?'text-additional-5':'text-primary-2'}`}>{label}</span>
        </div>
    )
}

export default FilterButton