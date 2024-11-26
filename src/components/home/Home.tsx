import Provision from "./provisions/Provision";
import Recommendations from "./recommendations/Recommendations";
import Stats from "./statistics/Statistics";
import Hero from "./hero/Hero";
import Globe from "./provisions/darkEarthSun/DarkEarthSun";
import GlowComponent from "../reusables/glowcomponents/GlowComponent";
import BubbleComponent from "../reusables/backgroundbubbles/Bubble";
import wavedots from "../../assets/wavedots.svg";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <>
        <div className="absolute top-[5%] left-[-10%] md:left-[-5%]">
          <GlowComponent />
        </div>
        <div className="absolute top-[10%] right-[-10%] md:right-[-5%]">
          <GlowComponent />
        </div>
        <div className="absolute top-[25%] left-[-10%] md:left-[-5%]">
          <GlowComponent />
        </div>
        <div className="absolute top-[30%] right-[-10%] md:right-[-5%]">
          <GlowComponent />
        </div>
        <div className="absolute top-[45%] left-[-10%] md:left-[-5%]">
          <GlowComponent />
        </div>
        <div className="absolute top-[50%] right-[-10%] md:right-[-5%]">
          <GlowComponent />
        </div>
        <div className="absolute top-[65%] left-[-10%] md:left-[-5%]">
          <GlowComponent />
        </div>
        <div className="absolute top-[70%] right-[-10%] md:right-[-5%]">
          <GlowComponent />
        </div>
        <div className="absolute top-[85%] left-[-10%] md:left-[-5%]">
          <GlowComponent />
        </div>
        <div className="absolute top-[90%] right-[-10%] md:right-[-5%]">
          <GlowComponent />
        </div>
      </>
      <>
        <div
          className={`absolute top-[8%] scale-[65%] opacity-80  left-0 md:left-[-3%] lg:left-[2%]`}
        >
          <img src={wavedots} alt="" />
        </div>
        <div
          className={`absolute top-[36%] scale-[65%] opacity-80 right-0 md:right-[-3%] lg:right-[2%]`}
        >
          <img src={wavedots} alt="" />
        </div>
        <div
          className={`absolute top-[60%] scale-[65%] opacity-80  left-0 md:left-[-3%] lg:left-[2%]`}
        >
          <img src={wavedots} alt="" />
        </div>
        <div
          className={`absolute top-[86%] scale-[65%] opacity-80 right-0 md:right-[-3%] lg:right-[2%]`}
        >
          <img src={wavedots} alt="" />
        </div>
      </>
      <>
        <div className="absolute top-[8%] scale-[0.4] left-[-10%] md:left-[5%]">
          <BubbleComponent />
        </div>
        <div className="absolute top-[16%] scale-[0.4] right-[-10%] md:right-[5%]">
          <BubbleComponent />
        </div>
        <div className="absolute top-[28%] scale-[0.4] left-[-10%] md:left-[5%]">
          <BubbleComponent />
        </div>
        <div className="absolute top-[36%] scale-[0.4] right-[-10%] md:right-[5%]">
          <BubbleComponent />
        </div>
        <div className="absolute top-[48%] scale-[0.4] left-[-10%] md:left-[5%]">
          <BubbleComponent />
        </div>
        <div className="absolute top-[56%] scale-[0.4] right-[-10%] md:right-[5%]">
          <BubbleComponent />
        </div>
        <div className="absolute top-[68%] scale-[0.4] left-[-10%] md:left-[5%]">
          <BubbleComponent />
        </div>
        <div className="absolute top-[76%] scale-[0.4] right-[-10%] md:right-[5%]">
          <BubbleComponent />
        </div>
        <div className="absolute top-[88%] scale-[0.4] left-[-10%] md:left-[5%]">
          <BubbleComponent />
        </div>
        <div className="absolute top-[96%] scale-[0.4] right-[-10%] md:right-[5%]">
          <BubbleComponent />
        </div>
      </>
      <Hero />
      <Stats />
      <div className={styles.relativeContainer}>
        <div className={styles.globeContainer}>
          <Globe />
        </div>
        <Provision />
      </div>
      <Recommendations />
    </div>
  );
};

export default Home;
