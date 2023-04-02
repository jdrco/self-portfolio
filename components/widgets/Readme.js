import Image from 'next/image';
import { ImArrowRight2 } from 'react-icons/im';

import Link from 'next/link';

const Readme = () => {
  return (
    <div className="flex flex-col">
      <Image src="/photo.jpg" layout="fill" className="object-cover" />
      <div className="absolute top-6 left-6 text-black font-thin">README</div>
      <Link href="/about">
        <button className="absolute h-12 w-12 bottom-6 right-6 bg-white bg-opacity-20 backdrop-blur-2xl rounded-full">
          <div className="flex items-center justify-center">
            <ImArrowRight2 />
          </div>
        </button>
      </Link>
    </div>
  );
};

export default Readme;
