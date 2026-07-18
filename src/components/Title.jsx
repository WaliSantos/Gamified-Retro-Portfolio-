import { motion } from "motion/react";

function Title(){
    return(
        <motion.h1
            initial={{y:-50, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{ delay: 0.3, type: 'spring' }}
            className="text-xs md:text-lg lg:text-xl mt-12 md:mt-8 lg:mb-16
                        text-center tracking-widest  drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]"

                >MENU PRINCIPAL - PLAYER 1
        </motion.h1>
    )
}

export default Title;