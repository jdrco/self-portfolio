import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="content max-w-xs sm:max-w-2xl pt-[150px] pb-[75px] sm:pt-8 sm:pb-5 flex mx-auto justify-between h-screen flex-col">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
