import React, { forwardRef, memo, MouseEventHandler } from "react";
import styled from "styled-components";
import classnames from "classnames";
import ButtonLoading from "../ButtonLoading";
import { BUTTON_TYPES, NOOP } from "@constants/types";
import { ICButtonStyleProps } from "@constants/interfeaces";
import styles from "./index.module.scss";

const StyledButton = styled.button<ICButtonStyleProps>`
  font-size: ${(props) => props.dynamicstyle?.fontSize}px;
  font-family: ${(props) => props.dynamicstyle?.fontFamily};
  border-radius: ${(props) => props.dynamicstyle?.radius}px;
  width: ${(props) => props.dynamicstyle?.width}px;
  height: ${(props) => props.dynamicstyle?.height}px;
  background-color: ${(props) => props.dynamicstyle?.backColor};
  color: ${(props) => props.dynamicstyle?.color};
  // border-style: solid;
  // border-width: ${(props) => props.dynamicstyle?.borderWidth};
  border-color: ${(props) =>
    props?.dynamicstyle?.borderColor ?? props.dynamicstyle?.backColor};
  padding: ${(props) => props.dynamicstyle?.padding};
  &:hover {
    background-color: ${(props) =>
      props.dynamicstyle?.hoverAction
        ? props.dynamicstyle?.hoverBackColor
        : props.dynamicstyle?.backColor};

    color: ${(props) =>
      props.dynamicstyle?.hoverAction
        ? props.dynamicstyle?.hoverColor
        : props.dynamicstyle?.color};
    opacity: ${(props) => (props.dynamicstyle?.hoverAction ? 1 : 0.7)};
  }
`;

const CButton = forwardRef<
  HTMLButtonElement,
  {
    id?: string;
    buttonType?: "button" | "submit" | "reset";
    bordered?: boolean;
    children?: any;
    disabled?: boolean;
    className?: string;
    loadingClassName?: string;
    loadingColor?: string;
    primary?: boolean;
    secondary?: boolean;
    gradient?: boolean;
    warn?: boolean;
    info?: boolean;
    large?: boolean;
    small?: boolean;
    big?: boolean;
    tiny?: boolean;
    active?: boolean;
    type?: string;
    outline?: boolean;
    border?: boolean;
    filled?: boolean;
    icon?: boolean;
    loading?: boolean;
    dynamicStyle?: {
      radius?: string;
      width?: string;
      height?: string;
      color?: string;
      backColor?: string;
      hoverColor?: string;
      hoverBackColor?: string;
      hoverAction?: boolean;
      fontFamily?: string;
      fontSize?: number;
      padding?: string;
      borderColor?: string;
      borderWidth?: string;
    };
    onClick?: MouseEventHandler<HTMLButtonElement>;
    onDoubleClick?: (e: any) => void;
  }
>(
  (
    {
      id,
      children,
      className,
      loadingClassName,
      loadingColor = "#ffffff",
      gradient = false,
      disabled = false,
      primary = false,
      secondary = false,
      info = false,
      warn = false,
      small = false,
      large = false,
      big = false,
      tiny = false,
      active = false,
      outline = false,
      filled = false,
      icon = false,
      type = BUTTON_TYPES.PILLED,
      buttonType,
      bordered,
      dynamicStyle = {},
      loading = false,
      onClick,
      onDoubleClick,
    },
    ref?: React.Ref<HTMLButtonElement>
  ) => {
    const Component = Object.keys(dynamicStyle).length ? (
      <StyledButton
        ref={ref}
        disabled={disabled ?? false}
        className={classnames("custom_button", className, {
          _outline: outline,
          _filled: filled,
          _small: small,
          _icon: icon,
          _big: big,
        })}
        onClick={onClick}
        dynamicstyle={dynamicStyle}
      >
        {loading ? (
          <ButtonLoading
            containerClass={classnames(loadingClassName)}
            color={loadingColor}
          />
        ) : (
          children
        )}
      </StyledButton>
    ) : (
      <button
        id={id}
        ref={ref}
        disabled={disabled ?? false}
        type={buttonType}
        style={{ borderStyle: bordered ? "solid" : "none" }}
        className={classnames(styles.custom_button, className, {
          [styles._squared]: type === BUTTON_TYPES.SQUARED,
          [styles._pilled]: type === BUTTON_TYPES.PILLED,
          [styles._rounded]: type === BUTTON_TYPES.ROUNDED,
          [styles._gradient]: gradient,
          [styles._primary]: primary,
          [styles._secondary]: secondary,
          [styles._warn]: warn,
          [styles._info]: info,
          [styles._outline]: outline,
          [styles._filled]: filled,
          [styles._active]: active,
          [styles._small]: small,
          [styles._big]: big,
          [styles._large]: large,
          [styles._icon]: icon,
          [styles._tiny]: tiny,
        })}
        onClick={loading || disabled ? NOOP : onClick}
        onDoubleClick={loading || disabled ? NOOP : onDoubleClick}
      >
        {loading ? (
          <ButtonLoading
            containerClass={classnames(loadingClassName)}
            color={loadingColor}
          />
        ) : (
          children
        )}
      </button>
    );
    return Component;
  }
);

CButton.displayName = "Custom Button";
export default memo(CButton);
