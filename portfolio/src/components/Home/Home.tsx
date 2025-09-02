import atul from "../../assets/Atul.jpeg";
import Icons from "../../icons/Icons";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-main" id="home">
        <div className="main-container">
          <div className="main-image-wrapper">
            <img src={atul} alt="Atul Srivastav" className="main-image" />
          </div>
          <div className="main-content">
            <span className="main-greeting">Hello, I am</span>
            <h1 className="main-title">Atul Kumar Srivastav</h1>
            <p className="main-description">
              I am a{" "}
              <strong className="main-highlight">
                Full Stack MERN Developer
              </strong>{" "}
              with <strong className="main-highlight">2.5 years</strong> of
              experience specializing in building scalable web applications
              using
              <strong className="main-highlight">
                MongoDB, Express.js, React.js, and Node.js
              </strong>
              . Passionate about crafting high-performance, user-centric
              solutions, I have expertise in Redux, TypeScript, and modern UI
              libraries. With a solid foundation in HTML, CSS, Git, and Agile
              methodologies, I thrive in collaborative teams, optimizing
              workflows and delivering seamless user experiences. Constantly
              learning and innovating, I aim to develop efficient, reliable, and
              future-ready web applications. 🚀
            </p>
            <div className="icons">
              <a
                href="https://www.linkedin.com/in/atul-kumar-srivastav-48bb741a2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {Icons.LinkedIn("#5858ff", 28)}
              </a>
              <a
                href="https://github.com/Atul78"
                target="_blank"
                rel="noopener noreferrer"
              >
                {Icons.GitHub("#ffb5b5", 28)}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
