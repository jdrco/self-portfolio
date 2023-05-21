import Nav from './Nav';
import React, { useState } from 'react';

const Layout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`main-content ${isDarkMode ? 'dark' : ''}`}>
      <div className="w-screen h-screen bg-white dark:bg-stone-900">
        <div className="w-1/2 mx-auto flex flex-col scroll no-scrollbar overflow-x-hidden">
          <Nav handleToggle={handleToggle} />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
