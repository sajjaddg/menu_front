import React, { Dispatch, SetStateAction } from 'react'

const PriceDetail = ({ price, quantity, setQuantity }: { price: number, quantity: number, setQuantity: Dispatch<SetStateAction<number>> }) => {
    return (
        <div className='p-3 font-shabnamMedium flex flex-row items-center justify-between border border-primary-3 rounded-xl'>
            <div className='flex flex-row items-center gap-3 justify-between'>
                <span onClick={() => setQuantity(it => it + 1)} className='flex items-center justify-center bg-primary-2 text-additional-5 w-[24px] h-[24px] rounded-md pt-1 text-2xl font-shabnam cursor-pointer'>+</span>
                <span className='font-shabnamMedium'>{quantity}</span>
                <span onClick={() => quantity === 1 ? null : setQuantity(it => it - 1)} className={`flex items-center justify-center ${quantity === 1 ? 'bg-additional-4 cursor-default' : 'bg-primary-2 cursor-pointer'}  text-additional-5 w-[24px] h-[24px] rounded-md pt-1 text-2xl font-shabnam`}>-</span>

            </div>
            <div className='flex flex-row items-end gap-[2px]'>
                <span className="font-shabnamMedium text-[20px] text-additional-1">{
                    Number(price).toLocaleString()
                }</span>
                <span className="font-shabnam text-[8px] pb-1 text-additional-1">تومان</span>
            </div>
        </div>
    )
}

export default PriceDetail