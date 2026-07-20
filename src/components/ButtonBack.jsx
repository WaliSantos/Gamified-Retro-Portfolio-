import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

function ButtonBack(props) {
  const navigate = useNavigate();

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5}}
      className="absolute top-6 left-6 md:top-10 md:left-10 text-[10px] text-zinc-500
                    hover:text-white transition-colors uppercase cursor-pointer z-20 flex items-center gap-2"
      onClick={() => {
        navigate(props.nav);
      }}
    >
      <ArrowLeft size={16} /> {props.children}
    </motion.button>
  );
}
export default ButtonBack;
