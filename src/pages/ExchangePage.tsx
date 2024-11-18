import React, { useEffect } from "react";
import Exchange from "../components/exchange/Exchange";
import { Element, scroller } from "react-scroll";

const ExchangePage = () => {
  const handleScroll = () => {
    scroller.scrollTo("top", { smooth: true });
  };

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <>
      <Element name="top" className="absolute top-[-5rem]" />
      <Exchange />
    </>
  );
};

export default ExchangePage;
