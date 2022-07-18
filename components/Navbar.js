import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="pt-2 pb-1 px-0 flex flex-col sm:flex-row sm:flex-end items-end border-b-[1px] border-black">
      <Link href="/">
        <a className="font-medium text-xl sm:text-xl mx-auto sm:mx-0 sm:mr-auto">
          <div className="text-white py-1 px-3 rounded-lg bg-black text-[16px] sm:text-md">
            Jared Drueco
          </div>
        </a>
      </Link>
      <div className="block justify-center mx-auto sm:mx-0">
        <Link href="/about/">
          <a href="" className="pr-3 text-sm sm:text-md 2xl:text-lg">
            About
          </a>
        </Link>
        <Link href="/experience/">
          <a href="" className=" text-sm sm:text-md 2xl:text-lg">
            Experience
          </a>
        </Link>
        <Link href="/projects/">
          <a href="" className="pl-3 text-sm sm:text-md 2xl:text-lg">
            Projects
          </a>
        </Link>
        <Link href="/contact/">
          <a href="" className="pl-3 text-sm sm:text-md 2xl:text-lg">
            Contact
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
