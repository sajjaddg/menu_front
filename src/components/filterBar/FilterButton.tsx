'use clinet';
import { useMemo } from "react";
import Skeleton from "react-loading-skeleton";
interface FilterButtonProps {
    id: number;
    label: string;
    loading?: boolean;
    active: number | null;
    onPress: (id: number) => void;
}

const FilterButton = ({ label, loading, active, onPress, id }: FilterButtonProps) => {
    const isActive = useMemo(() => active === null ? false : active === id, [active, id])

    if (loading)
        return <Skeleton width={90} height={32} borderRadius={16} style={{ marginRight: 4 }} />

    return (
        <div onClick={() => onPress(id)} className={`px-4 rounded-2xl flex justify-center py-1 cursor-pointer border border-primary-2 flex-1 ${isActive ? 'bg-primary-1' : 'bg-additional-5'}`}>
            <span className={`text-center whitespace-nowrap font-shabnamMedium ${isActive ? 'text-additional-5' : 'text-primary-2'}`}>{label}</span>
        </div>
    )
}

export default FilterButton