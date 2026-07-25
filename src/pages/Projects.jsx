import { motion } from "motion/react";
import ButtonBack from "../components/ButtonBack";
import Title from "../components/Title";
import Display from "../components/Display";
import { useState } from "react";
import SelectProject from "../components/SelectProject";
import taskMenagerImg from "../assets/taskMenager.png";
import arcadePortfolio from "../assets/arcadePortfolio.png";
import { Book } from "lucide-react";
import videoDK from "../assets/DK.mp4"
import artGallery from "../assets/artGallery.png"


function Projects() {
  const projectsList = [
    {
      id: "01",
      title: "TASK MANAGER",
      desc: "O taskManager é um gerenciador front-end interativo com foco em produtividade. Focado em organização, o projeto transforma a rotina do usuário em uma experiência eficiente e controlada ",
      tech: ["REACT", "TAILWIND", "VITE"],
      color: "text-red-500",
      border: "border-red-500",
      scrollBar: "scrollbar-thumb-red-700",
      hoverScrollBar: "hover:scrollbar-thumb-red-500",
      shadow: "shadow-[0_0_15px_rgba(239,68,68,0.6)]",
      image: taskMenagerImg,
      link: "https://task-manager-beryl-phi-39.vercel.app/",
      linkGit: "https://github.com/WaliSantos/Task-Manager",
    },
    {
      id: "02",
      title: "ARCADE PORTFOLIO",
      desc: "O Arcade Portfolio é um portfólio front-end interativo com temática de fliperama. Focado em performance e UX, o projeto transforma a navegação do usuário em uma experiência gamificada e nostálgica.",
      tech: ["REACT", "TAILWIND", "VITE"],
      color: "text-cyan-400",
      border: "border-cyan-400",
      scrollBar: "scrollbar-thumb-cyan-700",
      hoverScrollBar: "hover:scrollbar-thumb-cyan-400",
      shadow: "shadow-[0_0_15px_rgba(34,211,238,0.6)]",
      image: arcadePortfolio,
      link: "https://task-manager-beryl-phi-39.vercel.app/",
      linkGit: "https://github.com/WaliSantos/Gamified-Retro-Portfolio-",
    },
    {
      id: "03",
      title: "BOOKFLOW",
      desc: "O sistema BookFlow consiste no gerenciamento de livros disponíveis em uma biblioteca. Utilizando os padrões Singleton, Command, Observer e Strategy o projeto automatiza a gestão do acervo.",
      tech: ["JAVA", "POO"],
      color: "text-green-400",
      border: "border-green-400",
      scrollBar: "scrollbar-thumb-green-700",
      hoverScrollBar: "hover:scrollbar-thumb-green-400",
      shadow: "shadow-[0_0_15px_rgba(34,197,94,0.6)]",
      icon: Book,
      linkGit: "https://github.com/WaliSantos/BookFlow/tree/main",
    },
    {
      id: "04",
      title: "DONKEY KONG -PROTOTIPO",
      desc: "Releitura do clássico Donkey Kong desenvolvida para a interface Tupy, combinando animações, lógica de jogo e estética retrô para proporcionar uma experiência fiel aos arcades.",
      tech: ["PYTHON", "POO"],
      video: videoDK,
      color: "text-pink-400",
      border: "border-pink-400",
      scrollBar: "scrollbar-thumb-pink-700",
      hoverScrollBar: "hover:scrollbar-thumb-pink-400",
      shadow: "shadow-[0_0_15px_rgba(236,72,153,0.6)]",
      linkGit: "https://github.com/WaliSantos/DonkeyKong/tree/main",
    },
    {
      id: "05",
      title: "Art-Gallery",
      desc: "Galeria interativa de modelos 3D desenvolvida com Three.js, utilizando renderização em tempo real para proporcionar uma experiência imersiva no navegador.",
      tech: ["JAVA SCRIPT", "THREE.JS"],
      image:artGallery,
      color: "text-yellow-400",
      border: "border-yellow-400",
      scrollBar: "scrollbar-thumb-yellow-700",
      hoverScrollBar: "hover:scrollbar-thumb-yellow-400",
      shadow: "shadow-[0_0_15px_rgba(234,179,8,0.6)]",
      linkGit: "https://github.com/WaliSantos/Art-Gallery",
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
      className={`absolute inset-0  bg-[#050505 ] w-full h-full flex flex-col
                p-6 md:p-8 lg:p-12 z-50 overflow-y-auto scrollbar scrollbar-track-black
                ${activeProject.scrollBar} ${activeProject.hoverScrollBar}`}
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
