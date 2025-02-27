import { 
  FaLinkedin, FaGithub, FaCode, FaPaintBrush, FaLaptopCode, FaPhone, FaHome, FaTools, FaFolderOpen 
} from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { GiHouse } from "react-icons/gi";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";

const Icons = {
    LinkedIn: (color = "black", size = 24) => <FaLinkedin style={{ color, fontSize: size }} />,
    GitHub: (color = "black", size = 24) => <FaGithub style={{ color, fontSize: size }} />,
    Email: (color = "black", size = 24) => <CgMail style={{ color, fontSize: size }} />,
    Phone: (color = "black", size = 24) => <FaPhone style={{ color, fontSize: size }} />,
    House: (color = "black", size = 24) => <GiHouse style={{ color, fontSize: size }} />,
    Menu: (color = "black", size = 24) => <RxHamburgerMenu style={{ color, fontSize: size }} />,
    Close: (color = "black", size = 24) => <RxCross1 style={{ color, fontSize: size }} />,
    Code: (color = "black", size = 24, className = "") => <FaCode style={{ color, fontSize: size }} className={className} />,
    LaptopCode: (color = "black", size = 24, className = "") => <FaLaptopCode style={{ color, fontSize: size }} className={className} />,
    PaintBrush: (color = "black", size = 24, className = "") => <FaPaintBrush style={{ color, fontSize: size }} className={className} />,
    Home: (color = "black", size = 24) => <FaHome style={{ color, fontSize: size }} />,
    Skills: (color = "black", size = 24) => <FaTools style={{ color, fontSize: size }} />,
    Services: (color = "black", size = 24) => <MdMiscellaneousServices style={{ color, fontSize: size }} />,
    Projects: (color = "black", size = 24) => <FaFolderOpen style={{ color, fontSize: size }} />,
    Contact: (color = "black", size = 24) => <IoMdContacts style={{ color, fontSize: size }} />,
};

export default Icons;
