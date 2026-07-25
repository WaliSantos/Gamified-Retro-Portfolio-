import { Swords } from "lucide-react";
import { motion } from "motion/react";
import { Github } from "lucide-react";

function InfoProject({activeProject}){
    return(
        <div className="w-full md:w-1/2 flex flex-col gap-6 py-2">
        <div className="flex flex-col gap-2">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={` text-sm md:text-lg leading-relaxed ${activeProject.color} drop-shadow-[0_0_8px_currentColor]`}
          >
            {activeProject.title}
          </motion.h2>
          <div className="h-[1px] w-full bg-zinc-800"></div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className=" text-[9px] md:text-[10px] text-zinc-300 leading-[2] text-justify"
        >
          {activeProject.desc}
        </motion.p>
        <div className="mt-auto  flex flex-col gap-2">
          <div className="mt-auto pt-4 flex flex-col gap-3">
            <div className="text-[8px] text-zinc-500 tracking-widest flex items-center gap-2">
              <Swords size={12} /> COMBAT STATS (TECH SPECS)
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex gap-2 flex-wrap"
            >
              {activeProject.tech.map((t, id) => (
                <span
                  key={id}
                  className={`px-2 py-1.5 bg-zinc-950 border ${activeProject.border} text-[8px] text-zinc-300 cursor-default`}
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-2"
            >
              <a
                href={activeProject.linkGit}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-3 px-4 py-3 bg-zinc-950 border ${activeProject.border} ${activeProject.color} text-[8px] md:text-[10px] hover:bg-zinc-900 transition-all ${activeProject.shadow} hover:scale-[1.02] cursor-pointer`}
              >
                <Github size={14} />
                ACCESS SOURCE CODE
              </a>
            </motion.div>
        </div>
      </div>
    )
}

export default InfoProject;