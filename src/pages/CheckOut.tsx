import React, { useEffect } from "react";
import Checkout from "../components/checkout/Checkout";
import { Element, scroller } from "react-scroll";

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
