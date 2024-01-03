"use client"

import Intro from './components/Intro';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Toggle from './components/Toggle';
import { useState } from 'react';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`w-screen h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="w-full h-full overflow-y-auto flex justify-center bg-white dark:bg-neutral-800 dark:text-white">
        <div className="container h-auto flex flex-col items-center py-20 px-6 md:px-32">
          <Toggle handleToggle={handleToggle} />
          <div className="flex flex-col text-sm leading-6">
            <Intro />
            <Experience />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}
