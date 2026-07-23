import { motion } from "motion/react";

function TechStack() {
  const skills = [
    "REACT",
    "JAVASCRIPT",
    "HTML5",
    "CSS3",
    "PYTHON",
    "PANDAS",
    "TAILWIND",
    "GIT",
  ];
  return (
    <div className="flex flex-col gap-5">
      <div className="text-[10px] text-cyan-400 tracking-widest flex items-center gap-3">
        TECH ARSENAL
        <div className="h-[1px] flex-1 bg-zinc-800"></div>
      </div>
      <div className="flex flex-wrap gap-2 md:gap-3">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.05 }}
            className="border border-zinc-700 bg-zinc-950 text-zinc-400 px-3 py-2 text-[8px]
                        md:text-[10px] tracking-wider hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-950/30
                        hover:shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-all cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
