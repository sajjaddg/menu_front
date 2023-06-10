import { useContext, createContext, ReactNode, useState, Dispatch, SetStateAction, useMemo, useEffect } from "react";

type sortItem = {
    id: number
    title: string
    value: string
}

type filterContextType = {
    filter: boolean
    sort: number
    categoty: number
    isOpenSortPicker: boolean
    sortData: sortItem[],
    setFilterSort: (item: number) => void
    setFilterCategory: (item: number) => void
    setFilter: Dispatch<SetStateAction<boolean>>
    setIsOpenSortPicker: Dispatch<SetStateAction<boolean>>

}
const filterContextDefaultValues: filterContextType = {
    filter: false,
    sort: 3,
    categoty: -1,
    isOpenSortPicker: false,
    sortData: [],
    setFilterSort: () => { },
    setFilterCategory: () => { },
    setFilter: () => { },
    setIsOpenSortPicker: () => { }
}

const FilterContext = createContext<filterContextType>(filterContextDefaultValues)

export function useFilter() {
    return useContext(FilterContext);
}
type Props = {
    children: ReactNode;
}

export function FilterProvider({ children }: Props) {
    const [filter, setFilter] = useState<boolean>(false)
    const [sort, setSort] = useState<number>(3)
    const [categoty, setCategoty] = useState<number>(-1)
    const [isOpenSortPicker, setIsOpenSortPicker] = useState<boolean>(false)

    const sortData = useMemo(() => [
        {
            id: 0,
            title: 'محبوب ترین',
            value: 'rate'
        },
        {
            id: 1,
            title: 'ارزان ترین',
            value: 'price',
        },
        {
            id: 2,
            title: 'گران ترین',
            value: 'price',
        },
        {
            id: 3,
            title: 'نمایش همه',
            value: 'all'
        },
    ], [])

    const setFilterSort = (item: number) => {
        setSort(item)
    }

    const setFilterCategory = (item: number) => {
        setCategoty(item)
    }

    useEffect(() => {
        const shouldFilter = sort !== 3 || categoty !== -1
        setFilter(shouldFilter)
    }, [sort, categoty])

    const value = {
        categoty,
        filter,
        isOpenSortPicker,
        setFilter,
        setFilterCategory,
        setFilterSort,
        setIsOpenSortPicker,
        sort,
        sortData,
    }

    return (
        <>
            <FilterContext.Provider value={value}>
                {children}
            </FilterContext.Provider>
        </>
    )
}