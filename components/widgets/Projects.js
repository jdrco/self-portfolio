import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';

const Projects = () => {
  return (
    // <div className="bg-black w-full h-full flex justify-center items-center">
    //   <div className="w-4/5 h-4/5 flex flex-col">
    //     <div className="text-white mb-1 sm:mb-2 flex text-xs sm:text-[16px] md:text-lg leading-4 sm:leading-6 sm:pb-1 font-bold">
    //       <p className="">Projects</p>
    //     </div>
    //     <div className="grid grid-rows-4 grid-cols-6 gap-[2px] sm:gap-1">
    //       <div className="square bg-zinc-800 rounded-sm"></div>
    //       <div className="square bg-green-700 rounded-sm"></div>
    //       <div className="square bg-green-400 rounded-sm"></div>
    //       <div className="square bg-green-800 rounded-sm"></div>
    //       <div className="square bg-zinc-800 rounded-sm"></div>
    //       <div className="square bg-green-700 rounded-sm"></div>
    //       <div className="square bg-zinc-800 rounded-sm"></div>
    //       <div className="square bg-zinc-800 rounded-sm"></div>
    //       <div className="square bg-green-600 rounded-sm"></div>
    //       <div className="square bg-zinc-800 rounded-sm"></div>
    //       <div className="square bg-zinc-800 rounded-sm"></div>
    //       <div className="square bg-green-400 rounded-sm"></div>
    //       <div className="square bg-green-400 rounded-sm"></div>
    //       <div className="square bg-green-700 rounded-sm"></div>
    //       <div className="square bg-zinc-800 rounded-sm"></div>
    //       <div className="square bg-zinc-800 rounded-sm"></div>
    //       <div className="square bg-green-800 rounded-sm"></div>
    //       <div className="square bg-zinc-800 rounded-sm"></div>
    //       <div className="square bg-green-700 rounded-sm"></div>
    //       <div className="square bg-zinc-800 rounded-sm"></div>
    //       <div className="square bg-zinc-800 rounded-sm"></div>
    //       <div className="square bg-green-400 rounded-sm"></div>
    //       <div className="square bg-zinc-800 rounded-sm"></div>
    //       <div className="square bg-zinc-800 rounded-sm"></div>
    //     </div>
    //   </div>
    // </div>

    <div className="flex flex-col">
      <Image src="/projects.png" layout="fill" className="object-cover" />
      <div className="absolute top-6 left-6 text-black text-base font-thin sm:text-lg">
        PROJECTS
      </div>
      <Link href="/projects">
        <button className="absolute h-12 w-12 bottom-6 right-6 bg-white bg-opacity-20 backdrop-blur-2xl rounded-full">
          <div className="flex items-center justify-center">
            <HiOutlineArrowNarrowRight />
          </div>
        </button>
      </Link>
    </div>
  );
};

export default Projects;
