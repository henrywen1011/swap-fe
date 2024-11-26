import * as React from "react";

const SearchIcon: React.FC<{
  active?: boolean;
  black?: boolean;
  color?: string;
  size?: number;
}> = ({ active, black, color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="9.7905"
        cy="10.5615"
        r="7.31101"
        stroke={black ? "#212121" : active ? "#F9FAFA" : color}
        strokeWidth="1.5"
      />
      <path
        d="M15.4541 15.5654L20.9385 21.0493"
        stroke={black ? "#212121" : active ? "#F9FAFA" : color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
