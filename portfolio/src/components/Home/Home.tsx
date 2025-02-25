import atul from "../../assets/Atul.jpeg";
import Icons from "../../icons/Icons";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-main">
        <div className="main-container">
          <div className="main-image-wrapper">
            <img src={atul} alt="Atul Srivastav" className="main-image" />
          </div>
          <div className="main-content">
            <span className="main-greeting">Hello, I am</span>
            <h1 className="main-title">Atul Kumar Srivastav</h1>
            <p className="main-description">
              I am a{" "}
              <strong className="main-highlight">Front-End Developer</strong>{" "}
              with <strong className="main-highlight">2.5 years</strong> of
              experience specializing in React.js, JavaScript, and Node.js.
              Passionate about building high-performance, user-centric
              applications, I have expertise in Redux, TypeScript, and
              AI-powered automation. With a strong foundation in HTML, CSS, Git,
              and Agile methodologies, I thrive in collaborative environments,
              optimizing workflows and enhancing user experiences. Constantly
              learning and innovating, I aim to develop scalable and efficient
              solutions for modern web applications. 🚀
            </p>
            <div className="icons">
              {Icons.LinkedIn}
              {Icons.GitHub}
              {Icons.Email}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
