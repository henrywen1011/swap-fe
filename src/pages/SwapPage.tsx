import { useEffect } from "react";
import { Element, scroller } from "react-scroll";
import SwapForm from "@components/home/hero/swapform/SwapForm";

const SwapPage = () => {
  const handleScroll = () => {
    scroller.scrollTo("top", { smooth: true });
  };

  useEffect(() => {
    handleScroll();
  }, []);
  return (
    <>
      <Element name="top" className="absolute top-[-5rem]" />
      <div className="w-full relative min-h-[50rem]">
        <SwapForm />
      </div>
    </>
  );
};

export default SwapPage;
