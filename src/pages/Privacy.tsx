import React, { useEffect } from "react";
import Privacy from "../components/privacy/Privacy";
import { Element, scroller } from "react-scroll";

const PrivacyPage = () => {
  const handleScroll = () => {
    scroller.scrollTo("top", { smooth: true });
  };

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <>
      <Element name="top" className="absolute top-[-5rem]" />
      <Privacy />
    </>
  );
};

export default PrivacyPage;
