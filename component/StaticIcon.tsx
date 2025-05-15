import React from "react";

type StaticIconProps = {
  name: string; // e.g., "calendar", "location"
  size?: number;
  alt?: string;
  className?: string;
};

const StaticIcon: React.FC<StaticIconProps> = ({
  name,
  size = 11,
  alt = "",
  className = "",
}) => {
  return (
    <img
      src={`/icons/${name}.svg`}
      alt={alt || name}
      width={size}
      height={size}
      className={`inline-block ${className}`}
    />
  );
};

export default StaticIcon;
