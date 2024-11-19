import Instructions from "./instructions/Instructions";
import Globe from "../home/provisions/darkEarthSun/DarkEarthSun";
import SwapForm from "../home/hero/swapform/SwapForm";
import styles from "./exchange.module.scss";
import GlowComponent from "../reusables/glowcomponents/GlowComponent";
import BubbleComponent from "../reusables/backgroundbubbles/Bubble";
import wavedots from "@assets/wavedots.svg";
const Exchange = () => {
  return (
    <div className={styles.container}>
      <>
        <div className="absolute top-[5%] left-[-10%] md:left-[5%]">
          <GlowComponent />
        </div>
        <div className="absolute top-[10%] right-[-10%] md:right-[5%]">
          <GlowComponent />
        </div>
        <div className="absolute top-[25%] left-[-10%] md:left-[5%]">
          <GlowComponent />
        </div>
        <div className="absolute top-[30%] right-[-10%] md:right-[5%]">
          <GlowComponent />
        </div>
        <div className="absolute top-[45%] left-[-10%] md:left-[5%]">
          <GlowComponent />
        </div>
        <div className="absolute top-[50%] right-[-10%] md:right-[5%]">
          <GlowComponent />
        </div>
        <div className="absolute top-[65%] left-[-10%] md:left-[5%]">
          <GlowComponent />
        </div>
        <div className="absolute top-[70%] right-[-10%] md:right-[5%]">
          <GlowComponent />
        </div>
        <div className="absolute top-[85%] left-[-10%] md:left-[5%]">
          <GlowComponent />
        </div>
        <div className="absolute top-[90%] right-[-10%] md:right-[5%]">
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
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>HOW TO EXCHANGE</h2>
        <div className={styles.globe}>
          <Globe />
        </div>
      </div>
      <Instructions />
      <div className={styles.instructionsContainer}>
        <div className="flex flex-col gap-6">
          <h2 className={styles.tryHeading}>READY TO GIVE IT A TRY?</h2>
          <p className={styles.tryText}>
            Trade directly from your wallet. Cross-Chain. Anonymously.
          </p>
        </div>
        <div className={styles.globe}>
          <Globe />
        </div>
        <div className={styles.swapFormContainer}>
          <SwapForm />
        </div>
      </div>
    </div>
  );
};

export default Exchange;
