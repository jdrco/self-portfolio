import React, { useState } from 'react';

import { BsBoxArrowInUpRight } from 'react-icons/bs';

const Details = ({ innerText }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`w-20 text-xl rounded-xl bg-white/40 border-2 mb-6 sm:mb-0 hover:cursor-pointer
      ${expanded ? 'w-full p-4' : ''}
      ${!expanded ? 'aspect-square flex justify-center items-center' : ''}
      `}
      onClick={handleClick}
    >
      {!expanded && <BsBoxArrowInUpRight className="w-7 h-7 dark:text-black" />}
      {expanded && (
        <>
          <div className="text-black/50">
            {innerText.split('nl').map((line, index) => (
              <div key={index}>
                {line}
                <br />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
