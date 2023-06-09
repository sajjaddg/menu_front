import * as React from "react"
import { SVGIconProps } from "@/types/icon"
const IconStar: React.FC<SVGIconProps> = ({ size, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    width={size}
    height={size}
    fill="none"
    {...props}
  >
    <path
      fill={color}
      d="M4.548 2.926c.405-1.248.608-1.873.894-2.065a1 1 0 0 1 1.118 0c.285.192.488.817.894 2.065.113.35.17.524.27.658a1 1 0 0 0 .474.343c.158.055.342.055.709.055 1.313 0 1.969 0 2.24.212a1 1 0 0 1 .346 1.063c-.095.331-.626.717-1.688 1.489-.297.216-.446.323-.542.46a1 1 0 0 0-.18.557c-.003.167.053.342.167.69.406 1.25.608 1.873.49 2.197a1 1 0 0 1-.904.657c-.344.012-.875-.373-1.937-1.145-.297-.216-.446-.324-.606-.373a1 1 0 0 0-.585 0c-.16.05-.308.157-.605.373-1.062.772-1.593 1.157-1.937 1.145a1 1 0 0 1-.905-.657c-.118-.324.085-.948.49-2.196.114-.35.17-.524.168-.691a1 1 0 0 0-.18-.556c-.097-.138-.245-.245-.542-.461C1.135 5.974.604 5.588.509 5.257a1 1 0 0 1 .345-1.063c.272-.212.928-.212 2.24-.212.368 0 .552 0 .71-.055a1 1 0 0 0 .473-.343c.1-.134.157-.309.27-.658Z"
    />
  </svg>
)
export default IconStar
