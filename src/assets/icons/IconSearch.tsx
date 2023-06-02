import { SVGIconProps } from "@/types/icon";
import * as React from "react"

const IconSearch: React.FC<SVGIconProps> = ({ size, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    {...props}
  >
    <circle
      cx={9.583}
      cy={9.583}
      r={8.783}
      stroke={color}
      strokeWidth={1.6}
      transform="matrix(-1 0 0 1 22 2)"
    />
    <path
      fill={color}
      d="m4.768 18.1.565-.565 1.132 1.132-.566.565-1.131-1.131Zm-2.202 4.466a.8.8 0 1 1-1.132-1.132l1.132 1.132Zm3.333-3.334-3.333 3.334-1.132-1.132 3.334-3.333 1.13 1.131Z"
    />
  </svg>
)
export default IconSearch
