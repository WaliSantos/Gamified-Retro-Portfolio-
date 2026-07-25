import { motion } from "motion/react";

function ViewProject({ activeProject }) {
  const Icon = activeProject.icon;
  return (
    <a
      href={activeProject.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full md:w-1/2 aspect-video md:aspect-square lg:aspect-[4/3]
                    bg-zinc-950 border-2 ${activeProject.border} ${activeProject.shadow} 
                    relative flex items-center justify-center overflow-hidden transition-colors
                    duration-300  group cursor-pointer`}
    >
      {activeProject.video ? (
        <video
          src={activeProject.video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-fill opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
      ) : activeProject.image ? (
        <img
          src={activeProject.image}
          alt={`Imagem do projeto ${activeProject.title}`}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="flex flex-col items-center gap-4 z-10"
        >
          <Icon
            className={`w-20 h-20 ${activeProject.color} drop-shadow-[0_0_10px_currentColor]`}
          />
          <div className="text-[10px] text-zinc-500 tracking-[0.3em]">
            {activeProject.title}
          </div>
        </motion.div>
      )}
      <div className="absolute top-2 left-3 text-[8px] text-zinc-50 flex items-center gap-2 ">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
        P1 Select
      </div>
    </a>
  );
}

export default ViewProject;
