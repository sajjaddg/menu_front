import Image from 'next/image'

export default function TitleBar() {
    return (
        <div className="flex flex-row items-center gap-2">
            <div className="rounded-full w-12 h-12 bg-slate-500">
                <Image
                    src="/profile.png"
                    width={80}
                    height={80}
                    alt="Picture of the author"
                    unoptimized
                />
            </div>
            <span className="font-shabnamBold text-base text-additional-1">به لاویا خوش آمدید!</span>
        </div>
    )
}

