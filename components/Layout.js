import Navbar from "./Navbar";
import { useState, useEffect } from "react";

const Layout = ({ children }) => {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    function handleResize() {
      setWindowHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navbarHeight = 80; // Set your navbar height here
  const bodyHeight = windowHeight - navbarHeight;

  return (
    <div className="max-w-[22rem] sm:max-w-xl md:max-w-5xl flex mx-auto h-screen flex-col absolute inset-0 scroll no-scrollbar overflow-x-hidden">
      <Navbar />
      <div className="flex-1" style={{ height: bodyHeight }}>
        {children}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
