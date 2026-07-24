import { motion } from "motion/react";
import logo from "../assets/logo.png";

function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      // className=" md:absolute  relative md:w-48 md:top-8 md:left-8 w-52 z-10 shrink-0  "
      className=" lg:absolute top-8 lg:left-8 w-64 md:w-64 z-10 shrink-0"
    >
      <img
        src={logo}
        alt="imagem de um homem negro de cabelos pretos"
        className="w-full h-full hover:scale-105 transition-all duration-500"
      />
    </motion.div>
  );
}

export default Logo;
