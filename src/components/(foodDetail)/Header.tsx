import React from 'react'
import Offer from '../Offer'
import Rate from '../Rate'

const Header = ({ title, offer, rate }: { title: string, offer?: number, rate: string }) => {
    return (
        <div className='flex flex-row items-center justify-between'>
            <span className='text-[20px] font-shabnamBold text-additional-1'>{title}</span>
            <div className='flex flex-row items-center justify-center gap-2'>
                {offer ? <Offer label={offer} /> : null}
                <Rate label={rate} secondary />
            </div>
        </div>
    )
}

export default Header