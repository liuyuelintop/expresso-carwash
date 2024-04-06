import Partners from "./Partners";
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: delay
        }
    }
})

export default function Hero() {
    return (
        <div className="flex flex-col border-b border-neutral-900 pb-4">
            <motion.img src="https://kantata.marketing/wp-content/uploads/2021/08/consulting-firm-project-management.jpg"
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="mt-8 p-3 max-h-[600px] w-full object-cover" />
            <motion.h1
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="text-xl lg:text-4xl mt-2 sm:mt-4 font-semibold text-neutral-300 text-center">EXPERIENCED, PERSONALIZED IT CONSULTING AND SUPPORT</motion.h1>
            <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="mt-2 text-lg lg:text-2xl  text-neutral-400 text-center">Let us build the infrastructure for your success!
            </motion.p>
            <Partners />
        </div>
    )
}
