const Experience = () => {
  return (
    <div className="bg-gradient-to-t from-rose-300 to-pink-500 h-full flex flex-col">
      <div className="my-2 mx-3 flex flex-col justify-between h-full">
        <div className="header flex flex-col mb-1">
          <div className="tophalf flex flex-row flex-end items-end w-full">
            <h1 className="text-white font-medium text-[10px] sm:text-base mr-auto">
              Experience
            </h1>
            <div className="engglogo bg-gray-300 rounded-full h-4 w-4 sm:h-5 sm:w-5"></div>
          </div>

          <div className="bottomhalf flex flex-row flex-end items-end w-full">
            <div className="text-white font-light text-2xl sm:text-3xl leading-5 sm:leading-6 mr-auto">
              3<span className="text-[8px] sm:text-[12px]">rd year</span>
            </div>
            <div className="edu flex flex-col items-end w-auto h-auto">
              <p className="text-white text-[8px] sm:text-xs leading-[8px]">
                UAlberta
              </p>
              <p className="text-white text-[8px] sm:text-xs leading-3">
                Software Engineering
              </p>
            </div>
          </div>
        </div>
        <div className="experiences h-auto">
          <div className="pt-1 text-white text-[8px] sm:text-sm leading-[9px] border-t-[1px] mb-4">
            <div className="flex flex-row flex-end items-end w-full">
              <p className="font-bold mr-auto">Geoson Solutions</p>
              <p className="">MAY - AUG 2022</p>
            </div>
            <p>Software Developer Co-op</p>
            <li>Azure, CI/CD, AL, SQL, Docker, Agile</li>
          </div>
          <div className="pt-1 text-white text-[8px] sm:text-sm leading-[9px] border-t-[1px] mb-1">
            <div className="flex flex-row flex-end items-end w-full">
              <p className="font-bold mr-auto">Future Creators</p>
              <p className="">JAN - AUG 2022</p>
            </div>
            <p>Co-President</p>
            <li>C/C++, Arduino, Unity, C#, Node.js</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
