
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import Cabinet from "./pages/Cabinet";

function App() {
  // const [open, setOpen] = useState(true);
 
  return (
    <div 
      className="flex flex-col items-center justify-center bg-black text-white w-screen h-screen overflow-hidden font-['Press_Start_2P'] relative"
      style={{fontFamily:  "'Press Start 2P', monospace"}}

    >
      <AnimatePresence>
        <Cabinet/> 
        
      </AnimatePresence> 
    
    </div>
)}

export default App;
