"use client";
import Header from '@/components/(foodDetail)/Header'
import PriceDetail from '@/components/(foodDetail)/PriceDetail'
import FoodTypeBar from '@/components/(foodDetail)/foodType/FoodTypeBar'
import AdditivesBar from '@/components/additivesBar/AdditivesBar'
import { getAdditives, getFoodDetail } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image'
import { useCallback, useMemo, useState } from 'react'

export default function FoodDetail({ params }: { params: { id: number } }) {
    const [activeAdd, setActiveAdd] = useState<number[]>([])
    const [activeType, setActiveType] = useState<number>(1)
    const [quantity, setQuantity] = useState<number>(1)

    const { id } = params
    const { data: additivesData, isLoading, isFetching } = useQuery({
        queryKey: ["additives"],
        queryFn: () => getAdditives(),
    })

    const { data } = useQuery({
        queryKey: ["food_detail"],
        queryFn: () => getFoodDetail(id),
    })
    const onPressAddItem = useCallback((id: number) => {
        if (activeAdd.includes(id)) {
            const x = activeAdd.filter(it => it !== id)
            setActiveAdd(x)
            return
        }
        setActiveAdd(it => [...it, id])
    }, [activeAdd])

    const onPressTypeItem = useCallback((id: number) => {
        setActiveType(id)
    }, [])

    const loading = useMemo(() => isLoading || isFetching, [isLoading, isFetching])
    const { title, rate, discount, detail, price, type } = data ?? {}

    const finalPrice = useMemo(() => (price + (type?.[activeType - 1]?.addPrice || 0)) * quantity * (1 - discount / 100) + activeAdd.reduce((total, id) => total + (additivesData.find((additive: any) => additive.id === id)?.price || 0), 0), [price, quantity, discount, activeAdd, additivesData, type, activeType]);



    return (
        <div className="h-screen flex flex-col">
            <div className='flex justify-center items-center -mt-8'>
                <Image
                    src="/food.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    unoptimized
                />
            </div>
            <div className="bg-background h-screen -mt-12  z-10 rounded-t-3xl shadow-md flex flex-col pt-6">
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <div className='flex flex-col px-5'>
                            <Header offer={discount} {...{ title, rate }} />
                            <FoodTypeBar onPressItem={onPressTypeItem} active={activeType} {...{ type, price }} />
                            <span className='pt-4 font-shabnam text-additional-1 text-[16px]'>{detail}</span>
                        </div>
                        <div className='pt-16 gap-4 flex flex-col'>
                            <span className='font-shabnamBold text-[20px] text-additional-1 px-5'>افزودنی ها</span>
                            <AdditivesBar onPress={onPressAddItem} active={activeAdd} data={additivesData} {...{ loading }} />
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col px-7 gap-2 justify-center pb-12'>
                            <PriceDetail price={finalPrice ?? 0} {...{ quantity, setQuantity }} />
                            <div className='flex items-center justify-center py-3 bg-primary-1 rounded-lg font-shabnamMedium text-additional-5'>
                                افزودن به سبد خرید
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
