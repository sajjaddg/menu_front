interface FilterButtonProps {
    label: string;
  }
  
const FilterButton = ({ label }: FilterButtonProps)=>{
    return (
        <div className="px-4 rounded-2xl flex justify-center bg-additional-5 py-1 border border-primary-2 flex-1">
            <span className="text-center whitespace-nowrap font-shabnam text-primary-2">{label}</span>
        </div>
    )
}

export default FilterButton