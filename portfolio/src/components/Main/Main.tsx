import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import TechnicalSkills from "../Skills/Skills";
import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <Home />
      <TechnicalSkills />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
};

export default Main;
