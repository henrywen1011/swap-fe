import { useEffect } from "react";
import { Element, scroller } from "react-scroll";
import Checkout from "@components/checkout/Checkout";

const CheckOutPage = () => {
  const handleScroll = () => {
    scroller.scrollTo("top", { smooth: true });
  };

  useEffect(() => {
    handleScroll();
  }, []);
  return (
    <>
      <Element name="top" className="absolute top-[-5rem]" />
      <Checkout />
    </>
  );
};

export default CheckOutPage;
