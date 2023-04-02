import Image from 'next/image';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Link from 'next/link';

const Experience = () => {
  return (
    <div className="h-full flex flex-col p-8">
      <div className="text-3xl font-light sm:text-4xl">
        3RD YEAR <br></br>UOFA SOFTWARE ENGINEERING
      </div>
      <div className="text-base mt-5 leading-5 font-light w-[85%] sm:text-lg sm:leading-6">
        I am an aspiring software engineer focused on creating meaningful impact
        through co-op work terms and leadership opportunites
      </div>
      <div className="text-2xl mt-5">BACKGROUND</div>
      <div className="flex flex-col">
        <div className="w-1/2 flex pt-1 font-light border-t-[1px] border-black leading-5">
          <div className="h-full w-1/2">InsideDesk</div>
          <div className="h-full w-1/2 text-right">Software Dev Co-op</div>
        </div>
      </div>
      <Link href="/about">
        <button className="absolute h-12 w-12 bottom-6 right-6 bg-black bg-opacity-50 backdrop-blur-2xl rounded-full">
          <div className="flex items-center justify-center invert">
            <HiOutlineArrowNarrowRight />
          </div>
        </button>
      </Link>
    </div>
  );
};

export default Experience;
