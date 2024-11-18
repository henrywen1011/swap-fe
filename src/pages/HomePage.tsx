import { useEffect } from "react";
import Home from "../components/home/Home";
import { Element, scroller } from "react-scroll";

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
