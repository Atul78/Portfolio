import "./Card.css";
const Card = ({
  image,
  title,
  description,
  link,
}: {
  image: string;
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <>
      <div className="project-card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          View Project
        </a>
      </div>
    </>
  );
};

export default Card;
