import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="max-w-[22rem] sm:max-w-xl md:max-w-5xl flex mx-auto h-screen flex-col absolute inset-0 scroll no-scrollbar">
      <Navbar />
      <div className='h-full'>{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
