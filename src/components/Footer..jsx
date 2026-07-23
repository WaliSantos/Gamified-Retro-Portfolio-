import { Github, Linkedin } from "lucide-react";

function Footer() {
  return (
    <div className="border-zinc-800 border-t mt-8 pt-5 flex flex-col md:flex-row gap-6 justify-end w-full max-w-5xl mx-auto ">
      <a
        href=""
        className="bg-zinc-950 border border-zinc-700 text-zinc-300 px-4 py-3 text-[10px]
                    flex items-center gap-3 hover:bg-zinc-900 hover:text-white hover:border-cyan-400 
                    transition-all hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
      >
        <Linkedin size={14} className="text-cyan-500" />
        LINKEDIN
      </a>
      <a
        href=""
        className="bg-zinc-950 border border-zinc-700 text-zinc-300 px-4 py-3 text-[10px]
                    flex items-center gap-3 hover:bg-zinc-900 hover:text-white hover:border-fuchsia-400 
                    transition-all hover:shadow-[0_0_15px_rgba(232,121,249,0.3)]"
      >
        <Github size={14} className="text-fuchsia-500" />
        GITHUB
      </a>
    </div>
  );
}

export default Footer;
