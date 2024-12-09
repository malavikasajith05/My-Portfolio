import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex min-h-screen w-full items-center justify-center px-4 py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10">
        {/* Image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src="/image.jpg"
          alt="My photo"
          className="w-[200px] h-[200px] cursor-pointer rounded-full shadow-xl shadow-gray-500 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-amber-900 md:w-[200px]"
        />

        {/* Name */}
        <div className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
          <h1 className="bg-gradient-to-r from-amber-950 to-amber-700 bg-clip-text text-transparent opacity-80 text-4xl font-semibold transition-all duration-300 hover:opacity-100">
            Malavika Sajith
          </h1>
          <h3 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100">
            Web Developer
          </h3>

          {/* Typewriter Effect */}
          <p className="text-sm md:text-base text-pretty text-amber-800">
            <Typewriter
              words={[
                "Welcome to my website!",
                "I build sleek, functional websites.",
                "Let’s create something amazing together!",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1000}
            />
          </p>

          {/* Download Resume Button */}
          <button
            onClick={() => window.open("/resume.pdf", "_blank")}
            className="mt-2 rounded-full bg-amber-700 px-6 py-2 text-white shadow-lg hover:bg-amber-600 hover:shadow-2xl"
          >
             Resume
          </button>
        </div>

        {/* Scroll Down Button */}
        <div className="mt-5">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex items-center justify-center"
          >
            <span className="text-gray-600">↓</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
