import Link from 'next/link';
import Image from 'next/image';
import Toggle from './Toggle';

const Nav = ({ handleToggle }) => {
  return (
    <div className="my-9">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 h-full">
          <Image
            alt=""
            src="/bear32.png"
            className="mx-2 object-contain w-full h-full relative"
            width={25}
            height={25}
          />
          <Link href="/">
            <a className="text-xl dark:text-white">Portfolio</a>
          </Link>
        </div>
        <Toggle handleToggle={handleToggle} />
      </div>
    </div>
  );
};

export default Nav;
