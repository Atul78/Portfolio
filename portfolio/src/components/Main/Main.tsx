import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import TechnicalSkills from "../Skills/Skills";
import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <Home />
      <TechnicalSkills />
      <Contact />
    </main>
  );
};

export default Main;
