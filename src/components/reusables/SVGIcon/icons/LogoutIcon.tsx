import * as React from "react";

const LogoutIcon: React.FC<{
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
        d="M3 21V3H12V5H5V19H12V21H3ZM16 17L14.625 15.55L17.175 13H9V11H17.175L14.625 8.45L16 7L21 12L16 17Z"
        fill={black ? "#212121" : active ? "#ffe878" : color}
      />
    </svg>
  );
};

export default LogoutIcon;
