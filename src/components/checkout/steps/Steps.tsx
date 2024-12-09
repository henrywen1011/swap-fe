import styles from "./steps.module.scss"; // Import the CSS module
import { ICON_NAMES } from "@constants/config";
import SVGIcon from "@components/reusables/SVGIcon";
import classNames from "classnames";
import { BlinkAnimation, SlideAnimation } from "@components/animation";
import { useCheckoutContext } from "@contexts/CheckoutContext";

const stepsArr = [
  { label: "Pending deposit", icon: ICON_NAMES.SAND_CLOCK },
  { label: "Confirming", icon: ICON_NAMES.ANNONYMOUS },
  { label: "Exchanging", icon: ICON_NAMES.EXCHANGE },
  { label: "Sending", icon: ICON_NAMES.COMPLETE },
];

const Steps = () => {
  const { orderDetail } = useCheckoutContext();

  const ProgressStep: React.FC<{ step: any; id: number }> = ({ step, id }) => (
    <div className={styles.stepContainer}>
      <div
        className={classNames("flex flex-col items-center gap-4 py-5 px-7 ", {
          ["border-2 border-[#ffe878] rounded-[16px]"]:
            id === orderDetail?.status,
        })}
      >
        <SVGIcon
          name={step.icon}
          active={id === orderDetail?.status}
          size={50}
        />
        <span
          className={classNames("text-xl", {
            ["text-[#ffe878]"]: id === orderDetail?.status,
          })}
        >
          {step.label}
        </span>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-2 md:flex w-full max-w-[70rem] lg:max-w-[80rem] px-2 md:justify-between gap-4 md:gap-0">
      {stepsArr.map((step, index) =>
        index === orderDetail?.status ? (
          <div>
            <BlinkAnimation delay={0.5} key={index}>
              <ProgressStep step={step} id={index} />
            </BlinkAnimation>
          </div>
        ) : (
          <ProgressStep step={step} id={index} key={index} />
        )
      )}
    </div>
  );
};

export default Steps;
