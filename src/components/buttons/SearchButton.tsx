import IconSearch from '@/assets/icons/IconSearch'

interface Props {
    disable?: boolean
}

const SearchButton: React.FC<Props> = ({ disable}) => {
    return (
        <div className={`w-8 h-8 flex items-cente rounded-md p-1 ${disable?'bg-additional-5':'bg-additional-4 hover:bg-secondary-2'}`}>
            <IconSearch size={24} color={disable?'#D5D8D9':'#FAFBFB'}/>
        </div>
    )
}

export default SearchButton