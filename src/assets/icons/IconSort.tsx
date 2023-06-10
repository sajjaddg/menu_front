import * as React from "react"
import { SVGIconProps } from "@/types/icon"
const IconSort: React.FC<SVGIconProps> = ({ size, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    {...props}
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={1.6}
      d="M4 8h12m0 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm-7 8h11M9 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
)
export default IconSort
