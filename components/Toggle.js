import React, { useState } from 'react';
import { LuMoon, LuSun } from "react-icons/lu";

const Toggle = ({ handleToggle }) => {
  const [isDark, setisDark] = useState(true);

  const switchToggle = () => {
    setisDark(!isDark);
    handleToggle();
  };

  const toggleClass = `fixed right-3 sm:right-6 top-3 sm:top-6
    flex justify-center items-center
    w-10 h-10 rounded-lg
    bg-[#805AD5] text-white
    dark:bg-[#F6D497] dark:text-neutral-800`;

  return (
    <div
      className={toggleClass}
      onClick={switchToggle}
      role="button"
      tabIndex={0}
    >
      {isDark ? <LuMoon size={14} /> : <LuSun size={16} />}
    </div>
  );
};

export default Toggle;
