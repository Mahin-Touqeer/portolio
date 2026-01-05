import Contact from "./Contact";
import Experience from "./Experience";
import Hero from "./Hero";
import Projects from "./Projects.jsx";
import Skills from "./Skills";
import ServicesSection from "./ServicesSection";

function Home() {
  return (
    <div className="min-h-screen w-screen overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Services and Statistics Section */}
      <ServicesSection />

      <div className="bg-[#f8f7f1] my-24">
        <Experience />
      </div>

      <Skills />

      <div className=" my-24">
        <Projects />
      </div>
      <Contact />
    </div>
  );
}

export default Home;
