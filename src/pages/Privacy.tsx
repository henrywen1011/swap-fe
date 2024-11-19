import { useEffect } from "react";
import { Element, scroller } from "react-scroll";
import Privacy from "@components/privacy/Privacy";

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
