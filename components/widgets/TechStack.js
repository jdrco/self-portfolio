import { FaPython } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation, Scrollbar } from "swiper";

const Tech = () => {
  return (
    // <div className="bg-gradient-to-r from-[#FFFFFF] to-[#ececec] h-full overflow-auto p-2">
    <div className="h-full overflow-auto m-2 sm:m-3">
      <div className="grid grid-rows-2 grid-cols-2 gap-1 sm:gap-[6px] h-full mb-1">
        <div className="bg-[#6A8E5D] h-full rounded-md sm:rounded-xl text-white text-[8px]"></div>
        <div className="bg-[#E2C2B8] h-full rounded-md sm:rounded-xl"></div>
        <div className="bg-[#FFDE68] h-full rounded-md sm:rounded-xl"></div>
        <div className="bg-[#F5E3F5] h-full rounded-md sm:rounded-xl"></div>
      </div>
      <div className="grid grid-rows-2 grid-cols-2 gap-1 h-full">
        <div className="bg-[#6A8E5D] h-full rounded-md sm:rounded-xl"></div>
        <div className="bg-[#E2C2B8] h-full rounded-md sm:rounded-xl"></div>
        <div className="bg-[#E2C2B8] h-full rounded-md sm:rounded-xl"></div>
        <div className="bg-[#6A8E5D] h-full rounded-md sm:rounded-xl"></div>
      </div>
      {/* <div className="flex h-1/2 gap-x-1 py-1">
        <div className="bg-[#6A8E5D] w-1/2 h-auto rounded-xl"></div>
        <div className="bg-[#E2C2B8] w-1/2 h-auto rounded-xl"></div>
      </div>
      <div className="flex h-1/2 gap-x-1 pb-1">
        <div className="bg-[#FFDE68] w-1/2 h-auto rounded-xl"></div>
        <div className="bg-[#F5E3F5] w-1/2 h-auto rounded-xl"></div>
      </div>
      <div className="flex h-1/2 gap-x-1 py-1">
        <div className="bg-[#6A8E5D] w-1/2 h-auto rounded-xl"></div>
        <div className="bg-[#E2C2B8] w-1/2 h-auto rounded-xl"></div>
      </div>
      <div className="flex h-1/2 gap-x-1 pb-1 ">
        <div className="bg-[#FFDE68] w-1/2 h-auto rounded-xl"></div>
        <div className="bg-[#F5E3F5] w-1/2 h-auto rounded-xl"></div>
      </div> */}

      {/* <div className="text-white font-bold bg-gradient-to-t from-[#D1C5A6] to-[#D1C5A6] w-full"> */}
      {/* <div className="text-white font-bold  w-full">
        <p className="text-black text-sm sm:text-2xl font-bold px-4 py-[5px] text-center">
          Technologies
        </p>
      </div>
      <div className="h-full w-full px-1">
        <Swiper
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={5}
          slidesPerView={5}
          pagination={{ clickable: true }}
          className="h-full"
        >
          <SwiperSlide className="flex flex-col justify-center items-center pb-1">
            <div className="rounded-lg shadow-md text-white h-1/2 w-[90%] flex flex-col justify-around items-center">
              <FaPython size="1rem" />
              <div className="text-[8px]">70%</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col justify-center items-center pb-1">
            <div className="rounded-lg shadow-md text-white h-1/2 w-[90%] flex flex-col justify-around items-center">
              <SiJavascript size="0.8rem" />
              <div className="text-[8px]">70%</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col justify-center items-center pb-1">
            <div className="rounded-lg shadow-md text-white h-1/2 w-[90%] flex flex-col justify-around items-center">
              <FaPython size="1rem" />
              <div className="text-[8px]">70%</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col justify-center items-center pb-1">
            <div className="rounded-lg shadow-md text-white h-1/2 w-[90%] flex flex-col justify-around items-center">
              <FaPython size="1rem" />
              <div className="text-[8px]">70%</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col justify-center items-center pb-1">
            <div className="rounded-lg shadow-md text-white h-1/2 w-[90%] flex flex-col justify-around items-center">
              <FaPython size="1rem" />
              <div className="text-[8px]">70%</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col justify-center items-center pb-1">
            <div className="rounded-lg shadow-md text-white h-1/2 w-[90%] flex flex-col justify-around items-center">
              <FaPython size="1rem" />
              <div className="text-[8px]">70%</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div> */}
    </div>
  );
};

export default Tech;
