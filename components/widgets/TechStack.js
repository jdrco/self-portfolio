import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaLinux,
  FaDocker,
} from "react-icons/fa";
import {
  SiJavascript,
  SiCplusplus,
  SiMicrosoftsqlserver,
  SiTailwindcss,
  SiExpress,
  SiAzuredevops,
  SiPostman,
  SiVim,
  SiNextdotjs,
} from "react-icons/si";

const Tech = () => {
  return (
    <div className="h- overflow-auto m-2 sm:m-3">
      <div className="grid grid-cols-2 gap-1 sm:gap-[6px] h-[67px] sm:h-[95px] md:h-[119px] overflow-auto scroll scrollbar">
        <div className="bg-[#6A8E5D] min-h-[31.5px] sm:min-h-[44.5px] md:min-h-[56.5px] rounded-md sm:rounded-xl text-white flex flex-col justify-center px-1 text-[8px] sm:text-[10px] text-center font-bold">
          DEV SKILLS
        </div>
        <div className="bg-[#5065b0] min-h-[31.5px] sm:min-h-[44.5px] md:min-h-[56.5px] rounded-md sm:rounded-xl text-white flex flex-col justify-end px-1 sm:px-2">
          <SiCplusplus className="text-sm sm:text-lg" />
          <div className="text-[8px] sm:text-[10px] md:mb-1">C/C++</div>
        </div>
        <div className="bg-[#FFDE68] min-h-[31.5px] sm:min-h-[44.5px] md:min-h-[56.5px] rounded-md sm:rounded-xl text-blue-900 flex flex-col justify-end px-1 sm:px-2">
          <SiJavascript className="text-sm" />
          <div className="text-[8px] sm:text-[10px] md:mb-1">JavaScript</div>
        </div>
        <div className="bg-[#e3e4f5] rounded-md sm:rounded-xl text-purple-900 flex flex-col justify-end px-1 sm:px-2">
          <FaPython className="text-sm sm:text-lg" />
          <div className="text-[8px] sm:text-[10px] md:mb-1">Python</div>
        </div>
        <div className="bg-[#E2C2B8] rounded-md sm:rounded-xl text-rose-900 flex flex-col justify-end px-1 sm:px-2">
          <div className="flex flex-row">
            <FaHtml5 className="text-sm sm:text-lg" />
            <FaCss3Alt className="text-sm sm:text-lg" />
          </div>
          <div className="text-[8px] sm:text-[10px] md:mb-1">HTML/CSS</div>
        </div>
        <div className="bg-[#88d1e7] min-h-[31.5px] sm:min-h-[44.5px] md:min-h-[56.5px] rounded-md sm:rounded-xl text-blue-900 flex flex-col justify-end px-1 sm:px-2">
          <FaReact className="text-sm sm:text-lg" />
          <div className="text-[8px] sm:text-[10px] md:mb-1">React.js</div>
        </div>
        <div className="bg-[#e78888] min-h-[31.5px] sm:min-h-[44.5px] md:min-h-[56.5px] rounded-md sm:rounded-xl text-black flex flex-col justify-end px-1 sm:px-2">
          <SiMicrosoftsqlserver className="text-sm sm:text-lg" />
          <div className="text-[8px] sm:text-[10px] md:mb-1">SQL Server</div>
        </div>
        <div className="bg-[#000000] min-h-[31.5px] sm:min-h-[44.5px] md:min-h-[56.5px] rounded-md sm:rounded-xl text-white flex flex-col justify-end px-1 sm:px-2">
          <SiNextdotjs className="text-sm sm:text-lg" />
          <div className="text-[8px] sm:text-[10px] md:mb-1">Next.js</div>
        </div>
        <div className="bg-[#444495] min-h-[31.5px] sm:min-h-[44.5px] md:min-h-[56.5px] rounded-md sm:rounded-xl text-white flex flex-col justify-end px-1 sm:px-2">
          <SiTailwindcss className="text-sm sm:text-lg" />
          <div className="text-[8px] sm:text-[10px] md:mb-1">Tailwind CSS</div>
        </div>
        <div className="bg-[#e3e4f5] min-h-[31.5px] sm:min-h-[44.5px] md:min-h-[56.5px] rounded-md sm:rounded-xl text-purple-900 flex flex-col justify-end px-1 sm:px-2">
          <FaBootstrap className="text-sm sm:text-lg" />
          <div className="text-[8px] sm:text-[10px] md:mb-1">Bootstrap</div>
        </div>
        <div className="bg-[#bcdfbb] min-h-[31.5px] sm:min-h-[44.5px] md:min-h-[56.5px] rounded-md sm:rounded-xl text-green-900 flex flex-col justify-end px-1 sm:px-2">
          <div className="flex flex-row">
            <FaNodeJs className="text-sm sm:text-lg mr-1" />
            <SiExpress className="text-sm sm:text-lg" />
          </div>
          <div className="text-[8px] sm:text-[10px] md:mb-1">
            Node/Express.js
          </div>
        </div>
        <div className="bg-[#eeb998] min-h-[31.5px] sm:min-h-[44.5px] md:min-h-[56.5px] rounded-md sm:rounded-xl text-orange-700 flex flex-col justify-end px-1 sm:px-2">
          <FaGitAlt className="text-sm sm:text-lg" />
          <div className="text-[8px] sm:text-[10px] md:mb-1">Git</div>
        </div>
        <div className="bg-[#5065b0] min-h-[31.5px] sm:min-h-[44.5px] md:min-h-[56.5px] rounded-md sm:rounded-xl text-white flex flex-col justify-end px-1 sm:px-2">
          <SiAzuredevops className="text-sm sm:text-lg" />
          <div className="text-[8px] sm:text-[10px] md:mb-1">Azure DevOps</div>
        </div>
        <div className="bg-orange-600 min-h-[31.5px] sm:min-h-[44.5px] md:min-h-[56.5px] rounded-md sm:rounded-xl text-white flex flex-col justify-end px-1 sm:px-2">
          <SiPostman className="text-sm sm:text-lg" />
          <div className="text-[8px] sm:text-[10px] md:mb-1">Postman</div>
        </div>
        <div className="bg-gray-700 min-h-[31.5px] sm:min-h-[44.5px] md:min-h-[56.5px] rounded-md sm:rounded-xl text-red-200 flex flex-col justify-end px-1 sm:px-2">
          <FaFigma className="text-sm sm:text-lg" />
          <div className="text-[8px] sm:text-[10px] md:mb-1">Figma</div>
        </div>
        <div className="bg-white border-black border-2 border-solid min-h-[31.5px] sm:min-h-[44.5px] md:min-h-[56.5px] rounded-md sm:rounded-xl text-black flex flex-col justify-end px-1 sm:px-2">
          <FaLinux className="text-sm sm:text-lg" />
          <div className="text-[8px] sm:text-[10px] md:mb-1">Linux</div>
        </div>
        <div className="bg-[#5065b0] min-h-[31.5px] sm:min-h-[44.5px] md:min-h-[56.5px] rounded-md sm:rounded-xl text-white flex flex-col justify-end px-1 sm:px-2">
          <FaDocker className="text-sm sm:text-lg" />
          <div className="text-[8px] sm:text-[10px] md:mb-1">Docker</div>
        </div>
        <div className="bg-[#bcdfbb] min-h-[31.5px] sm:min-h-[44.5px] md:min-h-[56.5px] rounded-md sm:rounded-xl text-green-900 flex flex-col justify-end px-1 sm:px-2">
          <SiVim className="text-sm sm:text-lg" />
          <div className="text-[8px] sm:text-[10px] md:mb-1">Vim</div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
