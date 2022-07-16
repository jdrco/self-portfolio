import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="pt-2 pb-1 px-0 flex flex-end items-end border-b-[1px] border-black">
      <Link href="/">
        <a className="font-bold text-xl mr-auto">Jared Drueco</a>
      </Link>
      <Link href="/about">
        <a href="" className="pr-3">
          About
        </a>
      </Link>
      <Link href="/experience">
        <a href="">Experience</a>
      </Link>
      <Link href="/projects">
        <a href="" className="pl-3">
          Projects
        </a>
      </Link>
      <Link href="/contact">
        <a href="" className="pl-3">
          Contact
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
