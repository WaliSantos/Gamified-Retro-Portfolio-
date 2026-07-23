import avatarImg from "../assets/avatar.png";

function Avatar() {
  return (
    <div className="w-full md:w-1/3 flex justify-center ">
      <div
        className="bg-zinc-900/50 w-48 h-48 md:w-full md:max-w-[280px] aspect-square border-2 border-cyan-400
                            shadow-[0_0_20px_rgba(34,211,238,0.3),inset_0_0_20px_rgba(34,211,238,0.1)] flex items-center
                             justify-center p-2 relative overflow-hidden"
      >
        <img
          src= {avatarImg}
          alt="imagem de um homem negro de cabelos pretos"
          className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
        />
      </div>
    </div>
  );
}

export default Avatar;
