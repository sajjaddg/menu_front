import React from 'react'
interface OfferProps {
    label: number;
  }
const Offer = ({ label }: OfferProps) => {
    return (
        <div className='flex w-fit justify-center gap-[1px] items-center rounded-[9px] px-[6px] py-[1px] bg-secondary-1'>
            <span className='font-shabnam text-[12px] text-additional-5'>%</span>
            <span className='font-shabnam text-[12px] text-additional-5'>{label}</span>
        </div>
    )
}

export default Offer