import Image from "next/image";

const Experience = () => {
  return (
    <div className="bg-gradient-to-t from-rose-300 to-pink-500 h-full flex flex-col">
      <div className="my-2 mx-3 flex flex-col justify-between h-full">
        <div className="header flex flex-col mb-1">
          <div className="tophalf flex flex-row flex-end items-end w-full">
            <h1 className="text-white font-medium text-[10px] sm:text-base mr-auto">
              Experience
            </h1>
            <div className="engglog h-4 w-4 sm:h-6 sm:w-6">
              <Image
                src="/eng.png"
                layout="responsive"
                className="object-contain w-full h-full relative invert"
                width={15}
                height={15}
              />
            </div>
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
          <div className="pt-1 text-white text-[8px] sm:text-sm leading-[9px] border-t-[1px] mb-2 sm:mb-3">
            <div className="flex flex-row flex-end items-end w-full">
              <p className="font-bold mr-auto">InsideDesk</p>
              <p className="">Jan 2023 - Present</p>
            </div>
            <p>Software Developer Co-op</p>
          </div>
          <div className="pt-1 text-white text-[8px] sm:text-sm leading-[9px] border-t-[1px] mb-2 sm:mb-3">
            <div className="flex flex-row flex-end items-end w-full">
              <p className="font-bold mr-auto">Geoson Solutions</p>
              <p className="">May - Dec 2022</p>
            </div>
            <p>Software Developer Co-op</p>
          </div>
          <div className="pt-1 text-white text-[8px] sm:text-sm leading-[9px] border-t-[1px] mb-1">
            <div className="flex flex-row flex-end items-end w-full">
              <p className="font-bold mr-auto">Future Creators</p>
              <p className="">Aug 2021 - Present</p>
            </div>
            <p>Co-President</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
