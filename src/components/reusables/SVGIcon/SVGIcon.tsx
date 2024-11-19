import React, { memo } from "react";
import CloseOutlineCircleIcon from "./icons/CloseOutlineCircleIcon";
import CloseIcon from "./icons/CloseIcon";
import RightDirectionIcon from "./icons/RightDirectionIcon";
import LogoutIcon from "./icons/LogoutIcon";
import { ISVGIconProps } from "@constants/interfeaces";
import { ICON_NAMES, ICON_SIZE } from "@constants/config";

const SVGIcon: React.FC<ISVGIconProps> = ({
  name,
  active = false,
  black = false,
  color = "#AAAAAA",
  size = ICON_SIZE.DEFAULT,
}) => {
  const getIcon = () => {
    switch (name) {
      case ICON_NAMES.CLOSE:
        return (
          <CloseIcon active={active} black={black} color={color} size={size} />
        );
      case ICON_NAMES.RIGHT_ARROW:
        return (
          <RightDirectionIcon
            active={active}
            black={black}
            color={color}
            size={size}
          />
        );
      case ICON_NAMES.CLOSE_OUTLINE_CIRCLE:
        return (
          <CloseOutlineCircleIcon
            active={active}
            black={black}
            color={color}
            size={size}
          />
        );
      case ICON_NAMES.LOGOUT:
        return (
          <LogoutIcon active={active} black={black} color={color} size={size} />
        );

      default:
        return <div>{name}</div>;
    }
  };

  return getIcon();
};

export default memo(SVGIcon);
