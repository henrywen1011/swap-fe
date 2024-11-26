import { Fetcher } from "swr";

export const SERVER_URL = "http://localhost:5800";
export const API_URIS = {
  FETCH_TOKENS_AND_NETWORKS: `${SERVER_URL}/assets`,
  FETCH_SWAP_QUOTE: `${SERVER_URL}/quotes`,
  CREATE_SWAP_ORDER: `${SERVER_URL}/orders`,
  FETCH_SWAP_ORDER_INFO: (orderId: string) => `${SERVER_URL}/orders/${orderId}`,
};
export const ICON_NAMES = {
  CLOSE: "close-icon",
  SEARCH: "search-icon",
  LOGOUT: "logout-icon",
  RIGHT_ARROW: "right-arrow-icon",
  CLOSE_OUTLINE_CIRCLE: "close-outline-circle-icon",
};

export const ICON_SIZE = {
  LARGE: 50,
  BIG: 36,
  DEFAULT: 24,
  SMALL: 20,
  TINY: 16,
};

export const fetcherFunc: Fetcher<any, string> = (...args) =>
  fetch(...args).then((res) => res.json());

export const TOAST_MESSAGE = {
  FAIL_TOKEN_FETCH: "Failed to fetch tokens data",
};

export const ROTATE_TYPES = {
  ROT_180: "rotate(180deg)",
  ROT_90: "rotate(90deg)",
  ROT_270: "rotate(270deg)",
  FLIP: "scaleX(-1)",
};
