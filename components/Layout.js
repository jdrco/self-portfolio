import Toggle from './Toggle';
import React, { useState } from 'react';

const Layout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`w-screen h-screen ${
        isDarkMode ? 'dark' : ''
      }`}
    >
      <div className="w-full h-full overflow-y-auto flex justify-center bg-white dark:bg-neutral-800 dark:text-white">
        <div className="container h-auto flex flex-col items-center py-20 px-6 md:px-32">
          <Toggle handleToggle={handleToggle} />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
