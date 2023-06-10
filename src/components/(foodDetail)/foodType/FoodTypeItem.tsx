import { useMemo } from 'react'

const FoodTypeItem = ({ title, price, active, id, onPressItem }: { title: string, price: number, active: number, id: number, onPressItem: (id: number) => void }) => {
    const isActive = useMemo(() => active === null ? false : active === id, [active, id])

    return (
        <div onClick={() => onPressItem(id)} className={`flex flex-col justify-center gap-2 items-center ${isActive ? 'bg-primary-1 text-additional-5 cursor-default' : 'bg-additional-5 cursor-pointer text-primary-2'} px-5 py-[6px] rounded-[14px] cursor-pointer `}>
            <span className='font-shabnamMedium text-[14px] '>{title}</span>
            <span className='font-shabnamMedium text-[14px]'>{Number(price).toLocaleString()}</span>
        </div>
    )
}

export default FoodTypeItem