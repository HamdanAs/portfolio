import Navbar from "../components/Navbar";
import Hero from "../Section/Hero";
import About from "../Section/About";
import Skills from "../Section/Skills";
import Tools from "../Section/Tools";
import Projects from "../Section/Projects";
import Footer from "../Section/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Tools />
      <Projects />
      <Footer />
    </>
  );
}
