import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    function handleResize() {
      setWindowHeight(window.innerHeight);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navbarHeight = 80; // Set your navbar height here
  const bodyHeight = windowHeight - navbarHeight;
  console.log(bodyHeight);

  return (
    <div className="max-w-[22rem] sm:max-w-xl md:max-w-5xl flex mx-auto h-screen flex-col absolute inset-0 scroll no-scrollbar">
      <Navbar />
      <div className="h-full flex-1" style={{ height: bodyHeight }}>
        {children}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
