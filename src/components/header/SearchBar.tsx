'use client';
import { useCallback, useRef, useState } from "react";
import SearchButton from "../buttons/SearchButton";
import CartButton from "../buttons/CartButton";
export default function SearchBar() {
    const [disable, setDesabled] = useState(true)
    const inputRef = useRef<HTMLInputElement>(null)

    const handleClick = useCallback(() => {
        inputRef?.current?.focus()
        setDesabled(false)
    }, [])

    return (
        <div className="flex flex-row items-center gap-2">
            <div onClick={handleClick} className="flex bg-additional-5  items-center rounded-lg flex-1">
                <input
                    className="outline-none bg-additional-5 text-additional-3 w-full text-lg font-Shabnam text-right placeholder:text-additional-4 px-3"
                    placeholder="چی میل دارید؟"
                    ref={inputRef}
                    onBlur={() => setDesabled(true)}
                />
                <div className="p-1">
                    <SearchButton {...{ disable }} />
                </div>
            </div>
            <CartButton/>
        </div>
    )
}
