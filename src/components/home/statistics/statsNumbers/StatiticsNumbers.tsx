import { useState } from "react";
import styles from './Numbers.module.scss'; // Import CSS module
import Button from "../../../reusables/Button";
import { BUTTON_TYPES } from "../../../../costants/types";
import CButton from "../../../reusables/CButton";

interface Button {
  name: string;
  clicked: boolean;
}

interface NumbersProps {
  buttons2: Button[];
  handleButtonPress2: (name: string) => void;
}

const Numbers = ({ buttons2, handleButtonPress2 }: NumbersProps) => {
  const [buttons, toggleButtons] = useState<Button[]>([
    { name: 'TVS', clicked: true },
    { name: 'TXOS', clicked: false },
  ]);

  const handleButtonPress = (payload: string) => {
    toggleButtons(prevState =>
      prevState.map(button => ({
        ...button,
        clicked: button.name === payload,
      }))
    );
  };

  return (
    <div className={styles.container}>
      <span className={styles.infoContainer}>
        <h4 className={styles.heading}>$37,940,305</h4>
        <p>Total Value Swapped</p>
      </span>
      <span className={styles.infoContainer}>
        <h4 className={styles.heading}>13,641</h4>
        <p>Transactions</p>
      </span>
      <span className="flex flex-col text-white gap-4">
        <h4 className={styles.heading}>SELECT DATA</h4>
        <span className={styles.buttonContainer}>
          {buttons.map((button, index) => (

            <CButton
              onClick={() => handleButtonPress(button.name)}
              type={BUTTON_TYPES.PILLED}
              outline
              className="border"
              dynamicStyle={{
                padding: '0.5rem 1.5rem',
                borderColor: '#FFE878',
                radius: '8',
                backColor: button.clicked ? '#FFE878' : 'transparent',
                color: button.clicked ? 'black' : '#FFE878'
              }}
              key={index}
            >
              {button.name}
            </CButton>

          ))}
        </span>
      </span>
      <span className="flex flex-col text-white gap-4">
        <h4 className={styles.heading}>TIMEFRAME SELECT</h4>
        <span className={styles.buttonContainer}>
          {buttons2.map((button, index) => (
            <CButton
              onClick={() => handleButtonPress2(button.name)}
              type={BUTTON_TYPES.PILLED}
              outline
              className="border"
              dynamicStyle={{
                padding: '0.5rem 1.5rem',
                borderWidth: '1px',
                borderColor: '#FFE878',
                radius: '8',
                backColor: button.clicked ? '#FFE878' : 'transparent',
                color: button.clicked ? 'black' : '#FFE878',
              }}
              key={index}
            >
              {button.name}
            </CButton>
          ))}
        </span>
      </span>
    </div>
  );
};

export default Numbers;
