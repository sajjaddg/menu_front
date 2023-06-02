import IconCart from '@/assets/icons/IconCart'
import React from 'react'

export default function CartButton() {
  return (
    <div className='flex items-center bg-primary-1 p-2 rounded-lg'>
      <IconCart size={24} color='#FAFBFB'/>
    </div>
  )
}