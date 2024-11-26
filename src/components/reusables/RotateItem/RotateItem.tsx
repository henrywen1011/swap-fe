import React, { memo } from "react";

const RotateItem: React.FC<{
  rotation: string;
  children: any;
}> = ({ rotation, children }) => {
  return <div style={{ display: "flex", transform: rotation }}>{children}</div>;
};

export default memo(RotateItem);
