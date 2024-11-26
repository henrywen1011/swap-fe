import React, {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useContext,
} from "react";
import { IOrderDetail } from "@constants/interfeaces";
import useSWR, { Fetcher } from "swr";
import { API_URIS, fetcherFunc } from "@constants/config";
import useGlobalContext from "@hooks/useGlobalContext";
import { useParams } from "react-router-dom";

interface CheckoutContextProps {
  orderDetail: IOrderDetail | undefined;
}

export const CheckoutContext = createContext<CheckoutContextProps>(
  {} as CheckoutContextProps
);

interface CheckoutProviderProps {
  children: ReactNode;
}

export const CheckoutProvider: React.FC<CheckoutProviderProps> = ({
  children,
}) => {
  const { order_id } = useParams();
  const { setIsPageLoading } = useGlobalContext();
  const { data, error, isLoading } = useSWR(
    API_URIS.FETCH_SWAP_ORDER_INFO(order_id ?? ""),
    fetcherFunc
  );
  const [orderDetail, setOrderDetail] = useState<IOrderDetail>();

  useEffect(() => {
    setIsPageLoading(isLoading);
    if (!error && data?.data) {
      console.log(data?.data);
      setOrderDetail(data?.data);
    }
  }, [data, error, isLoading]);

  return (
    <CheckoutContext.Provider value={{ orderDetail }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutProvider;

export const useCheckoutContext = () => useContext(CheckoutContext);
