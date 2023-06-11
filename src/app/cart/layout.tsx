import '../globals.css'
import '../bottomSheet.css'
import Providers from '@/utils/provider';

export const metadata = {
  title: 'Menu',
  description: 'Generated by create next app',
}

export default function CartLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='main'>
      <body className='bg-background max-w-[580px] m-auto'>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
