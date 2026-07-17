import { motion } from "motion/react";

function Menu(){
    return(
        <motion.div
            className="absolute inset-0 bg-[#050505] w-full h-full flex flex-col items-center p-6 md:p-12 lg:p-16 z-50 overflow-y-auto"
        >
            <h1>Olá, eu sou o menu</h1>
        </motion.div>
    )
}

export default Menu;