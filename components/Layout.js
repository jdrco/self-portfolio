import Nav from './Nav';
import React, { useState } from 'react';

const Layout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`main-content w-screen h-screen overflow-x-hidden ${
        isDarkMode ? 'dark' : ''
      }`}
    >
      <div className="w-full h-auto flex justify-center bg-white dark:bg-neutral-800">
        <div className="max-w-sm sm:max-w-screen-md flex flex-col">
          <Nav handleToggle={handleToggle} />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
