import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Arcade() {
  const [showInsertCoin, setShowInsertCoin] = useState(true);
  const navigate = useNavigate();

  useEffect(()=>{

    const interval = setInterval(()=>{
        setShowInsertCoin((e)=>!e)
    },800);

    return () => {clearInterval(interval)}


  },[])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.5 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className=" w-full h-full max-w-2xl 
                            flex flex-col items-center justify-center"
    >
      <div
        className="relative bg-zinc-950 border-zinc-900 
                                w-3/4 max-w-md aspect-[3/4] border-[16px] 
                                rounded-t-3xl rounded-b-lg p-4 md:p-8 shadow-2xl 
                                flex flex-col items-center justify-center"
      >
        <motion.button className="bg-[#0a0a0a] border-zinc-800 
                                border-4 w-full aspect-square 
                                rounded-lg flex items-center justify-center
                                relative overflow-hidden group cursor-pointer
                                shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] transition-shadow
                                focus:outline-none focus:ring-4 focus:ring-zinc-600  "
                        onClick={()=> {navigate('/menu')}}
        
        >
          <span
            className={` text-[10px] md:text-xs tracking-widest 
                                          trasition-opacity duration-300 z-20 
                                          drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] 
                                          ${showInsertCoin ? "opacity-100" : "opacity-0"}`}
          >
            {" "}
            &gt; INSERIR FICHA &lt;
          </span>
          <div
            className="absolute bg-white/5 inset-0 opacity-0 
                                        group-hover:opacity-100 transition-opacity z-0"
          ></div>
        </motion.button>
        <div className="flex gap-4 mt-8 opacity-50">
          <div className=" bg-red-800 w-8 h-8 rounded-full shadow-[inset_0_-4px_0_rgba(0,0,0,0.4)]"></div>
          <div className="w-8 h-8 rounded-full bg-blue-800 shadow-[inset_0_-4px_0_rgba(0,0,0,0.4)]"></div>
        </div>
      </div>
    </motion.div>
  );
}

export default Arcade;
