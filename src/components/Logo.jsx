import { motion } from "motion/react";


function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute top-11 left-11 flex flex-col gap-2 z-0 "
    >
      <div className="flex flex-col gap-1.5 md:gap-2">
        <span
          className="text-xs md:text-sm tracking-widest
                    text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        >
          Walisson
        </span>
        <span
          className="text-[8px] md:text-[10px] tracking-[0.3em]
                     text-zinc-500"
        >
          Santos
        </span>
      </div>
      <div
        className="w-16 h-1 bg-zinc-800 rounded-full mt-1 
                                border-b border-zinc-700"
      ></div>
    </motion.div>
  );
}

export default Logo;
