import { Trophy } from "lucide-react";
import { motion } from "motion/react";

function Achievments() {
  const listAchievments = [
    {
      title: "TECH EXCELLENCE",
      desc: "Melhor Execução Técnica - Hackathon BAIA",
      icon: Trophy,
      color: "text-yellow-400",
      border: "border-yellow-400/50 hover:border-yellow-400",
      shadow: "hover:shadow-[0_0_15px_rgba(250,204,21,0.3)]",
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div className="text-[10px] text-cyan-400 tracking-widest flex items-center gap-3">
        HALL OF FAME
        <div className="h-[1px] flex-1 bg-zinc-800"></div>
      </div>
      <div className="">
        {listAchievments.map((achievement, i) => {
          const Icon = achievement.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className={`flex items-center gap-4 bg-zinc-900/30 border ${achievement.border} p-3 transition-all duration-300 ${achievement.shadow} group cursor-default`}
            >
              <div
                className={` w-10 h-10 flex items-center justify-center shrink-0 ${achievement.color} 
                            drop-shadow-[0_0_8px_currentColor] group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon size={24} />
              </div>
              <div className="flex flex-col gap-1.5">
                <div
                  className={`text-[8px] md:text-[10px] ${achievement.color} tracking-wider `}
                >
                  {achievement.title}
                </div>
                <div className="text-[7px] md:text-[8px] text-zinc-400 leading-snug">
                  {achievement.desc}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Achievments;
