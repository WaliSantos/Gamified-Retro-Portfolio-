import Achievments from "./Achievments";
import Avatar from "./Avatar";
import BioText from "./BioText";
import TechStack from "./TechStack";

function ProfileSumary() {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-16 flex-1 items-start w-full max-w-5xl mx-auto">
      <Avatar />
      <div className="w-full md:w-2/3 flex flex-col gap-8">
        <BioText />
        <TechStack />
        <Achievments/>
      </div>
    </div>
  );
}
export default ProfileSumary;
