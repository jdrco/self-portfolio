import Head from 'next/head';
import Experience from '../components/widgets/Experience';
import Readme from '../components/widgets/Readme';
import TechStack from '../components/widgets/TechStack';
import Contact from '../components/widgets/Contact';
import Projects from '../components/widgets/Projects';

import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="meat flex flex-col h-screen w-full gap-5 ">
        <div className="flex flex-col sm:flex-row gap-5 w-full">
          <div className="card bg-red-400 w-full sm:w-2/5 h-[30rem]">
            <div className="h-full">
              <Readme />
            </div>
          </div>
          <div className="card bg-gradient-to-br from-rose-100 to-teal-100 w-full sm:w-3/5 sm:h-[30rem]">
            <a className="h-full">
              <Experience />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 w-full">
          <div className="card w-full aspect-square border-2 border-black">
            <a className="h-full">
              <TechStack />
            </a>
          </div>
          <div className="card bg-green-200 w-full aspect-square">
            <a className="h-full">
              <Projects />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 w-full">
          <div className="card h-96 w-full bg-gradient-to-r from-slate-200 to-pink-100 mb-5">
            <Link href="/experience">
              <a className="h-full">{/* <Contact /> */}</a>
            </Link>
          </div>
        </div>

        {/* padding */}
        {/* <div className="flex flex-col sm:flex-row gap-5 w-full">
          <div className="card h-1 w-full bg-white"></div>
        </div> */}
      </div>
    </>
  );
}
