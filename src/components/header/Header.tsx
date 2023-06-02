import Image from "next/image";
import TitleBar from "./TitleBar";
import SearchBar from "./SearchBar";
import FilterBar from "../filterBar/FilterBar";

export default function Header() {
    return (
        <header className="flex flex-col">
            <div className="flex flex-col gap-4 p-5">
                <TitleBar />
                <Image
                    src="/banner.png"
                    width={900}
                    height={900}
                    alt="Picture of the author"
                    unoptimized
                />
                <SearchBar />
            </div>
            <FilterBar />
        </header>
    )
}