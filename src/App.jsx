import { useState } from "react";
import Hero from "./Section/Hero";
import About from "./Section/About";
import Skills from "./Section/Skills";
import Tools from "./Section/Tools";
import Projects from "./Section/Projects";
import Footer from "./Section/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Tools />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
