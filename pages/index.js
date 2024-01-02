import Link from 'next/link';
import Intro from '../components/sections/Intro';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';
import Projects from '../components/sections/Projects';

export default function Home() {
  return (
    <div className="flex flex-col text-sm leading-6">
      <Intro />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
