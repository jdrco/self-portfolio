import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Link from 'next/link';

const Experience = () => {
  return (
    <div className="h-full flex flex-col p-10">
      <div className="text-3xl font-light sm:text-4xl">
        3RD YEAR UOFA<br></br>SOFTWARE ENGINEERING
      </div>
      <div className="text-sm mt-5 sm:mt-10 leading-4 font-light w-[85%] sm:text-base sm:leading-5">
        I am an aspiring software engineer focused on creating meaningful impact
        through co-op work terms and leadership opportunites
      </div>
      <div className="text-3xl sm:text-4xl font-light mt-5 sm:mt-10">
        MY BACKGROUND
      </div>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 mb-9">
        <div className="sm:w-1/2 pt-1 font-light border-t-[1px] border-gray-400 leading-5">
          <div className="h-full w-full">
            <div className="text-xl sm:text-2xl">EDUCATION</div>
            <div className="text-sm leading-4 sm:text-base sm:leading-5">
              BSc in Software Engineering <br /> Class of 2025
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 flex flex-col pt-1 font-light border-t-[1px] border-gray-400 leading-5">
          <div className="text-xl sm:text-2xl">EXPERIENCE</div>
          <div className="text-sm leading-4 sm:text-base sm:leading-5">
            I have completed 3 of 5 work terms as a Software Developer Co-op
          </div>
        </div>
      </div>
      <Link href="/experience">
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
