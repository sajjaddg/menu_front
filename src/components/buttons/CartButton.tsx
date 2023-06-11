import IconCart from '@/assets/icons/IconCart'
import { useCart } from '@/utils/Context/CartContext'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

export default function CartButton() {
  const router = useRouter()
  const onClick = useCallback(() => router.push('/cart'), [router])
  const { items } = useCart()
  return (
    <div className=' bg-primary-1 p-2 rounded-lg cursor-pointer relative' {...{ onClick }}>
      <IconCart size={24} color='#FAFBFB' />
      {
        items.length ?
          <div className='absolute flex items-center justify-center top-2 left-[6px] w-3 h-3 text-[10px] font-shabnamMedium rounded-full bg-secondary-1 text-additional-5'>
            {items.length}
          </div>
          : null
      }
    </div>
  )
}