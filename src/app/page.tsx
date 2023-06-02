import FoodBar from "@/components/foodBar/FoodBar";

export default function Home() {
  return (
    <div className='flex flex-col space-y-[32px] pt-[32px]'>
      <div className="flex flex-col space-y-[18px]">
        <span className='font-shabnamBold text-[18px] px-[22px] text-additional-1'>تخفیف های ویژه</span>
        <FoodBar />
      </div>
      <div className="flex flex-col space-y-[18px]">
        <span className='font-shabnamBold text-[18px] px-[22px] text-additional-1'>پیشنهاد ما</span>
        <FoodBar />
      </div>
      <div className="flex flex-col space-y-[18px]">
        <span className='font-shabnamBold text-[18px] px-[22px] text-additional-1'>تخفیف های ویژه</span>
        <FoodBar />
      </div>
    </div>
  )
}
