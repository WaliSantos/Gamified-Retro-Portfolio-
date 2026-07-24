function ViewProject({activeProject}) {
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
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
      ) : activeProject.image ? (
        <img
          src={activeProject.image}
          alt={`Imagem do projeto ${activeProject.title}`}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
      ) : null}
      <div className="absolute top-2 left-3 text-[8px] text-zinc-50 flex items-center gap-2 ">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
        P1 Select
      </div>
    </a>
  );
}

export default ViewProject;
