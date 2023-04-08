import Image from 'next/image';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

const Readme = () => {
  return (
    <div className="flex flex-col">
      <Image src="/photo.jpg" layout="fill" className="object-cover object-left-top scale-125 sm:scale-100 sm:object-center" />
      <div className="absolute top-6 left-6 text-black text-xl font-light sm:text-2xl">
        <Typewriter
          options={{
            strings: ["hello, i'm jared!", "this is my portfolio"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      {/* <Link href="/about">
        <button className="absolute h-12 w-12 bottom-6 right-6 bg-white bg-opacity-20 backdrop-blur-2xl rounded-full">
          <div className="flex items-center justify-center">
            <HiOutlineArrowNarrowRight />
          </div>
        </button>
      </Link> */}
    </div>
  );
};

export default Readme;
