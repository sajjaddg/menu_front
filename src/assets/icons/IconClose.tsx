import { SVGIconProps } from "@/types/icon"
import * as React from "react"
const IconClose: React.FC<SVGIconProps> = ({ size, color, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 12 12"
        width={size}
        height={size}
        fill="none"
        {...props}
    >
        <path stroke={color} strokeLinecap="round" d="m1 1 10 10M11 1 1 11" />
    </svg>
)
export default IconClose
