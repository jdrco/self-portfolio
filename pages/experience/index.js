const Experience = () => {
  return (
    <div className="flex flex-col justify-center items-center h-96 sm:h-[475px]">
      <div className=" h-full w-[80%] flex flex-col justify-center items-center sm:w-[65%]">
        <div className="rounded-[14px] bg-gradient-to-l from-rose-300 to-pink-500 h-2/5 w-full p-[3px] shadow-md">
          <div className="rounded-[12px] bg-white h-full w-full flex flex-col justify-center items-center">
            <div className="h-[85%] w-[93%] flex flex-row justify-between">
              <div className=" h-full w-1/2 flex flex-col justify-between">
                <div className="bg-blue-300 w-10 h-10 rounded-full"></div>
                <div className="w-full h-10 flex flex-col justify-end">
                  <div className="leading-3 text-sm">Geoson Solutions</div>
                  <div className="leading-3 text-[10px]">
                    Software Developer Intern
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-end p-1 w-1/2 h-full">
                <div className="bg-teal-500 w-full h-full rounded-[11px] overflow-auto text-white text-[12px] leading-3 p-2">
                  <div className="w-full h-full flex flex-col items-center">
                    <div className="border-b-[1px] pb-1">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Vero molestiae optio nisi consequatur, illum a!
                    </div>
                    <div className="border-b-[1px] py-1">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Vero molestiae optio nisi consequatur, illum a!
                    </div>
                    <div className="py-1">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Vero molestiae optio nisi consequatur, illum a!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
