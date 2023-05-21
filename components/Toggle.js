import React, { useState } from 'react';

const Toggle = ({ handleToggle }) => {
  const [isChecked, setIsChecked] = useState(true);

  const switchToggle = () => {
    setIsChecked(!isChecked);
    handleToggle();
  };

  const toggleClasses = `relative inline-block w-12 h-7 rounded-full bg-gray-300 focus:outline-none ${
    isChecked ? 'bg-yellow-400' : ''
  }`;

  const handleClasses = `absolute translate-y-1 w-5 h-5 transform bg-white rounded-full transition-transform ${
    isChecked ? 'translate-x-6' : 'translate-x-1'
  }`;

  return (
    <div
      className={toggleClasses}
      onClick={switchToggle}
      role="button"
      tabIndex={0}
    >
      <div className={handleClasses}></div>
    </div>
  );
};

export default Toggle;
