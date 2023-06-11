"use client";
import CartItem from "@/components/(cart)/CartItem";
import ConfirmOrder from "@/components/(cart)/ConfirmOrder";
import { useCart } from "@/utils/Context/CartContext";

export default function Cart() {
    const { items } = useCart()

    return (
        <div className="relative h-screen">
            <div className="flex flex-col px-5 py-6 gap-2">
                {
                    items?.map(it => <CartItem key={it.id} item={it} />)
                }
            </div>
            {
                items.length ?
                    <ConfirmOrder />
                    : null
            }
        </div>
    )
}
