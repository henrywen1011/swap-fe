import { motion, Variants } from "framer-motion"


const FadeOutAnimation: React.FC<{
    children: React.ReactNode, 
    delay?: number, 
    duration?:number,
    css?: string
}> = ({children, delay=0.5, duration=1.5, css="w-full"}) => {

    const cardVariants: Variants = {
        offscreen: {
          opacity: 0,
        },
        onscreen: {
          opacity: 1,
          transition: {
            type: "linear",
            delay,
            when: "afterChildren",
            duration
          }
        }
    };

    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            className={css}
        >
            <motion.div variants={cardVariants} className='opacity-0 w-full'>
                {children}
            </motion.div>
        </motion.div>
    )
}
export default FadeOutAnimation;

