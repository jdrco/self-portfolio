// widget
const Experience = () => {
  return (
    <div className="bg-gradient-to-t from-rose-200 to-pink-500 h-full flex flex-col">
      <div className="my-2 mx-3">
        <div className="header flex flex-col mb-1">
          <div className="tophalf flex flex-row flex-end items-end w-full">
            <h1 className="text-white font-medium text-[10px] sm:text-base mr-auto">
              Experience
            </h1>
            <div className="engglogo bg-gray-300 rounded-full h-4 w-4 sm:h-5 sm:w-5"></div>
          </div>

          <div className="bottomhalf flex flex-row flex-end items-end w-full">
            <div className="text-white font-light text-xl sm:text-3xl leading-5 sm:leading-6 mr-auto">
              3<span className="text-[8px] sm:text-[10px]">rd year</span>
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
        <div className="experiences h-auto border-t-[1px]">
          <div className="experience text-white text-[10px]">experience</div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
