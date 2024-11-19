export const NOOP = (): void => undefined;

export const BUTTON_TYPES = {
  PILLED: "Pills",
  ROUNDED: "Rounded",
  SQUARED: "Squared",
};

export const MODAL_IDS = {
  BIT_WALLET_LIST: "bit-wallet-list",
};

export type MODAL_IDS_KEYS = keyof typeof MODAL_IDS;

export const MODAL_SIZE = {
  LARGE: "modal_lg",
  BIG: "modal_bg",
  DEFAULT: "",
  SMALL: "modal_sm",
  TINY: "modal_tn",
} as const;

export type ModalSizeType = (typeof MODAL_SIZE)[keyof typeof MODAL_SIZE];

export const ROTATE_TYPES = {
  ROT_180: "rotate(180deg)",
  ROT_90: "rotate(90deg)",
  ROT_270: "rotate(270deg)",
  FLIP: "scaleX(-1)",
};
