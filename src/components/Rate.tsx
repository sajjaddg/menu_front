import IconStar from "@/assets/icons/IconStar"


interface RateProps {
    label: string;
    secondary?: boolean,
}

const Rate = ({ label,secondary }: RateProps) => {
    return (
        <div className={`flex flex-row items-center gap-[2px] rounded-[9px] px-[6px] py-[1px] ${secondary?'bg-primary-2':'bg-additional-5'}`}>
            <span className={`font-shabnam text-[12px] pt-[1px] ${secondary?'text-additional-5':'text-primary-1'}`}>{label}</span>
            <IconStar color={secondary?"#FAFBFB":"#2F3A41"} size={12} />
        </div>
    )
}

export default Rate