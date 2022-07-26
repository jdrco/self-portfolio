import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import About from "./about";
import Experience from "../components/widgets/Experience";
import Readme from "../components/widgets/Readme";
import TechStack from "../components/widgets/TechStack";
import Contact from "../components/widgets/Contact";
import Projects from "../components/widgets/Projects";

export default function Home() {
  return (
    <div className="meat flex items-center flex-col">
      <div className="grid grid-cols-4 grid-rows-3 gap-3 sm:gap-7 w-full">
        <div className="card h-50 row-span-2 col-span-2 square">
          <Readme />
        </div>
        <div className="card h-auto row-span-2 col-span-2 square">
          <Experience />
        </div>
        <div className="card h-auto col-span-2 bg-gradient-to-t from-[#FFFFFF] to-[#FFFFFF] border-solid border-2 border-sky-500">
          <TechStack />
        </div>
        <div className="card h-auto col-span-1 square">
          <Projects />
        </div>
        <div className="card h-auto col-span-1 square">
          <Contact />
        </div>
      </div>
    </div>
  );
}
