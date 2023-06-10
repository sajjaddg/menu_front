import FoodTypeItem from "./FoodTypeItem"

const FoodTypeBar = ({ type, price ,active,onPressItem }: { type: any, price: number , active:number,onPressItem:(id:number)=>void }) => {
    return (
        <div className='pt-4 flex flex-row gap-2 justify-center items-center'>
            {
                type?.map((it: any) =>
                    <FoodTypeItem key={it.id} id={it.id} title={it.title} price={price + it.addPrice} {...{active,onPressItem}} />
                )
            }
        </div>
    )
}

export default FoodTypeBar