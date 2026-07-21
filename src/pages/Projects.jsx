import { motion } from "motion/react";
import ButtonBack from "../components/ButtonBack";
import Title from "../components/Title";
import Display from "../components/Display";
import { useState } from "react";
import SelectProject from "../components/SelectProject";
import taskMenagerImg from "../assets/taskMenager.png";

function Projects() {
  const projectsList = [
    {
      id: "01",
      title: "TASK MANAGER",
      desc: "Plataforma completa de vendas com painel administrativo. Derrote o abandono de carrinho com um fluxo de checkout otimizado.",
      tech: ["REACT", "TAILWIND", "VITE"],
      color: "text-red-500",
      border: "border-red-500",
      shadow: "shadow-[0_0_15px_rgba(239,68,68,0.6)]",
      image: taskMenagerImg,
      link: "https://task-manager-beryl-phi-39.vercel.app/",
      linkGit: "https://github.com/WaliSantos/Task-Manager",
    },
    {
      id: "02",
      title: "CYBER DASHBOARD",
      desc: "Matriz de visualização de dados em tempo real. Monitore métricas críticas de sistema com gráficos interativos.",
      tech: ["VUE.JS", "D3.JS", "FIREBASE", "SASS"],
      color: "text-cyan-400",
      border: "border-cyan-400",
      shadow: "shadow-[0_0_15px_rgba(34,211,238,0.6)]",
      image: taskMenagerImg,
      link: "https://task-manager-beryl-phi-39.vercel.app/",
      linkGit: "https://github.com/WaliSantos/Gamified-Retro-Portfolio-",
    },
  ];

  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const activeProject = projectsList[selectedProjectIndex];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, type: "spring" }}
      exit={{ opacity: 0, x: -50 }}
      className="absolute inset-0  bg-[#050505 ] w-full h-full flex flex-col
                p-6 md:p-8 lg:p-12 z-50 overflow-y-auto  "
    >
      <ButtonBack nav="/menu">Back to Menu</ButtonBack>
      <Title>CHOOSE YOUR FIGHTER</Title>
      <div className="flex flex-col gap-6 md:gap-10 max-w-4xl mx-auto w-full flex-1">
        <Display activeProject={activeProject} />
        <SelectProject
          projectsList={projectsList}
          selectedProjectIndex={selectedProjectIndex}
          setSelectedProjectIndex={setSelectedProjectIndex}
        />
      </div>
    </motion.div>
  );
}

export default Projects;
