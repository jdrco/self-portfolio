import Link from 'next/link';
import Image from 'next/image';
import Toggle from './Toggle';

const Nav = ({ handleToggle }) => {
  return (
    <div className="my-12 text-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 h-full ml-2">
          <Image
            alt=""
            src="/bear.png"
            className="mx-2 object-contain w-full h-full relative"
            width={25}
            height={25}
          />
          <Link href="/">
            <a className="text-black font-medium dark:text-white">Portfolio</a>
          </Link>
        </div>
        <Toggle handleToggle={handleToggle} />
      </div>
    </div>
  );
};

export default Nav;
