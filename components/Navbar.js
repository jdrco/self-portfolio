import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center h-full">
          <div className="h-5 w-5 rounded-full bg-red-800 mx-2"></div>
          <Link href="/">
            <a className="text-black font-medium">Home</a>
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <Link href="/about">
              <a
                className={
                  ' px-3 py-2 rounded-md  font-medium' +
                  (currentRoute === '/about' ? ' text-red-800' : ' text-gray-500')
                }
              >
                About
              </a>
            </Link>
            <Link href="/experience">
              <a
                className={
                  ' px-3 py-2 rounded-md  font-medium' +
                  (currentRoute === '/experience' ? ' text-red-800' : ' text-gray-500')
                }
              >
                Experience
              </a>
            </Link>
            <Link href="/projects">
              <a
                className={
                  ' px-3 py-2 rounded-md  font-medium' +
                  (currentRoute === '/projects' ? ' text-red-800' : ' text-gray-500')
                }
              >
                Projects
              </a>
            </Link>
            <Link href="/contact">
              <a
                className={
                  ' px-3 py-2 rounded-md  font-medium' +
                  (currentRoute === '/contact' ? ' text-red-800' : ' text-gray-500')
                }
              >
                Contact
              </a>
            </Link>
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md  focus:outline-none transition duration-150 ease-in-out"
            aria-label="Menu"
            aria-expanded="false"
          >
            <svg
              className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <Link href="/about">
            <a className=" block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
          </Link>
          <Link href="/experience">
            <a className=" block px-3 py-2 rounded-md text-base font-medium">
              Experience
            </a>
          </Link>
          <Link href="/projects">
            <a className="hover:text block px-3 py-2 rounded-md text-base font-medium">
              Projects
            </a>
          </Link>
          <Link href="/contact">
            <a className=" block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
