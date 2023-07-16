import Link from 'next/link';
import Image from 'next/image';
import Toggle from './Toggle';

const Nav = ({ handleToggle }) => {
  return (
    <div className="my-9">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 h-full">
          <Link href="/">
            <a className="text-xl sm:text-2xl dark:text-white">
              Portfolio - Jared Drueco
            </a>
          </Link>
        </div>
        <Toggle handleToggle={handleToggle} />
      </div>
    </div>
  );
};

export default Nav;
