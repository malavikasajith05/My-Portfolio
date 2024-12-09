import { useState } from "react";
import { BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoPython, BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";

const Tech = () => {
  const [bioLength, setBioLength] = useState("short");

  const bios = {
    short: "I'm Malavika Sajith, a web developer skilled in React and deep learning technologies, always eager to create impactful digital solutions.",
    medium: "I'm Malavika Sajith, a passionate web developer with a Master’s in Information Technology and hands-on experience in web development and AI-based projects. I thrive in collaborative environments, constantly enhancing my skills to build innovative solutions.",
    long: "Hello! I am  Malavika Sajith, a passionate web developer with hands-on experience in building user-centric web solutions. My journey in tech began with a strong academic foundation, earning a Master’s degree in Information Technology from SRH University Heidelberg and a Bachelor's in Electronics and Communication. My professional experiences, including a graduate engineering role at Cognizant, taught me the importance of collaboration and problem-solving in fast-paced environments. I further honed my skills during a hands-on training program at Kreativestorm, where I gained practical experience and learned to thrive in team settings. With expertise in technologies like React, Node.js, and deep learning frameworks, I continually expand my knowledge to stay up-to-date with the latest trends. From creating dynamic web projects to diving into AI-driven solutions, I am driven by curiosity and a commitment to delivering impactful results. Let’s connect and create something extraordinary together!"
  };

  return (
    <div
      id="tech"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-18">
      <h1 className="text-4xl font-light text-black md:text-6xl">About me</h1>

      <div className="flex gap-4">
        <button
          className={`px-4 py-2 rounded ${
            bioLength === "short" ? "bg-amber-800 text-white" : "bg-gray-200"
          }`}
          onClick={() => setBioLength("short")}
        >
          Short
        </button>
        <button
          className={`px-4 py-2 rounded ${
            bioLength === "medium" ? "bg-amber-800 text-white" : "bg-gray-200"
          }`}
          onClick={() => setBioLength("medium")}
        >
          Medium
        </button>
        <button
          className={`px-4 py-2 rounded ${
            bioLength === "long" ? "bg-amber-800 text-white" : "bg-gray-200"
          }`}
          onClick={() => setBioLength("long")}
        >
          Long
        </button>
      </div>

      <p className="text-sm md:text-base text-pretty text-amber-800">
        {bios[bioLength]}
      </p>

      <h1 className="text-4xl font-light text-black md:text-6xl">Skills</h1>

      <div className="flex flex-wrap items-center justify center gap-10 p-5">
        <div >
          <BiLogoHtml5 className="cursor-pointer text-[80px] text-red-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]" />
          <BiLogoCss3 className="cursor-pointer text-[80px] text-sky-600 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]" />
          <BiLogoJavascript className="cursor-pointer text-[80px] text-yellow-600 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]" />
          <BiLogoReact className="cursor-pointer text-[80px] text-sky-600 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]" />
          <BiLogoTailwindCss className="cursor-pointer text-[80px] text-sky-600 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]" />
          <BiLogoNodejs className="cursor-pointer text-[80px] text-green-600 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]" />
          <BiLogoPython className="cursor-pointer text-[80px] text-sky-600 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]" />
          <BiLogoMongodb className="cursor-pointer text-[80px] text-green-700 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]" />

        </div>

      </div>
    </div>
    
  );


};

export default Tech;
