import Card from "../Card/Card";
import QKart from "../../assets/Qkart.png";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "QKart - E-Commerce App",
      description:
        "Full-stack MERN app with authentication, product catalog, and cart system.",
      image: QKart,
      link: "https://atulsrivastav768-me-qkart-frontend.vercel.app/",
    },
  ];

  return (
    <div className="projects-container" id="projects">
      <div className="project-card-parent">
        <h1 className="section-title">
          <span className="me">P</span>rojects
        </h1>
        <div className="project-cards">
          {projects.map((project, index) => (
            <Card
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
