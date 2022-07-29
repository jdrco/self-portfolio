import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="absolute inset-0">
      <div className="content max-w-sm sm:max-w-xl md:max-w-2xl flex mx-auto justify-between h-screen flex-col">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
