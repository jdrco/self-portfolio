import Head from 'next/head';
import Link from 'next/link';
import { HiOutlineArrowNarrowRight, HiOutlineDeviceMobile } from 'react-icons/hi';
import { BsFillFilePersonFill, BsFillJournalBookmarkFill, BsPhone } from 'react-icons/bs';
import { BiCurrentLocation } from 'react-icons/bi';
import { FaUniversity } from 'react-icons/fa';
import { TbApi, TbBrandAppleArcade } from 'react-icons/tb';

const Projects = () => {
  return (
    <>
      <Head>
        <title>Jared Drueco | Projects</title>
        <meta name="keywords" content="projects" />
      </Head>
      <div className="w-full h-full flex flex-col sm:flex-row sm:pb-[80px]">
        <div className="sm:w-1/2 border-b-[1px] sm:border-b-0 sm:border-r-[1px] border-black mb-3 sm:mb-0 pb-3 sm:px-3">
          <span className="text-2xl sm:text-3xl">(PROJECTS) </span>
          <span className="text-sm sm:text-base">
            My experience in development and engineering showcases my ability to
            adapt to new technologies and approaches, while demonstrating a
            strong grasp of modern software design principles and techniques.
          </span>
        </div>
        <div className="sm:w-1/2 flex flex-col gap-4 sm:px-4 overflow-y-auto scrollbar pr-1 sm:pr-3 pb-3 sm:pb-0">
          {/* Project card */}
          <div className="bg-black w-full flex p-3 gap-3">
            <div className="w-2/5 h-full">
              <div className="w-full h-full text-4xl bg-lime-200 p-3 aspect-square flex justify-center items-center">
                <BsFillFilePersonFill />
              </div>
            </div>
            <div className="w-3/5 flex flex-col justify-between text-white">
              <div className="w-full h-full">
                PORTFOLIO
                <br />
                <div className="text-xs sm:text-sm font-light leading-tight">
                  PROGRAMMED THIS WEBSITE MYSELF :)
                </div>
                <br />
                <br />
              </div>
              <Link href="https://github.com/jdrco/self-portfolio">
                <a className="underline font-bold text-sm flex flex-row items-center">
                  FULL PROJECT
                  <HiOutlineArrowNarrowRight />
                </a>
              </Link>
            </div>
          </div>
          {/* Project card */}
          <div className="bg-black w-full flex p-3 gap-3">
            <div className="w-2/5 h-full">
              <div className="w-full h-full text-4xl bg-teal-200 p-3 aspect-square flex justify-center items-center">
                <BsPhone />
              </div>
            </div>
            <div className="w-3/5 flex flex-col justify-between text-white">
              <div className="w-full h-full">
                ISA ICard
                <br />
                <span className="text-xs sm:text-sm font-light">
                  REACT NATIVE MOBILE APP
                </span>
                <br />
                <br />
                <br />
              </div>
              <div className="underline font-bold text-sm flex flex-row items-center">
                CLUB PROJECT
              </div>
            </div>
          </div>
          {/* Project card */}
          <div className="bg-black w-full flex p-3 gap-3">
            <div className="w-2/5 h-full">
              <div className="w-full h-full text-3xl bg-amber-200 p-3 aspect-square flex justify-center items-center">
                <BsFillJournalBookmarkFill />
              </div>
            </div>
            <div className="w-3/5 flex flex-col justify-between text-white">
              <div className="w-full h-full">
                JournAI
                <br />
                <span className="text-xs sm:text-sm font-light">NLP APP</span>
                <br />
                <br />
                <br />
              </div>
              <Link href="https://devpost.com/software/journai-8wl03y">
                <a className="underline font-bold text-sm flex flex-row items-center">
                  FULL PROJECT
                  <HiOutlineArrowNarrowRight />
                </a>
              </Link>
            </div>
          </div>
          {/* Project card */}
          <div className="bg-black w-full flex p-3 gap-3">
            <div className="w-2/5 h-full">
              <div className="w-full h-full text-4xl bg-red-200 p-3 aspect-square flex justify-center items-center">
                <BiCurrentLocation />
              </div>
            </div>
            <div className="w-3/5 flex flex-col justify-between text-white">
              <div className="w-full h-full">
                Safe Contact
                <br />
                <span className="text-xs sm:text-sm font-light">
                  GEOLOCATION APP
                </span>
                <br />
                <br />
                <br />
              </div>
              <Link href="https://devpost.com/software/safe-contact">
                <a className="underline font-bold text-sm flex flex-row items-center">
                  FULL PROJECT
                  <HiOutlineArrowNarrowRight />
                </a>
              </Link>
            </div>
          </div>
          {/* Project card */}
          <div className="bg-black w-full flex p-3 gap-3">
            <div className="w-2/5 h-full">
              <div className="w-full h-full text-4xl bg-sky-200 p-3 aspect-square flex justify-center items-center">
                <FaUniversity />
              </div>
            </div>
            <div className="w-3/5 flex flex-col justify-between text-white">
              <div className="w-full h-full">
                Courseberta
                <br />
                <span className="text-xs sm:text-sm font-light">
                  STREAMLINING APP
                </span>
                <br />
                <br />
                <br />
              </div>
              <Link href="https://devpost.com/software/courseberta">
                <a className="underline font-bold text-sm flex flex-row items-center">
                  FULL PROJECT
                  <HiOutlineArrowNarrowRight />
                </a>
              </Link>
            </div>
          </div>
          {/* Project card */}
          <div className="bg-black w-full flex p-3 gap-3">
            <div className="w-2/5 h-full">
              <div className="w-full h-full text-4xl bg-lime-200 p-3 aspect-square flex justify-center items-center">
                <TbApi />
              </div>
            </div>
            <div className="w-3/5 flex flex-col justify-between text-white">
              <div className="w-full h-full">
                Phonebook
                <br />
                <span className="text-xs sm:text-sm font-light">
                  RESTful API
                </span>
                <br />
                <br />
                <br />
              </div>
              <Link href="https://github.com/jdrco/phonebook-server">
                <a className="underline font-bold text-sm flex flex-row items-center">
                  FULL PROJECT
                  <HiOutlineArrowNarrowRight />
                </a>
              </Link>
            </div>
          </div>
          {/* Project card */}
          <div className="bg-black w-full flex p-3 gap-3">
            <div className="w-2/5 h-full">
              <div className="w-full h-full text-4xl bg-orange-200 p-3 aspect-square flex justify-center items-center">
                <TbBrandAppleArcade />
              </div>
            </div>
            <div className="w-3/5 flex flex-col justify-between text-white">
              <div className="w-full h-full">
                Tile Drag
                <br />
                <span className="text-xs sm:text-sm font-light">
                  WEB JS GAME
                </span>
                <br />
                <br />
                <br />
              </div>
              <Link href="https://github.com/jdrco/TileDrag">
                <a className="underline font-bold text-sm flex flex-row items-center">
                  FULL PROJECT
                  <HiOutlineArrowNarrowRight />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
