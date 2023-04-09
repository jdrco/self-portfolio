import Head from 'next/head';
import Image from 'next/image';
import { GrCheckbox } from 'react-icons/gr';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper';

const Experience = () => {
  return (
    <>
      <Head>
        <title>Jared Drueco | Experience</title>
        <meta name="keywords" content="experience" />
      </Head>
      <div className="w-full h-full flex flex-col pb-6">
        <div className="w-full border-b-[1px] border-black">
          <div className="text-2xl sm:text-3xl">EXPERIENCE [4]</div>
          <div className="w-full flex flex-col sm:flex-row sm:gap-6 py-6 text-xs sm:text-sm">
            <div className="flex flex-row items-center gap-1">
              <GrCheckbox />
              INSIDEDESK
            </div>
            <div className="flex flex-row items-center gap-1">
              <GrCheckbox />
              BLUEPRINT
            </div>
            <div className="flex flex-row items-center gap-1">
              <GrCheckbox />
              GEOSON SOLUTIONS
            </div>
            <div className="flex flex-row items-center gap-1">
              <GrCheckbox />
              FUTURE CREATORS
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row gap-6 py-3 border-b-[1px] border-black">
          <div className="w-1/2 sm:w-1/3">
            <div className="bg-purple-600 px-1 text-white text-xs sm:text-sm">InsideDesk Inc.</div>
          </div>
          <div className="h-full w-1/2 text-xs sm:text-sm">
            <div className="h-full sm:w-1/2 text-xs sm:text-sm">
              BUILT WEB SCRAPING INFRASTRUCTURES TO AUTOMATE REVENUE CYCLE
              MANAGEMENT
              <br />
              <br />
              JAN 2023 - PRESENT
              <br />
              <br />
              <div className="underline">SOFTWARE DEV CO-OP</div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row gap-6 py-3 border-b-[1px] border-black">
          <div className="w-1/2 sm:w-1/3">
            <div className="bg-blue-500 text-white px-1 text-xs sm:text-sm">
              UAlberta Blueprint
            </div>
          </div>
          <div className="h-full w-1/2 text-xs sm:text-sm">
            <div className="h-full sm:w-1/2 text-xs sm:text-sm">
              DEVELOPED FULL STACK WEB AND MOBILE APPLICATIONS FOR NON-PROFIT
              ORGANIZATIONS
              <br />
              <br />
              SEP 2022 - PRESENT
              <br />
              <br />
              <div className="underline">PROJECT DEVELOPER</div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row gap-6 py-3 border-b-[1px] border-black">
          <div className="w-1/2 sm:w-1/3">
            <div className="bg-slate-500 text-white px-1 text-xs sm:text-sm">
              Geoson Solutions Ltd.
            </div>
          </div>
          <div className="h-full w-1/2 text-xs sm:text-sm">
            <div className="h-full sm:w-1/2 text-xs sm:text-sm">
              PROGRAMMED EXTENSIONS AND APPLICATIONS FOR A MICROSOFT CLOUD BASED ERP SYSTEM
              <br />
              <br />
              MAY 2022 - AUG 2022
              <br />
              <br />
              <div className="underline">SOFTWARE DEV CO-OP</div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row gap-6 py-3">
          <div className="w-1/2 sm:w-1/3">
            <div className="bg-yellow-500 text-black px-1 text-xs sm:text-sm">
              UAlberta Future Creators
            </div>
          </div>
          <div className="h-full w-1/2 text-xs sm:text-sm">
            <div className="h-full sm:w-1/2 text-xs sm:text-sm">
              PLANNED AND ORGANIZED STEM-BASED WORKSHOPS TO MENTOR 200+ MENTEES ON HARDWARE/SOFTWARE DEVELOPMENT
              <br />
              <br />
              AUG 2021 - PRESENT
              <br />
              <br />
              <div className="underline">CO-PRESIDENT</div>
              <div className="underline">VP TECHNICAL</div>
              <div className="underline">MENTOR</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
