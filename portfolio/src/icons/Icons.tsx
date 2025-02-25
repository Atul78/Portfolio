import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaPhone } from "react-icons/fa6";
import { GiHouse } from "react-icons/gi";

const Icons = {
    LinkedIn: (color = "black", size = 24) => <FaLinkedin style={{ color, fontSize: size }} />,
    GitHub: (color = "black", size = 24) => <FaGithub style={{ color, fontSize: size }} />,
    Email: (color = "black", size = 24) => <CgMail style={{ color, fontSize: size }} />,
    Phone: (color = "black", size = 24) => <FaPhone style={{ color, fontSize: size }} />,
    House: (color = "black", size = 24) => <GiHouse style={{ color, fontSize: size }} />,
  };

export default Icons;
