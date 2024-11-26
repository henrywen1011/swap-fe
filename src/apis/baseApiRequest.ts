import axios, { AxiosError, CancelToken } from "axios";
import { toast } from "react-toastify";
import axiosRetry from "axios-retry";
import { SERVER_URL } from "@constants/config";
import { API_STYLE } from "@constants/types";

const axiosRetryInstance = axios.create({
  baseURL: SERVER_URL, // PRICE_API_URI,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

axiosRetry(axiosRetryInstance, {
  retries: 3,
  retryDelay: (retryCount) => {
    const delay = 1000 * Math.pow(2, retryCount);
    return Math.min(delay, 3000); // maximum delay of 3 seconds
  },
});

export const fetchServerData = async ({
  url,
  param = undefined,
  withAuth = true,
  withForm = false,
  retry = false,
  mute = false,
  method = API_STYLE.GET,
  abortController,
  headers = {
    "Content-Type": "application/json",
  },
}: {
  url: string;
  method?: string;
  withAuth?: boolean;
  withForm?: boolean;
  param?: any;
  retry?: boolean;
  mute?: boolean;
  headers?: Record<string, any>;
  abortController?: AbortController;
}) => {
  let customHeaders = headers;

  if (withAuth) {
    customHeaders = {
      ...headers,
    };
  }

  if (withForm) {
    customHeaders = {
      ...headers,
      "Content-Type": "multipart/form-data",
    };
  }

  const _axios = retry ? axiosRetryInstance : axios;

  try {
    const response = await _axios({
      method,
      headers: customHeaders,
      data: param,
      url,
      signal: abortController?.signal,
    });

    return { status: response.status, data: response?.data };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const axiosError = err as AxiosError<Record<string, any>>;
      if (!mute) toast.error(axiosError.response?.data?.message);

      return {
        status: axiosError.response?.status,
        data: { message: axiosError.response?.data?.message },
      };
    }
    if (!mute) toast.error("Unexpected Error");

    return {
      status: 500,
      data: { message: "Unexpected Error" },
    };
  }
};
