import { useState } from "react"
import instruction1 from "../../../assets/instruction1.svg"
import instruction5 from "../../../assets/instruction5.svg"
import styles from "./instructions.module.scss"
const Instructions = () => {
    const [instructions, toggleInstructions] = useState([
        {
            hovered: false,
            image: instruction1,
            title: 'Select crypto exchange pair',
            text: 'Choose from a wide range of available combinations.'
        },
        {
            hovered: false,
            image: instruction1,
            title: 'Enter exchange amount',
            text: 'Hydra optimizes for lowest cost by gathering rates from multiple exchanges.'
        },
        {
            hovered: false,
            image: instruction1,
            title: 'Enter receiving wallet address',
            text: 'Ensure it matches the address format of the receiving currency (e.g., BTC addresses start with 0x...).'
        },
        {
            hovered: false,
            image: instruction1,
            title: 'Send funds to generated address',
            text: 'Using your personal wallet, transfer funds to the address provided on the Checkout Process Page. For your security, Hydra does not connect any wallet.'
        },
        {
            hovered: false,
            image: instruction5,
            title: 'Complete',
            text: 'Anonymization typically takes between 5 and 30 minutes on average. Track the progress on the Checkout Page while enjoying our curated news.'
        },
        {
            hovered: false,
            image: instruction1,
            title: 'Contact our helpdesk if you need assistance',
            text: 'Feel free to reach out with any inquiries.'
        }
    ])

    const handleHover = (payload: string) => {
        toggleInstructions((prevState) => prevState.map((instruction: any) => {
            if (instruction.title === payload) {
                return ({ ...instruction, hovered: !instruction.hovered })
            } else {
                return ({ ...instruction, hovered: false })
            }
        }))
    }

    return (
        <div className={styles.container}>
            {
                instructions.map((instruction, index) => (
                    <div onMouseLeave={() => handleHover(instruction.title)} onMouseEnter={() => handleHover(instruction.title)} className={`${styles.instructionContainer} ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                        <div className={styles.imageContainer}>
                            <img src={instruction.image} className={`${instruction?.hovered ? "scale-110" : null} ${styles.image}`} alt="" />
                        </div>
                        <div className={styles.textContainer}>
                            <p className="text-[#eeb91d]">STEP 0{index + 1}</p>
                            <p className={styles.title}>{instruction.title}</p>
                            <p>{instruction.text}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Instructions