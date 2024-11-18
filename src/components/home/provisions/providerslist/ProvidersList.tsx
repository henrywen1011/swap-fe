import { useState } from 'react';
import styles from './providerslist.module.scss'; // Import the CSS module
import shield from "../../../../assets/shield.svg";
import chains23 from "../../../../assets/chains23.svg";
import coins from "../../../../assets/coins.png";
const ProvidersList = () => {

    const [provisions, toggleList] = useState([
        {
            name: 'Stealth Mode',
            text: 'Hydra restores privacy on the blockchain by providing users with a regulatory compliant anonymisation service. We find the lowest price for your trade across all partner exchanges at the time of the execution.',
            image: shield,
            hovered: false
        },
        {
            name: '23 Chains',
            text: 'Hydra is a decentralized meta-protocol enabling chain-agnostic transfers and swaps of digital assets across multiple blockchains. Order execution times vary between 5 to 30 minutes, depending on the confirmation speed of the network.',
            image: chains23,
            hovered: false
        },
        {
            name: 'All assets available',
            text: "No matter the blockchain or the exchange it's on. We will find the best price for you.",
            image: coins,
            hovered: false
        }
    ]);

    const handleHover = (payload: string) => {
        toggleList(prevState =>
            prevState.map(button => ({
                ...button,
                hovered: button.name === payload
            }))
        );
    };

    return (
        <div className="flex flex-col text-white gap-[4rem]">
            {provisions.map((provision, index) => (
                <div
                    onMouseEnter={() => handleHover(provision.name)}
                    key={index}
                    className={`${styles.provisionItem} ${index % 2 !== 0 ? "flex-col md:flex-row-reverse md:px-[3rem]" : "md:px-[3rem]"}`}
                >
                    <img className={`${styles.provisionImage} ${provision.hovered ? "scale-1" : "scale-[0.9]"}`} src={provision.image} alt={provision.name} />
                    <span className={styles.provisionText}>
                        <h4 className={styles.provisionName}>{provision.name}</h4>
                        <p className={styles.provisionDescription}>{provision.text}</p>
                    </span>
                </div>
            ))}
        </div>
    )
}

export default ProvidersList