import { ExternalLink } from "lucide-react";

function ListPapers() {
  const papers = [
    {
      id: 1,
      date: "26.05.2025",
      title:
        "Computer Vision-based YOLO11 for automated damage assessment of public building roofs supporting maintenance management",
      nav: "https://docs.lib.purdue.edu/cgi/viewcontent.cgi?article=2102&context=cib-conferences",
    },
    {
      id: 2,
      date: "26.05.2025",
      title:
        "Computer Vision-based YOLO11 for automated damage assessment of public building roofs supporting maintenance management",
      nav: "/",
    },
  ];
  return (
    <ul className="flex flex-col gap-4 w-full">
      {papers.map((paper) => (
        <li key={paper.id}>
          <a
            href={paper.nav}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 p-4 md:p-6 border border-zinc-800 bg-zinc-950/50
                     hover:bg-zinc-900 hover:border-yellow-500/50 transition-all cursor-pointer group max-w-4xl mx-auto"
          >
            <div
              className="text-[10px] text-yellow-500 tracking-widest shrink-0 w-32 drop-shadow-[0_0_5px_rgba(234,179,8,0.4)] 
                        group-hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]"
            >
              {paper.date}
            </div>
            <div className="text-[10px] md:text-xs text-zinc-300 group-hover:text-white flex-1 leading-relaxed">
              {paper.title}
            </div>
            <div className="text-zinc-600 group-hover:text-yellow-500 transition-colors hidden md:block">
              <ExternalLink size={16} />
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default ListPapers;
