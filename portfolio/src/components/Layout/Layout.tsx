import { ReactNode } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.css"

interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
