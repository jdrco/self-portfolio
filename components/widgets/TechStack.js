import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

const TechStack = () => {
  return (
    <div className="flex flex-row bg-white h-full w-full justify-center items-center">
      <div className="relative inline-block w-3/4 h-3/4 bg-white">
        <Image
          src="/techstack.png"
          layout="fill"
          className="object-cover transform rotate-180"
        />
      </div>
      <div className="absolute top-6 left-6 text-black text-xl font-light sm:text-2xl">
        SKILLS
      </div>
      <Link href="/skills">
        <button className="absolute h-12 w-12 bottom-6 right-6 bg-black rounded-full">
          <div className="flex items-center justify-center">
            <HiOutlineArrowNarrowRight className="invert" />
          </div>
        </button>
      </Link>
    </div>
  );
};

export default TechStack;
