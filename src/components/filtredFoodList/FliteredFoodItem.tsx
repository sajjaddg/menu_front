import { Food } from '@/types/data'
import Image from 'next/image'
import React, { useCallback, useMemo } from 'react'
import Offer from '../Offer'
import Rate from '../Rate'
import { useRouter } from 'next/navigation'
interface FliteredFoodItemProps {
    item: Food
}

const FliteredFoodItem = ({ item }: FliteredFoodItemProps) => {
    const router = useRouter()
    const { discount, price, rate, title } = item ?? {}
    const newPrice = useMemo(() => discount !== 0 ? price * (100 - discount) / 100 : -1, [discount, price])
    const onClick = useCallback(() => router.push(`/food/${item.id}`), [item.id, router])
    return (
        <div className='bg-additional-5 rounded-[14px] gap-2 flex flex-row cursor-pointer'{...{ onClick }}>
            <div className='w-[180px] h-auto p-[2px]'>
                <Image
                    src="/burger.png"
                    width={1000}
                    height={1000}
                    alt="Picture of the author"
                />
            </div>
            <div className='flex-col flex justify-between pt-2 items-center w-full pl-2'>
                <div className='flex flex-row justify-between w-full items-center'>
                    <span className="font-shabnamMedium text-[18px] truncate text-additional-1">
                        {title}
                    </span>
                    <div>{discount !== 0 && <Offer label={discount} />}</div>
                </div>
                <div className='flex flex-row items-center w-full justify-end gap-2'>
                    <Rate label={rate} secondary />
                    {
                        newPrice !== -1 &&
                        <span className="font-shabnamBold text-[12px] text-additional-3 line-through">
                            {Number(price).toLocaleString()}
                        </span>
                    }
                    <div className="flex flex-row items-end justify-end gap-[2px]">
                        <span className="font-shabnamBold text-[18px] text-additional-1">{
                            newPrice !== -1 ? Number(newPrice).toLocaleString() :
                                Number(price).toLocaleString()
                        }</span>
                        <span className="font-shabnam text-[8px] pb-1 text-additional-1">تومان</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FliteredFoodItem