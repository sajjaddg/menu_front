import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import FliteredFoodItem from "./FliteredFoodItem";
import { Food } from "@/types/data";
import { getFiltredFood } from "@/services/api";
import { useFilter } from "@/utils/Context/FilterContext";

export default function FilteredFoodList() {
    const { categoty, sort, sortData } = useFilter()
    const orderBy = useMemo(() => sortData[sort].id === 1 ? 'asc' : 'desc', [sort, sortData])
    const { data, isFetching, isLoading } = useQuery<Food[]>({
        queryKey: [`filtredFood_${categoty}_${sortData[sort].value}_${orderBy}`],
        queryFn: () => getFiltredFood(categoty, sortData[sort].value, orderBy),
    })

    return (
        <div className="flex flex-col px-[24px] gap-2">
            {
                data?.length ?
                    data?.map(item => <FliteredFoodItem key={item.id} {...{ item }} />)
                    :
                    <div className="flex flex-col pt-44 justify-center items-center gap-2">
                        <span className="font-shabnamMedium text-additional-3">کالایی در این بخش ثبت نشده</span>
                        <span className="font-shabnamBold text-additional-2">به بخش های دیگر منو سر بزنید</span>
                    </div>
            }
        </div>
    )
}
