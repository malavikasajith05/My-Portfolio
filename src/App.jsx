import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
/* import Projects from "./components/Projects"; */
import Tech from "./components/Tech";


function App() {
  return <>
  <div class="bg-custom-beige"></div>
  

  <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
    <Navbar />
    <Hero />
    <Tech />
    {/* <Projects /> */}
    <Contact />

  </main>




  </>
    

  
}

export default App;
