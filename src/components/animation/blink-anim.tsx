import { motion, Variants } from "framer-motion";

const BlinkAnimation: React.FC<{
    children: React.ReactNode, delay?: number, duration?:number, opacity?:number
}> = ({children, opacity=0, delay=0.5, duration=1.5}) => {
    const cardVariants: Variants = {
        offscreen: {
            opacity: 0,
        },
        onscreen: {
            opacity: 1,
            transition: {
                type: "keyframes",
                repeat: Infinity,
                repeatType: "reverse",
                delay,
                when: "afterChildren",
                duration,
            },
        },
    };

    return (
        <motion.div initial="offscreen" whileInView="onscreen" className="w-full">
        <motion.div variants={cardVariants} className="opacity-0 w-full">
            {children}
        </motion.div>
        </motion.div>
    );
}
export default BlinkAnimation;