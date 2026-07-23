import ButtonBack from "../components/ButtonBack";
import ListPapers from "../components/ListPapers";
import Title from "../components/Title";
import { motion } from "framer-motion";

function Papers() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, type: "spring" }}
      exit={{ opacity: 0, x: -50 }}
      className="absolute inset-0  bg-[#050505 ] w-full h-full flex flex-col
                p-6 md:p-8 lg:p-12 z-50 overflow-y-auto scrollbar scrollbar-track-black
                scrollbar-thumb-yellow-700  hover:scrollbar-thumb-yellow-500
                 "
    >
      <ButtonBack nav={"/menu"}> Back to Menu</ButtonBack>
      <Title>BONUS STAGE - PAPERS</Title>
      <ListPapers />
    </motion.div>
  );
}

export default Papers;
