import { motion, Variants } from "framer-motion"



const SlideAnimation: React.FC<{
    children: React.ReactNode, 
    x?:number, 
    y?:number, 
    delay?:number, 
    duration?:number,
    css?: string
}> = ({children,x=0,y=30,duration=0.5,delay=0,css="w-full"}) => {
    const cardVariants: Variants = {
        offscreen: {
            opacity: 0,
            y,
            x
        },
        onscreen: {
            opacity: 1,
            y: 0,
            x:0,
            transition: {
                delay,
                type: "linear",
                bounce: 0.1,
                duration
            }
        }
    };
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            className={css??""}
        >
            <motion.div variants={cardVariants} className='opacity-0 w-full h-full'>
                {children}
            </motion.div>
        </motion.div>
    )
}
export default SlideAnimation;

