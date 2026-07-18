import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import GameMenu from "../components/GameMenu";

function Menu(){

    const navigate = useNavigate();
    return(
        <motion.div
            className="absolute inset-0 bg-[#050505] w-full h-full flex flex-col items-center p-6 md:p-12 lg:p-16 z-50 overflow-y-auto"
        >
            <motion.button
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay: 0.5}}
                className="absolute top-6 left-6 md:top-10 md:left-10"
                onClick={()=> {navigate('/')}}
            >
                    <ArrowLeft className="w-6 h-6 text-white" />
            </motion.button>
            
            <Title/>
            <GameMenu/>
           
        </motion.div>
    )
}

export default Menu;