import { IconType } from "react-icons";

type MyIconProps = {
  Icon: IconType;
  size?: number;
  className?: string;
};

export default function MyIcon({
  Icon,
  size = 11,
  className = "",
}: MyIconProps) {
  return <Icon size={size} className={`relative top-[-1px] ${className}`} />;
}
