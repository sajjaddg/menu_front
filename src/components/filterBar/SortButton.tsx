'use clinet';

import IconSort from "@/assets/icons/IconSort";
import { useFilter } from "@/utils/Context/FilterContext";
import { useCallback, useMemo } from "react";

interface SortButtonProps {
    label: string
}

const SortButton = ({ label }: SortButtonProps) => {
    const { sort, sortData, setIsOpenSortPicker } = useFilter()
    const isActive = useMemo(() => sort !== 3, [sort])
    const onClick = useCallback(() => setIsOpenSortPicker(true), [setIsOpenSortPicker])

    return (
        <div className={`px-4 rounded-2xl flex flex-row gap-2 justify-center py-1 cursor-pointer border border-primary-2 flex-1 ${isActive ? 'bg-primary-1' : 'bg-additional-5'}`}{...{ onClick }}>
            <IconSort size={24} color={isActive ? '#FAFBFB' : '#525F67'} />
            <span className={`text-center whitespace-nowrap font-shabnamMedium ${isActive ? 'text-additional-5' : 'text-primary-2'}`}>
                {isActive ? sortData[sort].title : label}
            </span>
        </div>
    )
}

export default SortButton