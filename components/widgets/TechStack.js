import { FaPython, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const Tech = () => {
  return (
    <div className="h- overflow-auto m-2 sm:m-3">
      <div className="grid grid-cols-2 gap-1 sm:gap-[6px] h-[67px] sm:h-[95px] md:h-[119px] overflow-auto no-scrollbar">
        <div className="bg-[#6A8E5D] min-h-[31.5px] sm:min-h-[44.5px] md:min-h-[56.5px] rounded-md sm:rounded-xl text-white flex flex-col justify-center px-1 text-[8px] text-center font-bold">
          SKILLS
        </div>
        <div className="bg-[#E2C2B8] rounded-md sm:rounded-xl text-rose-900 flex flex-col justify-end px-1">
          <div className="flex flex-row">
            <FaHtml5 className="text-sm" />
            <FaCss3Alt className="text-sm" />
          </div>
          <div className="text-[8px]">HTML/CSS</div>
        </div>
        <div className="bg-[#FFDE68] min-h-[31.5px] sm:min-h-[44.5px] md:min-h-[56.5px] rounded-md sm:rounded-xl text-blue-900 flex flex-col justify-end px-1">
          <SiJavascript className="text-sm" />
          <div className="text-[8px]">JavaScript</div>
        </div>
        <div className="bg-[#e3e4f5] rounded-md sm:rounded-xl text-purple-900 flex flex-col justify-end px-1">
          <FaPython className="text-sm" />
          <div className="text-[8px]">Python</div>
        </div>
        <div className="bg-[#5065b0] min-h-[31.5px] sm:min-h-[44.5px] md:min-h-[56.5px] rounded-md sm:rounded-xl text-white flex flex-col justify-end px-1">
          <div className="flex flex-row">
            <FaHtml5 className="text-sm" />
            <FaCss3Alt className="text-sm" />
          </div>
          <div className="text-[8px]">C/C++</div>
        </div>
        <div className="bg-[#5065b0] rounded-md sm:rounded-xl text-purple-900 flex flex-col justify-end px-1">
          <FaPython className="text-sm" />
          <div className="text-[8px]">Python</div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
