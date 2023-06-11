import React, { ChangeEvent, useCallback, useState } from 'react'
import RadioButton from './RadioButton';
import { useCart } from '@/utils/Context/CartContext';

const ConfirmOrder = () => {
  const { finalPrice, clearCart } = useCart()
  const onClick = useCallback(() => {
    alert(`sabt shod be shomareh: ${Math.floor(Math.random() * 6 * 100000)}`)
    clearCart()
  }, [clearCart])

  return (
    <div className='absolute bottom-0 inset-x-0 flex flex-col px-8 gap-7 pb-10 pt-4 bg-background shadow-2xl rounded-t-2xl p-10 z-10'>
      <div className='flex flex-row justify-center gap-20 px-6 py-3 bg-additional-5 rounded-[10px] font-shabnamMedium text-[14px]'>
        <RadioButton title='پرداخت حضوری' active />
        <RadioButton title='پرداخت آنلاین' active={false} />
      </div>
      <div className='flex flex-row justify-between items-center'>
        <div className="flex flex-row items-end justify-end gap-[2px]">
          <span className="font-shabnamBold text-[20px] text-additional-1">{Number(finalPrice).toLocaleString()}</span>
          <span className="font-shabnam text-[10px] pb-1 text-additional-1">تومان</span>
        </div>
        <span className='text-additional-1 font-shabnamMedium text-[14px]'>مبلغ قابل پرداخت</span>
      </div>
      <div className='flex items-center justify-center py-3 bg-primary-1 rounded-lg font-shabnamMedium text-additional-5 cursor-pointer' {...{onClick}}>
        ثبت سفارش
      </div>
    </div>
  )
}

export default ConfirmOrder