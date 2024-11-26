export const NOOP = (): void => undefined;

export const BUTTON_TYPES = {
  PILLED: "Pills",
  ROUNDED: "Rounded",
  SQUARED: "Squared",
};

export const MODAL_IDS = {
  TOKEN_SELECT: "token-select-modal",
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

export const TOKEN_DIRECTRION = {
  FROM: "token-from",
  TO: "token-to",
} as const;

export type TokenDirectionType =
  (typeof TOKEN_DIRECTRION)[keyof typeof TOKEN_DIRECTRION];

export const API_STYLE = {
  GET: "GET",
  PUT: "PUT",
  POST: "POST",
  DELETE: "DELETE",
};

export type API_STYLE_TYPE = (typeof API_STYLE)[keyof typeof API_STYLE];

export const SWAP_BUTTON_STATE = {
  DEFAULT: "SWAP",
  FETCHING_ROUTE: "FETCHING BEST PRICE",
  CREATING_ORDER: "CREATING ORDER",
  PROCESSING_ORDER: "PROCESSING ORDER",
  INVALID_ROUTE: "INVALID ROUTE",
};

export type SwapButtonStateType =
  (typeof SWAP_BUTTON_STATE)[keyof typeof SWAP_BUTTON_STATE];
