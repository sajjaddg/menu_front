import SearchBar from "./SearchBar";
import FilterBar from "../filterBar/FilterBar";

export default function Header() {
    return (
        <header className="flex flex-col gap-4">
            <div className="px-5">
                <SearchBar />
            </div>
            <FilterBar />
        </header>
    )
}