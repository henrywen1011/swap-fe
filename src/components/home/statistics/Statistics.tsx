import { useState } from "react";
import StarAnimation from "./statsbackground/StatsBg";
import Numbers from "./statsNumbers/StatiticsNumbers";
import ForexChart from "./forexchart/ForexChart";
import styles from './Statistics.module.scss'; // Import CSS module

const Stats = () => {
  const [buttons2, toggleButtons2] = useState([
    { name: '1D', clicked: false },
    { name: '7D', clicked: true },
    { name: '1M', clicked: false },
    { name: '1Y', clicked: false },
    { name: 'ALL', clicked: false },
  ]);

  // Handle button click and toggle the active state
  const handleButtonPress2 = (payload: string) => {
    toggleButtons2(prevState =>
      prevState.map(button => ({
        ...button,
        clicked: button.name === payload,
      }))
    );
  };

  // Filter the clicked button (active one)
  const activeButton = buttons2.find(button => button.clicked)?.name;

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>TODAY'S STATISTICS</h3>

      {/* Pass buttons and the handle function to Numbers */}
      <Numbers buttons2={buttons2} handleButtonPress2={handleButtonPress2} />

      <div className={styles.animationWrapper}>
        <StarAnimation />
      </div>

      {/* Pass the active button's name as the timeFrame to ForexChart */}
      <ForexChart timeFrame={activeButton} />
    </div>
  );
};

export default Stats;
