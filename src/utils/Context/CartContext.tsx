"use client";
import { ReactNode, useEffect, createContext, useCallback, useContext, useMemo, useState } from "react";

export interface CartItem {
    id: number;
    foodId:number,
    title: string;
    type: string;
    add: AdditionalItem[];
    price: number;
    quantity: number;
}

export interface AdditionalItem {
    id: number;
    title: string;
    price: number;
}

type cartContextType = {
    items: CartItem[];
    finalPrice: number;
    addItem: (item: CartItem) => void;
    removeItem: (id: number) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    clearCart: () => void,
};

const cartContextDefaultValues: cartContextType = {
    items: [],
    finalPrice: 0,
    addItem: () => { },
    removeItem: () => { },
    increaseQuantity: () => { },
    decreaseQuantity: () => { },
    clearCart: () => { }
};

const CartContext = createContext<cartContextType>(cartContextDefaultValues);

export function useCart() {
    return useContext(CartContext);
}

type Props = {
    children: ReactNode;
};

export function CartProvider({ children }: Props) {
    const [items, setItems] = useState<CartItem[]>([]);

    useEffect(() => {
        const storedItems = localStorage.getItem("cartItems");
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(items));
    }, [items]);

    const finalPrice = useMemo(
        () =>
            items.reduce(
                (totalPrice, item) =>
                    totalPrice +
                    item.price * item.quantity +
                    item.add.reduce(
                        (additionalPrice, additionalItem) =>
                            additionalPrice + additionalItem.price,
                        0
                    ),
                0
            ),
        [items]
    );

    const clearCart = useCallback(() => setItems([]), [])

    const addItem = useCallback(
        (item: CartItem) =>
            setItems((prevItems) => [...prevItems, item]),
        []
    );

    const removeItem = useCallback(
        (id: number) => setItems((prevItems) => prevItems.filter((item) => item.id !== id)),
        []
    );

    const increaseQuantity = useCallback(
        (id: number) =>
            setItems((prevItems) =>
                prevItems.map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                )
            ),
        []
    );

    const decreaseQuantity = useCallback(
        (id: number) =>
            setItems((prevItems) =>
                prevItems.map((item) =>
                    item.id === id && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            ),
        []
    );

    const value = {
        items,
        finalPrice,
        addItem,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}
