import { useEffect } from "react";
import { Element, scroller } from "react-scroll";
import Exchange from "@components/exchange/Exchange";

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
