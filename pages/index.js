import Experience from "../components/widgets/Experience";
import Readme from "../components/widgets/Readme";
import TechStack from "../components/widgets/TechStack";
import Contact from "../components/widgets/Contact";
import Projects from "../components/widgets/Projects";

import Link from "next/link";

export default function Home() {
  return (
    <div className="meat flex items-center flex-col">
      <div className="grid grid-cols-4 grid-rows-3 gap-3 sm:gap-7 w-full">
        <div className="card h-50 row-span-2 col-span-2 square">
          <Link href="/about">
            <a className="h-full">
              <Readme />
            </a>
          </Link>
        </div>
        <div className="card h-auto row-span-2 col-span-2 square">
          <Link href="/experience">
            <a className="h-full">
              <Experience />
            </a>
          </Link>
        </div>
        <div className="card h-auto col-span-2 bg-gradient-to-t from-[#FFFFFF] to-[#FFFFFF] border-solid border-2 border-sky-500">
          <TechStack />
        </div>
        <div className="card h-auto col-span-1 square">
          <Link href="/projects">
            <a className="h-full">
              <Projects />
            </a>
          </Link>
        </div>
        <div className="card h-auto col-span-1 square">
          <Link href="/connect">
            <a className="h-full">
              <Contact />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
