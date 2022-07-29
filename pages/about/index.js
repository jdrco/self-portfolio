const About = () => {
  const lessThan = "<";
  return (
    <div className="flex flex-col-reverse justify-center items-center h-96 sm:h-[475px]">
      <div className="rounded-lg shadow-lg bg-[#26262f] h-[45%] sm:h-[50%] w-full flex flex-col border-gray-300 border-[1px]">
        <div className="h-[15%] w-full flex flex-row justify-center">
          <div className="h-full w-[96%] flex flex-row items-center">
            <div className="bg-red-500 w-[8px] sm:w-[12px] h-[8px] sm:h-[12px] rounded-full mr-1"></div>
            <div className="bg-yellow-500 w-[8px] sm:w-[12px] h-[8px] sm:h-[12px] rounded-full mr-1"></div>
            <div className="bg-green-500 w-[8px] sm:w-[12px] h-[8px] sm:h-[12px] rounded-full"></div>
          </div>
        </div>
        <div className="h-full w-full p-1 text-white text-xs font-fira leading-4 overflow-auto scroll scrollbar">
          <div className="font-fira text-white">
            <span className="text-green-400 font-fira">jareddrueco@desk:</span>
            <span className="text-blue-400 font-fira">~</span>$ cat {lessThan}{" "}
            about.txt
          </div>
          <div className="font-fira">
            Hi, I'm Jared! <br /> <br />
            Currently, I'm in my third year of software engineering at the
            University of Alberta as a co-op student. <br />
            <br />I enjoy learning new technologies and building applications in
            my free time. Outside of tech, I'll likely be playing basketball,
            chess, or going out for a jog. <br />
            <br />
            Feel free to reach out and chat!
          </div>
          <div className="font-fira text-white">
            <span className="text-green-400 font-fira">jareddrueco@desk:</span>
            <span className="text-blue-400 font-fira">~</span>$
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
