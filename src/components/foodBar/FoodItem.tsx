import { useCallback, useMemo } from "react"
import Image from "next/image"
import Rate from "../Rate"
import Offer from "../Offer"
import { Food } from "@/types/data"
import { useRouter } from 'next/navigation'

interface FoodItemProps {
    item: Food
}

const FoodItem = ({ item }: FoodItemProps) => {
    const router = useRouter()
    const { discount, price, rate, title } = item
    const newPrice = useMemo(() => discount !== 0 ? price * (100 - discount) / 100 : -1, [discount, price])
    const onClick = useCallback(() => router.push(`/food/${item.id}`), [item.id, router])

    return (
        <div className="w-[140px] h-[168px] flex flex-col bg-additional-5 rounded-[14px] gap-2 cursor-pointer" {...{ onClick }}>
            <div className="p-[2px] relative">
                <Image
                    src="/burger.png"
                    width={1000}
                    height={1000}
                    alt="Picture of the author"
                    unoptimized
                />
                <div className="flex flex-row items-center justify-between absolute top-0 left-0 p-[8px] w-full">
                    <div>{discount !== 0 && <Offer label={discount} />}</div>
                    <div><Rate label={rate} /></div>
                </div>
            </div>
            <div className="flex flex-col px-2 gap-2">
                <span className="font-shabnamMedium text-[14px] truncate text-additional-1">
                    {title}
                </span>
                <div className="flex flex-row items-center justify-between">
                    <div>
                        {
                            newPrice !== -1 &&
                            <span className="font-shabnamBold text-[12px] text-additional-3 line-through">
                                {Number(price).toLocaleString()}
                            </span>
                        }
                    </div>
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
export default FoodItem
