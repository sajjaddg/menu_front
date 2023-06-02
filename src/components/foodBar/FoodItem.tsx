import Image from "next/image"
import Rate from "../Rate"
import Offer from "../Offer"

const FoodItem = () => {
    return (
        <div className="w-[140px] h-[168px] flex flex-col bg-additional-5 rounded-[14px] gap-2">
            <div className="p-[2px] relative">
                <Image
                    src="/burger.png"
                    width={1000}
                    height={1000}
                    alt="Picture of the author"
                    unoptimized
                />
                <div className="flex flex-row items-center justify-between absolute top-0 left-0 p-[8px] w-full">
                    <Offer label="10" />
                    <Rate label="4.6" />
                </div>
            </div>
            <div className="flex flex-col px-2 gap-2">
                <span className="font-shabnamMedium text-[14px]">
                    برگر سوخاری با سیب 
                </span>
                <div className="flex flex-row items-center justify-end gap-[2px]">
                    <span className="font-shabnamBold text-[18px]">120,000</span>
                    <span className="font-shabnam text-[8px]">تومان</span>
                </div>
            </div>
        </div>
    )
}
export default FoodItem
