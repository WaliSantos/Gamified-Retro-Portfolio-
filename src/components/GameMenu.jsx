import { FileText, Gamepad2, Save, User } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function GameMenu() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const navigate = useNavigate();

  const menuItems = [
    {
      id: 1,
      label: "Player 1",
      sub: "Sobre mim",
      icon: User,
      nav: "/profile"
    },
    {
      id: 2,
      label: "Stage Select",
      sub: "Projetos",
      icon: Gamepad2,
      nav: "/projects"
    },
   
    {
      id: 3,
      label: "Bonus Stage",
      sub: "Artigos",
      icon: FileText,
      nav: "/papers"
    },
    {
      id: 4,
      label: "Save Data",
      sub: "Baixar Currículo",
      icon: Save,
      nav: "/"
    },
  ];
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="relative flex flex-col gap-4 w-full max-w-2xl z-20 pb-16"
      onMouseLeave={() => setHoveredItem(null)}
    >
      {menuItems.map((item) => {
        const Icon = item.icon;

        return (
          <li
            key={item.id}
            onMouseEnter={() => setHoveredItem(item.id)}
            className={`flex items-center gap-4 md:gap-6 p-3 md:p-4
                                    cursor-pointer transition-all duration-200
                                    group ${hoveredItem == item.id ? "bg-zinc-900/50 scale-[1.02]" : "opacity-70 hover:opacity-95 "}`}
            onClick={()=>{navigate(item.nav)}}
          >
            <div className="w-6 md:w-8 flex justify-center ">
              {hoveredItem == item.id ? (
                <motion.div
                  layoutId="cursor"
                  className="w-0 h-0 border-y-[6px] md:border-y-[8px] border-y-transparent border-l-[10px]
                                    md:border-l-[12px] border-l-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                />
              ) : (
                <div
                  className="w-0 h-0 border-y-[6px] md:border-y-[8px] border-y-transparent border-l-[10px] 
                        md:border-l-[12px] border-l-transparent"
                ></div>
              )}
            </div>
            <div
              className="flex items-center justify-center bg-zinc-900 w-10 h-10 md:-w-12 md:h-12 text-white
                        rounded shrink-0 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] border border-zinc-800"
            >
              <Icon
                size={20}
                className={`md:w-6 md:h-6
                                        ${
                                          hoveredItem == item.id
                                            ? "drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] text-white"
                                            : "text-zinc-400"
                                        }
                `}
              />
            </div>
            <div className="flex flex-col gap-1.5 md:gap-2">
              <span
                className={`text-[10px] md:text-xs lg:text-sm tracking-widest
                                            ${hoveredItem == item.id ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" : "text-zinc-300"}`}
              >
                {item.label}
              </span>
              <span className="text-[8px] md:text-[10px] lg:text-xs text-zinc-500 tracking-widest">
                ({item.sub})
              </span>
            </div>
          </li>
        );
      })}
    </motion.ul>
  );
}

export default GameMenu;
