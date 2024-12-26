import Globe from "../darkEarthSun/DarkEarthSun";
import one from "@assets/liquidity/one.svg";
import two from "@assets/liquidity/two.svg";
import three from "@assets/liquidity/three.svg";
import four from "@assets/liquidity/four.svg";
import five from "@assets/liquidity/five.svg";
import six from "@assets/liquidity/six.svg";
import seven from "@assets/liquidity/seven.svg";
import styles from "./providers.module.scss"; // Import the CSS module

const Providers = () => {
  const providers = [one, two, three, four, five, six, seven];

  return (
    <div className={styles.liquidityContainer}>
      <div className="relative mt-[20rem] z-[-1]">
        <div className="absolute left-1/2 top-[-25vh] z-[-1] transform -translate-x-1/2">
          <Globe />
        </div>
      </div>
      {/* <h3 className={styles.liquidityTitle}>LIQUIDITY PROVIDERS</h3> */}
      {/* <div className={styles.liquidityProviders}>
        {providers.map((provider, index) => (
          <img
            key={index}
            src={provider}
            className={styles.providerImage}
            alt={`Provider ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Providers;
