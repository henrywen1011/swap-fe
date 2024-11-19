import { useEffect } from "react";
import { Element, scroller } from "react-scroll";
import Home from "@components/home/Home";

const HomePage = () => {
  const handleScroll = () => {
    scroller.scrollTo("top", { smooth: true });
  };

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <>
      <Element name="top" className="absolute top-[-5rem]" />
      <Home />
    </>
  );
};

export default HomePage;
