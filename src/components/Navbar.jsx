import { useState } from "react"
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsLinkedin,} from "react-icons/bs"


const Navbar = () => {

    const[isOpen, setIsOpen] = useState(false);

    const menuOpen = () => {
        setIsOpen(!isOpen);
    }
  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between px-16 py-5 text-black bg-transparent-/100 backdrop-blur-lg border-b border-white/20 shadow-lg">
        <a href="#home" className="bg-[url('/checkered_pattern.png')] bg-clip-text text-transparent opacity-80 text-3xl font-semibold ">Malavika Sajith</a>

        <ul className="hidden md:flex gap-10 ">
            <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                <li>Home</li>
            </a>
            <a href="#skills" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                <li>Skills</li>
            </a>

            <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                <li>Projects</li>
            </a>

            <a href="contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                <li>Contact</li>
            </a>


        </ul>

        <ul className="hidden md:flex gap-10 ">
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
                <BsLinkedin />
            </li>

            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-black-400 hover:opacity-100">
                <BsGithub />
            </li>
            
            

        </ul>


        {isOpen ? (
            <BiX className="block md:hidden text-4xl" onClick={menuOpen}/>
        ) : (
            <BiMenu className="block md:hidden text-4xl"  onClick={menuOpen}/>
        )}

        {isOpen && (
            <div className={`fixed right-0 top-[84px] z-50 flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-gray-800 bg-amber-800 p-12 text-white ${isOpen ? "block" : "hidden"}`}>


                <ul className="flex flex-col gap-8">
                    <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                        <li>Home</li>
                    </a>
                    
                    <a href="#skills" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                        <li>Skills</li>
                    </a>
                    
                    <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                        <li>Projects</li>
                    </a>
                    
                    <a href="contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                        <li>Contact</li>
                    </a>

                </ul>

                <ul className="flex flex-wrap gap-5">
                    <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
                        <BsLinkedin />
                    </li>
                    
                    <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-black-400 hover:opacity-100">
                        <BsGithub />
                    </li>
                </ul>

            </div>
        )}



    </nav>
  )
}

export default Navbar