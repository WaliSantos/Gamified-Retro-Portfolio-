import { motion } from "motion/react";
import Title from "../components/Title";
import GameMenu from "../components/GameMenu";
import ButtonBack from "../components/ButtonBack";

function Menu() {
  return (
    <motion.div className="absolute inset-0 bg-[#050505] w-full h-full flex flex-col items-center p-6 md:p-12 lg:p-16 z-50 ">
      
      <ButtonBack nav = "/">BACK TO ARCADE</ButtonBack>
      <Title>MENU PRINCIPAL - PLAYER 1</Title> 
      <GameMenu />
    </motion.div>
  );
}

export default Menu;
