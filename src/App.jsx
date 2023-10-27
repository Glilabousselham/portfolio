import { useState } from "react"
import NavBar from "./Components/NavBar"
import HeroSection from "./Sections/HeroSection"
import mainBg from "./assets/main-bg.jpg"
import SkillsSection from "./Sections/SkillsSection";


function App() {

  const [activeSection, setActiveSection] = useState(1);// 1 2 3 4 5 6 




  return (
    <div className="w-screen h-screen relative">
      <img src={mainBg} alt="" className="w-screen h-screen fixed  start-0 end-0 object-cover" />
      <SkillsSection />

      <div className="w-screen h-screen fixed  start-0 end-0 
      bg-gradient-to-t from-[#0000007e] to-black  opacity-90
      "></div>

      <HeroSection active={activeSection == 1} />

    </div>
  )
}

export default App
