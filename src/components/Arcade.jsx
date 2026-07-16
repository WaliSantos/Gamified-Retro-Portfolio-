import { motion } from "motion/react";

function Arcade(){
    return (
        <motion.div
                initial={{opacity:0, scale:0.8}}
                animate={{opacity:1, scale:1}}
                exit={{opacity:0, scale:1.5}}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className=" flex flex-col items-center justify-center w-full h-full max-w-2xl"
            >
                <div className="relative border-[16px] border-zinc-900 bg-zinc-950 rounded-t-3xl rounded-b-lg p-4 md:p-8 shadow-2xl flex flex-col items-center justify-center w-3/4 max-w-md aspect-[3/4]">
                    <motion.button
                    
                        className="w-full aspect-square bg-[#0a0a0a] border-4 border-zinc-800 rounded-lg flex items-center justify-center relative overflow-hidden group cursor-pointer shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] focus:outline-none focus:ring-4 focus:ring-zinc-600 transition-shadow"
                    >
                        <span 
                        className="text-[10px] md:text-xs tracking-widest text-white transition-opacity duration-300 z-20 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                        >
                        &gt; INSERIR FICHA &lt;
                        </span>
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
                    </motion.button>
                    
                    <div className="mt-8 flex gap-4 opacity-50">
                        <div className="w-8 h-8 rounded-full bg-red-800 shadow-[inset_0_-4px_0_rgba(0,0,0,0.4)]"></div>
                        <div className="w-8 h-8 rounded-full bg-blue-800 shadow-[inset_0_-4px_0_rgba(0,0,0,0.4)]"></div>
                    </div>
                    </div>

            </motion.div>
    )
}

export default Arcade;