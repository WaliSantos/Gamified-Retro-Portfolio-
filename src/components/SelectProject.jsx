import { motion } from "motion/react";

function SelectProject({
  selectedProjectIndex,
  setSelectedProjectIndex,
  projectsList,
}) {
  return (
    <div className="flex flex-col gap-4 items-center ">
      <h1 className="text-[8px] md:text-[10px] text-zinc-500 tracking-widest animate-pulse">
        SELECT YOUR PROJECT
      </h1>
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-2xl">
        {projectsList.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => setSelectedProjectIndex(idx)}
            className={`relative bg-zinc-900 w-14 h-14 md:w-20 md:h-20 border-2 transition-all cursor-pointer
                                    group flex items-center justify-center
                                    ${
                                      selectedProjectIndex === idx
                                        ? `${p.border} ${p.shadow} scale-110 z-10`
                                        : "border-zinc-800 hover:border-zinc-500 opacity-70 hover:opacity-100"
                                    }`}
          >
            <div
              className={` absolute top-1 left-1 text-[6px] md:text-[8px] ${selectedProjectIndex === idx ? p.color : "text-zinc-600"}`}
            >
              {p.id}
            </div>
            <div className="text-center text-[6px] md:text-[8px] text-zinc-400 mt-2 px-1 break-words w-full truncate">
              {p.title.split(" ")[0]}
            </div>
            {selectedProjectIndex === idx && (
              <motion.div
                layoutId="roster-select"
                className="absolute -inset-2 border-4 border-red-500 z-0"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              ></motion.div>
            )}
            {selectedProjectIndex === idx && (
              <div className="absolute -inset-2 border-4 border-red-500 animate-pulse mix-blend-overlay"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SelectProject;
