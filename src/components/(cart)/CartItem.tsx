"use client"
import IconClose from "@/assets/icons/IconClose"
import { CartItem, useCart } from "@/utils/Context/CartContext"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useCallback, useMemo } from "react"

const CartItem = ({ item }: { item: CartItem }) => {
    const router = useRouter()
    const price = useMemo(() => item.price * item.quantity + item.add.reduce((additionalPrice, additionalItem) => additionalPrice + additionalItem.price, 0), [item.add, item.price, item.quantity])
    const title = useMemo(() => item.title + " " + item.type, [item.title, item.type])
    const { increaseQuantity, decreaseQuantity, removeItem } = useCart()
    const onClick = useCallback(() => router.push(`/food/${item.foodId}`), [item.foodId, router])

    return (
        <div className='bg-additional-5 rounded-[14px] gap-2 flex flex-row'>
            <div className='w-[180px] h-auto p-[2px] cursor-pointer' {...{ onClick }}>
                <Image
                    src="/burger.png"
                    width={1000}
                    height={1000}
                    alt="Picture of the author"
                />
            </div>
            <div className='flex-col flex justify-between pt-2 items-center w-full pl-[14px]'>
                <div className='flex flex-row justify-between w-full items-center'>
                    <span className="font-shabnamMedium text-[18px] truncate text-additional-1">
                        {title}
                    </span>
                    <IconClose onClick={() => removeItem(item.id)} className="cursor-pointer" color="#666E70" size={10} />
                </div>
                <div className='flex flex-row items-center w-full justify-between gap-2 pb-2'>
                    <div className="flex flex-row items-center gap-3">
                        <span onClick={() => increaseQuantity(item.id)} className='flex items-center justify-center bg-primary-2 text-additional-5 w-[24px] h-[24px] rounded-md pt-1 text-2xl font-shabnam cursor-pointer'>+</span>
                        <span className='font-shabnamMedium'>{item.quantity}</span>
                        <span onClick={() => decreaseQuantity(item.id)} className={`flex items-center justify-center ${item.quantity === 1 ? 'bg-additional-4 cursor-default' : 'bg-primary-2 cursor-pointer'}  text-additional-5 w-[24px] h-[24px] rounded-md pt-1 text-2xl font-shabnam`}>-</span>
                    </div>
                    <div className="flex flex-row items-end justify-end gap-[2px]">
                        <span className="font-shabnamBold text-[18px] text-additional-1">{Number(price).toLocaleString()}</span>
                        <span className="font-shabnam text-[8px] pb-1 text-additional-1">تومان</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem