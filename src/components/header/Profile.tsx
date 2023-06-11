import Image from "next/image";
import TitleBar from "./TitleBar";

export default function Profile() {
    return (
        <div className="flex flex-col gap-4 p-5">
            <TitleBar />
            <Image
                src="/banner.png"
                width={900}
                height={900}
                alt="Picture of the author"
            />
        </div>
    )
}
