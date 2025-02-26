import "./Skills.css";
import images from "../../constants/images"; // Adjust the path based on your folder structure

const TechnicalSkills = () => {
  return (
    <>
      <div className="skills-main">
        <div className="skills-parent">
          <h1>
            Technical <span className="me">Skills</span>
          </h1>
          <div className="skills">
            <div className="html">
              <img src={images.html} alt="HTML" className="common-img" />
              <p>HTML</p>
            </div>
            <div className="css">
              <img src={images.css} alt="CSS" className="common-img" />
              <p>CSS</p>
            </div>
            <div className="js">
              <img src={images.js} alt="JavaScript" className="common-img" />
              <p>JavaScript</p>
            </div>
            <div className="react">
              <img src={images.react} alt="React" className="common-img" />
              <p>React</p>
            </div>
            <div className="redux">
              <img src={images.redux} alt="Redux" className="common-img" />
              <p>Redux</p>
            </div>
            <div className="bootstrap">
              <img src={images.bootstrap} alt="Bootstrap" className="common-img" />
              <p>Bootstrap</p>
            </div>
            <div className="typescript">
              <img src={images.typescript} alt="TypeScript" className="common-img" />
              <p>TypeScript</p>
            </div>
            <div className="nodejs">
              <img src={images.nodejs} alt="Node.js" className="common-img" />
              <p>Node.js</p>
            </div>
            <div className="firebase">
              <img src={images.firebase} alt="Firebase" className="common-img" />
              <p>Firebase</p>
            </div>
            <div className="git">
              <img src={images.git} alt="GitHub" className="common-img" />
              <p>GitHub</p>
            </div>
            <div className="gitlab">
              <img src={images.gitlab} alt="GitLab" className="common-img" />
              <p>GitLab</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnicalSkills;
