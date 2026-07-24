import ViewProject from "./ViewProject";
import InfoProject from "./InfoProject";

function Display({ activeProject }) {
  return (
    <div
      className="flex flex-col md:flex-row gap-6 border-2 border-zinc-800
                    bg-zinc-900/30 p-4 md:p-6 min-h-[350px] relative 
        "
    >
      <ViewProject activeProject={activeProject} />

      <InfoProject activeProject={activeProject} />
    </div>
  );
}

export default Display;
