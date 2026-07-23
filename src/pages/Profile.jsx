import { motion } from "motion/react";
import Title from "../components/Title";
import ButtonBack from "../components/ButtonBack";
import ProfileSumary from "../components/ProfileSumary";
import Footer from "../components/Footer.";

function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, type: "spring" }}
      exit={{ opacity: 0, x: -50 }}
      className="absolute inset-0 bg-[#050505 ] w-full h-full flex flex-col
                p-6 md:p-8 lg:p-12 z-50 overflow-y-auto mx-auto 
                scrollbar scrollbar-track-black  scrollbar-thumb-cyan-700 hover:scrollbar-thumb-cyan-400  "
    >
        <ButtonBack nav = "/menu">BACK TO MENU</ButtonBack>
        <Title>PLAYER PROFILE</Title>
        <ProfileSumary/>
        <Footer/>
    </motion.div>
  );
}

export default Profile;
