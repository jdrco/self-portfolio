"use client"

import React, { useState } from 'react';
import { LuMoon, LuSun } from 'react-icons/lu';

const Toggle = ({ handleToggle }) => {
  const [isDark, setisDark] = useState(true);

  const switchToggle = () => {
    setisDark(!isDark);
    handleToggle();
  };

  const toggleClass = `fixed right-3 md:left-6 top-3 md:top-6
    flex justify-center items-center
    w-10 h-10 md:w-12 md:h-12 rounded-lg
    bg-[#805AD5] text-white
    dark:bg-[#F6D497] dark:text-neutral-800
    z-50`;

  return (
    <div
      className={toggleClass}
      onClick={switchToggle}
      role="button"
      tabIndex={0}
    >
      {isDark ? <LuMoon size={16} /> : <LuSun size={18} />}
    </div>
  );
};

export default Toggle;
