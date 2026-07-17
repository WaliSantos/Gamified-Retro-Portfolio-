
import { AnimatePresence } from "motion/react";

import {  useLocation, useOutlet } from 'react-router-dom';


function App() {
  const location = useLocation(); // Obtém o objeto de localização atual da rota
  const currentOutlet = useOutlet(); // Obtém o componente filho correspondente à rota atual
  return (
    <div 
      className="flex flex-col items-center justify-center
                 bg-black text-white w-screen h-screen 
                 overflow-hidden font-['Press_Start_2P'] relative selection:bg-zinc-800"
      style={{fontFamily:  "'Press Start 2P', monospace"}}

    >
      <AnimatePresence mode="wait">
        <div key={location.pathname} className="w-full h-full flex items-center justify-center">
          {currentOutlet}
        </div>
        
        
      </AnimatePresence> 
    
    </div>
)}

export default App;
