// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const Experience = () => {
  return (
    <div className="flex flex-col justify-center items-center h-96 sm:h-[475px]">
      <div className=" h-full w-full flex flex-col justify-center items-center">
        <div className="w-full h-full">
          <Swiper navigation={true} modules={[Navigation]} className="h-full">
            <SwiperSlide className="flex justify-center items-center">
              <div className="rounded-[14px] bg-gradient-to-l from-rose-300 to-pink-500 h-[45%] sm:h-[50%] md:h-[55%] w-[80%] p-[3px] shadow-md">
                <div className="rounded-[12px] bg-white h-full w-full flex flex-col justify-center items-center">
                  <div className="h-[85%] w-[93%] flex flex-row justify-between">
                    <div className=" h-full w-1/2 flex flex-col justify-between">
                      <div className="bg-blue-300 w-10 h-10 rounded-full"></div>
                      <div className="w-full h-10 flex flex-col justify-end">
                        <div className="leading-3 font-bold text-[13px] sm:text-[16px] sm:pb-1">
                          Geoson Solutions
                        </div>
                        <div className="leading-3 text-[10px] sm:text-[12px] md:text-[13px]">
                          Software Developer Intern
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end items-end p-1 w-1/2 h-full">
                      <div className="bg-teal-500 w-full h-full rounded-[11px] text-white text-[10px] sm:text-[12px] md:text-[13px] leading-3 sm:leading-[14px] px-2 pt-2 pb-1 scroll scrollbar">
                        <div className="w-full h-full flex flex-col justify-start items-center py-1">
                          <div className="h-1/2 w-full flex flex-col justify-end">
                            <div className="border-b-[1px] pb-1 w-full">
                              Airdrie, AB (Remote)
                            </div>
                            <div className="border-b-[1px] py-1 w-full">
                              May 2022 - August 2022
                            </div>
                          </div>
                          <div className="h-1/2 w-full overflow-auto scroll scrollbar">
                            <div className="h-full w-full flex flex-row">
                              <div className="h-full w-auto py-1 mr-1">•</div>
                              <div className="py-1 w-full ">
                                Developed and deployed a contract management app
                                for a CRM/ERP system to help 15000+ users
                                maintain their contracts and invoices within
                                Microsoft’s Dataverse
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center">
              <div className="rounded-[14px] bg-gradient-to-l from-teal-300 to-purple-500 h-[45%] sm:h-[50%] md:h-[55%] w-[80%] p-[3px] shadow-md">
                <div className="rounded-[12px] bg-white h-full w-full flex flex-col justify-center items-center">
                  <div className="h-[85%] w-[93%] flex flex-row justify-between">
                    <div className=" h-full w-1/2 flex flex-col justify-between">
                      <div className="bg-blue-300 w-10 h-10 rounded-full"></div>
                      <div className="w-full h-10 flex flex-col justify-end">
                        <div className="leading-3 font-bold text-[13px] sm:text-[16px] sm:pb-1">
                          UAlberta Future Creators
                        </div>
                        <div className="leading-3 text-[10px] sm:text-[12px] md:text-[13px]">
                          Co-President
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end items-end p-1 w-1/2 h-full">
                      <div className="bg-slate-500 w-full h-full rounded-[11px] text-white text-[10px] sm:text-[12px] md:text-[13px] leading-3 sm:leading-[14px] px-2 pt-2 pb-1 scroll scrollbar">
                        <div className="w-full h-full flex flex-col justify-start items-center py-1">
                          <div className="h-1/2 w-full flex flex-col justify-end">
                            <div className="border-b-[1px] pb-1 w-full">
                              Edmonton, AB
                            </div>
                            <div className="border-b-[1px] py-1 w-full">
                              August 2021 - Present
                            </div>
                          </div>
                          <div className="h-1/2 w-full overflow-auto scroll scrollbar">
                            <div className="h-auto w-full flex flex-row">
                              <div className="h-full w-auto py-1 mr-1">•</div>
                              <div className="py-1 w-full ">
                                Planned and organized STEM-based workshops to
                                mentor 500+ students in grades 7-12 on
                                software/hardware development
                              </div>
                            </div>
                            <div className="h-full w-full flex flex-row">
                              <div className="h-full w-auto py-1 mr-1">•</div>
                              <div className="py-1 w-full ">
                                Handled technical operations to ensure proper
                                mentorship execution and quality project kit
                                deliverables
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Experience;
