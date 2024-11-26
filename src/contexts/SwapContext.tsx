import React, { createContext, useState, ReactNode, useEffect } from "react";
import { ICategory, INetwork, IToken } from "@constants/interfeaces";
import useSWR, { Fetcher } from "swr";
import { API_URIS, fetcherFunc } from "@constants/config";
import useGlobalContext from "@hooks/useGlobalContext";

interface SwapContextProps {
  tokens: IToken[];
  networks: INetwork[];
  categories: ICategory[];
}

export const SwapContext = createContext<SwapContextProps>(
  {} as SwapContextProps
);

interface SwapProviderProps {
  children: ReactNode;
}

export const SwapProvider: React.FC<SwapProviderProps> = ({ children }) => {
  const { setIsPageLoading } = useGlobalContext();
  const { data, error, isLoading } = useSWR(
    API_URIS.FETCH_TOKENS_AND_NETWORKS,
    fetcherFunc
  );
  const [tokens, setTokens] = useState<IToken[]>([]);
  const [networks, setNetworks] = useState<INetwork[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    setIsPageLoading(isLoading);
    if (!error && data?.data) {
      setTokens(data.data?.tokens ?? []);
      setNetworks(data.data?.networks ?? []);
      setCategories(data.data?.categories ?? []);
    }
  }, [data, error, isLoading]);

  return (
    <SwapContext.Provider value={{ tokens, networks, categories }}>
      {children}
    </SwapContext.Provider>
  );
};

export default SwapProvider;
