export interface ICButtonStyleProps {
  dynamicStyle: {
    hoverBackColor?: string;
    hoverAction?: boolean;
    radius?: string;
    color?: string;
    width?: string;
    height?: string;
    backColor?: string;
    hoverColor?: string;
    fontFamily?: string;
    fontSize?: number;
    padding?: string;
    borderColor?: string;
    borderWidth?: string;
  };
}

export const NOOP = (): void => undefined;

export const BUTTON_TYPES = {
  PILLED: "Pills",
  ROUNDED: "Rounded",
  SQUARED: "Squared",
};
