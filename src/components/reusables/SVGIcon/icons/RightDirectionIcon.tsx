import * as React from "react";

const RightDirectionIcon: React.FC<{
  size?: number;
  active?: boolean;
  black?: boolean;
  color?: string;
}> = ({ size, active, black, color }) => {
  return (
    <svg
      style={{ pointerEvents: "none" }}
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.42492 17.225C7.26659 17.225 7.10825 17.1667 6.98325 17.0417C6.74159 16.8 6.74159 16.4 6.98325 16.1583L12.4166 10.725C12.8166 10.325 12.8166 9.67499 12.4166 9.27499L6.98325 3.84165C6.74159 3.59999 6.74159 3.19999 6.98325 2.95832C7.22492 2.71665 7.62492 2.71665 7.86658 2.95832L13.2999 8.39165C13.7249 8.81665 13.9666 9.39165 13.9666 9.99999C13.9666 10.6083 13.7333 11.1833 13.2999 11.6083L7.86658 17.0417C7.74158 17.1583 7.58325 17.225 7.42492 17.225Z"
        fill={black ? "#212121" : active ? "#F9FAFA" : color}
      />
    </svg>
  );
};

export default RightDirectionIcon;
