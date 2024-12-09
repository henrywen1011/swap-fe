import * as React from "react";

const CloseIcon: React.FC<{
  active?: boolean;
  black?: boolean;
  color?: string;
  size?: number;
}> = ({ active, black, color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 18L17.94 6M18 18L6.06 6"
        stroke={black ? "#212121" : active ? "#ffe878" : color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;
