import React, { forwardRef, memo } from "react";
import classnames from "classnames";
import styled from "styled-components";
import { BUTTON_TYPES } from "../../costants/types";

// Styled-components dynamic styling for the button
const StyledButton = styled.button<any>`
  border-radius: ${(props: any) => props.dynamicStyle?.radius || "4px"};
  width: ${(props: any) => props.dynamicStyle?.width || "auto"};
  height: ${(props: any) => props.dynamicStyle?.height || "auto"};
  background-color: ${(props: any) =>
    props.dynamicStyle?.backColor || "transparent"};
  border: 2px solid
    ${(props: any) => props.dynamicStyle?.backColor || "transparent"};
  color: ${(props: any) => props.dynamicStyle?.color || "#000"};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.dynamicStyle?.hoverAction
        ? props.dynamicStyle?.hoverBackColor
        : props.dynamicStyle?.backColor};
    color: ${(props) =>
      props.dynamicStyle?.hoverAction
        ? props.dynamicStyle?.hoverColor
        : props.dynamicStyle?.color};
    opacity: ${(props) => (props.dynamicStyle?.hoverAction ? 1 : 0.7)};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

// Button component with dynamic styles and additional class handling
const Button = forwardRef<any, any>(
  (
    {
      children,
      className,
      disabled = false,
      primary = false,
      secondary = false,
      warn = false,
      info = false,
      outline = false,
      filled = false,
      type = "button", // Default type to 'button'
      buttonType = BUTTON_TYPES.ROUNDED, // Renaming this to avoid conflict with HTML type
      dynamicStyle = {},
      onClick,
      customStyles = "", // Accept custom styles as prop
    },
    ref
  ) => {
    const Component = Object.keys(dynamicStyle).length ? (
      <StyledButton
        ref={ref}
        type={type} // Set button type
        disabled={disabled}
        className={classnames("button", className, customStyles)} // Combine custom styles with className
        onClick={onClick}
        dynamicStyle={dynamicStyle}
      >
        {children}
      </StyledButton>
    ) : (
      <button
        ref={ref}
        type={type} // Set button type
        disabled={disabled}
        className={classnames("button", className, customStyles, {
          primary,
          secondary,
          warn,
          info,
          outline,
          filled,
        })} // Prioritize customStyles and avoid overriding them
        onClick={onClick}
      >
        {children}
      </button>
    );

    return Component;
  }
);

export default memo(Button);
