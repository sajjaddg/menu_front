import { useFilter } from '@/utils/Context/FilterContext'
import React, { useCallback, useMemo } from 'react'

const SortPickerItem = () => {
    const { sortData } = useFilter()

    return (
        <div className='px-5 pb-5 flex flex-col gap-3'>
            <span className='font-shabnamMedium text-additional-1 text-[18px]'>مرتب سازی بر اساس...</span>
            {
                sortData?.map(({ id, title }) =>
                    <SortButton key={id} {...{ id, title }} />
                )
            }
        </div>
    )
}

interface SortButtonProps {
    title: string,
    id: number
}

const SortButton = ({ title, id }: SortButtonProps) => {
    const { sort, setFilterSort, setIsOpenSortPicker } = useFilter()
    const active = useMemo(() => sort === id, [id, sort])
    const onClick = useCallback(() => {
        setFilterSort(id)
        setIsOpenSortPicker(false)
    }, [id, setFilterSort, setIsOpenSortPicker])

    return (
        <div className='flex flex-row items-center gap-2 cursor-pointer' {...{ onClick }}>
            {active && <div className='w-2 h-2 rounded-full bg-additional-2' />}
            <span className='font-shabnamMedium text-additional-1 text-[16px]'>{title}</span>
        </div>
    )
}

export default SortPickerItem