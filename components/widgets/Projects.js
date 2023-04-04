import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';

const Projects = () => {
  return (
    <div className="flex flex-col">
      <Image src="/projects.png" layout="fill" className="object-cover" />
      <div className="absolute top-6 left-6 text-black text-base font-thin sm:font-light sm:text-lg">
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
