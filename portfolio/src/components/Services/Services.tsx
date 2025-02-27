import Icons from "../../icons/Icons";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-parent" id="services">
      <div className="service-child">
        <div className="service-title">
          <h1>
            <span className="me">S</span>ervices
          </h1>
        </div>
        <div className="service-cards">
          <div className="service-card">
            {Icons.Code("#1e90ff", 40, "service-icon")}
            <h3>Web Development</h3>
            <p>
              As a web developer, I create dynamic and functional websites using
              a combination of front-end and back-end technologies. I specialize
              in building responsive, user-friendly interfaces that enhance the
              user experience. Whether it’s an e-commerce site, a blog, or a
              custom web application, I bring ideas to life through code.
            </p>
          </div>
          <div className="service-card">
            {Icons.LaptopCode("#1e90ff", 40, "service-icon")}
            <h3>UI Development</h3>
            <p>
              As a UI developer, I specialize in creating visually appealing and
              user-friendly interfaces for web applications. I work closely with
              designers and product managers to translate design concepts into
              functional and engaging user interfaces.
            </p>
          </div>
          <div className="service-card">
            {Icons.PaintBrush("#1e90ff", 40, "service-icon")}
            <h3>UI Designing</h3>
            <p>
              UI design is all about aesthetics and usability. As a UI designer,
              I craft visually appealing layouts, choose color schemes, and
              create intuitive navigation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
