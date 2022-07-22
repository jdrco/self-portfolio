import { RadialProgress } from "react-daisyui";

const Tech = () => {
  return (
    <div className="bg-gradient-to-r from-[#ddcb55] to-[#e2ce75] h-full flex justify-center items-center">
      <div className="w-[85%] h-[65%]">
        <div className="grid grid-rows-1 grid-cols-4 gap-1 h-full w-full">
          <div className="w-full h-full col-span-1 flex flex-col">
            <div className="w-full h-2/3 flex justify-center items-center">
              <RadialProgress value={70} size="2rem" className="text-white" />
            </div>
          </div>
          <div className="w-full h-full col-span-1">
            <div className="w-full h-2/3 flex justify-center items-center">
              <RadialProgress value={45} size="2rem" className="text-white" />
            </div>
          </div>
          <div className="w-full h-full col-span-1">
            <div className="w-full h-2/3 flex justify-center items-center">
              <RadialProgress value={90} size="2rem" className="text-white" />
            </div>
          </div>
          <div className="w-full h-full col-span-1">
            <div className="w-full h-2/3 flex justify-center items-center">
              <RadialProgress value={69} size="2rem" className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
