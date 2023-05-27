/* eslint-disable @next/next/no-img-element */
import Details from '../components/Details';
import Link from 'next/link';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import {
  BsFillFilePersonFill,
  BsFillJournalBookmarkFill,
  BsPhone,
} from 'react-icons/bs';
import { BiCurrentLocation } from 'react-icons/bi';
import { AiOutlineAlert } from 'react-icons/ai';
import { FaUniversity } from 'react-icons/fa';
import { TbApi, TbBrandAppleArcade } from 'react-icons/tb';

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col dark:text-white">
      <div className="w-full flex flex-col items-start">
        <div className="w-28 h-36 rounded-3xl overflow-hidden">
          <img
            className="object-cover h-full w-full"
            src="/pf.JPG"
            alt="Avatar"
          ></img>
        </div>
        <div className="text-xl sm:text-2xl my-12 text-left sm:w-4/5">
          Hey, I&apos;m Jared!{' '}
          <span className="text-black/50 dark:text-white/40">
            - 4th year software engineering student at UofA. Passionate about
            building impactful products. Really into UI/UX development :)
          </span>
        </div>
      </div>
      <div className="relative w-full overflow-visible my-12">
        <div className="blob2 absolute aspect-square w-32 sm:w-72 -top-4 sm:-top-10 -right-10 rounded-full -z-0"></div>
        <div className="blob1 absolute aspect-square w-24 sm:w-56 -bottom-6 sm:-bottom-10 -left-10 rounded-full -z-0"></div>
        <div className="relative">
          <div className="text-xl">Work Experience</div>
          <div className="w-full h-auto flex flex-col sm:flex-row gap-4 sm:gap-6 mt-2">
            <div className="w-full sm:w-1/2 sm:aspect-square backdrop-blur-md bg-gray-300/50 rounded-3xl border-2 flex flex-col justify-between p-4">
              <Details
                innerText={`Developing robust web automation infrastructures to streamline revenue cycle management

                nl nl
                Jan 2023 - Present
              `}
              />
              <div className="text-xl sm:text-2xl">
                InsideDesk Inc
                <div className="text-black/50">Software Developer Intern</div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 sm:aspect-square backdrop-blur-md bg-gray-300/50 rounded-3xl border-2 flex flex-col justify-between p-4">
              <Details
                innerText={`Programmed applications and extensions for cloud-based ERP and CRM systems
                nl nl
                May 2022 - Aug 2022
              `}
              />
              <div className="text-xl sm:text-2xl">
                Geoson Solutions
                <div className="text-black/50">Software Developer Intern</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full overflow-visible my-12">
        <div className="blob3 absolute aspect-square w-56 sm:w-72 top-40 sm:top-20 right-20 sm:right-60 rounded-full -z-0"></div>
        <div className="relative">
          <div className="text-xl">Volunteer Experience</div>
          <div className="w-full h-auto flex flex-col sm:flex-row gap-4 sm:gap-6 mt-2">
            <div className="w-full sm:w-1/2 sm:aspect-square backdrop-blur-md bg-gray-300/50 rounded-3xl border-2 flex flex-col justify-between p-4">
              <Details
                innerText={`Building full stack web and mobile applications for non-profit organizations
                nl nl
                Sep 2022 - Present
              `}
              />
              <div className="text-xl sm:text-2xl">
                UofA Blueprint Chapter
                <div className="text-black/50">VP of Engineering</div>
                <div className="text-black/50">Project Developer</div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 sm:aspect-square backdrop-blur-md bg-gray-300/50 rounded-3xl border-2 flex flex-col justify-between p-4">
              <Details
                innerText={`Providing STEM-based workshops mentoring 200+ youth on software/hardware development
                nl nl
                Aug 2021 - Present
              `}
              />
              <div className="text-xl sm:text-2xl">
                UofA Future Creators
                <div className="text-black/50">Co-President</div>
                <div className="text-black/50">VP of Technology</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full overflow-visible my-12">
        <div className="blob4 absolute h-5/6 w-11/12 -bottom-10 -left-10 -z-0 opacity-50"></div>
        <div className="relative">
          <div className="text-xl">Project Experience</div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
            {/* Project cards */}
            <div className="bg-white text-black/50 w-full flex flex-col justify-between aspect-square rounded-xl border-2 p-1">
              <div className="h-full flex flex-col justify-between text-xs">
                <div className="flex justify-between">
                  <Link href="https://medium.com/@uofablueprint/international-students-association-project-page-1f65f79562f0">
                    <a
                      target="_blank"
                      className="underline flex items-center hover:cursor-pointer"
                    >
                      ISA ICard
                      <HiOutlineArrowNarrowRight />
                    </a>
                  </Link>
                  <div>Ongoing</div>
                </div>
                <div className="text-black text-4xl w-full flex justify-center items-center">
                  <BsPhone />
                </div>
                <div>React Native mobile app</div>
              </div>
            </div>

            <div className="bg-white text-black/50 w-full flex flex-col justify-between aspect-square rounded-xl border-2 p-1">
              <div className="h-full flex flex-col justify-between text-xs">
                <div className="flex justify-between">
                  <Link href="https://github.com/jdrco/APIC2023">
                    <a
                      target="_blank"
                      className="underline flex items-center hover:cursor-pointer"
                    >
                      OutageML <HiOutlineArrowNarrowRight />
                    </a>
                  </Link>
                  <div>04/2023</div>
                </div>
                <div className="text-black text-5xl w-full flex justify-center items-center">
                  <AiOutlineAlert />
                </div>
                <div>
                  <div>[Hackathon Winner]</div>
                  <div>Outage response tracker</div>
                </div>
              </div>
            </div>

            <div className="bg-white text-black/50 w-full flex flex-col justify-between aspect-square rounded-xl border-2 p-1">
              <div className="h-full flex flex-col justify-between text-xs">
                <div className="flex justify-between">
                  <Link href="https://devpost.com/software/journai-8wl03y">
                    <a
                      target="_blank"
                      className="underline flex items-center hover:cursor-pointer"
                    >
                      JournAI
                      <HiOutlineArrowNarrowRight />
                    </a>
                  </Link>
                  <div>01/2023</div>
                </div>
                <div className="text-black text-4xl w-full flex justify-center items-center">
                  <BsFillJournalBookmarkFill />
                </div>
                <div>Journal app using NLP</div>
              </div>
            </div>

            <div className="bg-white text-black/50 w-full flex flex-col justify-between aspect-square rounded-xl border-2 p-1">
              <div className="h-full flex flex-col justify-between text-xs">
                <div className="flex justify-between">
                  <Link href="https://github.com/jdrco/self-portfolio">
                    <a
                      target="_blank"
                      className="underline flex items-center hover:cursor-pointer"
                    >
                      Web Portfolio
                      <HiOutlineArrowNarrowRight />
                    </a>
                  </Link>
                  <div>08/2022</div>
                </div>
                <div className="text-black text-4xl w-full flex justify-center items-center">
                  <BsFillFilePersonFill />
                </div>
                <div>The website you&apos;re on :p</div>
              </div>
            </div>

            <div className="bg-white text-black/50 w-full flex flex-col justify-between aspect-square rounded-xl border-2 p-1">
              <div className="h-full flex flex-col justify-between text-xs">
                <div className="flex justify-between">
                  <Link href="https://devpost.com/software/safe-contact">
                    <a
                      target="_blank"
                      className="underline flex items-center hover:cursor-pointer"
                    >
                      Safe Contact
                      <HiOutlineArrowNarrowRight />
                    </a>
                  </Link>
                  <div>08/2022</div>
                </div>
                <div className="text-black text-4xl w-full flex justify-center items-center">
                  <BiCurrentLocation />
                </div>
                <div>
                  <div>[Hackathon Winner]</div>
                  <div>Monitoring app / Dashboard</div>
                </div>
              </div>
            </div>

            <div className="bg-white text-black/50 w-full flex flex-col justify-between aspect-square rounded-xl border-2 p-1">
              <div className="h-full flex flex-col justify-between text-xs">
                <div className="flex justify-between">
                  <Link href="https://github.com/jdrco/phonebook-server">
                    <a
                      target="_blank"
                      className="underline flex items-center hover:cursor-pointer"
                    >
                      Phone Book API
                      <HiOutlineArrowNarrowRight />
                    </a>
                  </Link>
                  <div>06/2022</div>
                </div>
                <div className="text-black text-4xl w-full flex justify-center items-center">
                  <TbApi />
                </div>
                <div>RESTful API</div>
              </div>
            </div>

            <div className="bg-white text-black/50 w-full flex flex-col justify-between aspect-square rounded-xl border-2 p-1">
              <div className="h-full flex flex-col justify-between text-xs">
                <div className="flex justify-between">
                  <Link href="https://devpost.com/software/courseberta">
                    <a
                      target="_blank"
                      className="underline flex items-center hover:cursor-pointer"
                    >
                      Courseberta
                      <HiOutlineArrowNarrowRight />
                    </a>
                  </Link>
                  <div>01/2022</div>
                </div>
                <div className="text-black text-4xl w-full flex justify-center items-center">
                  <FaUniversity />
                </div>
                <div>Streamlining university info </div>
              </div>
            </div>

            <div className="bg-white text-black/50 w-full flex flex-col justify-between aspect-square rounded-xl border-2 p-1">
              <div className="h-full flex flex-col justify-between text-xs">
                <div className="flex justify-between">
                  <Link href="https://github.com/jdrco/TileDrag">
                    <a
                      target="_blank"
                      className="underline flex items-center hover:cursor-pointer"
                    >
                      Tile Drag
                      <HiOutlineArrowNarrowRight />
                    </a>
                  </Link>
                  <div>08/2021</div>
                </div>
                <div className="text-black text-4xl w-full flex justify-center items-center">
                  <TbBrandAppleArcade />
                </div>
                <div>JavaScript arcade game</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full overflow-visible my-12">
        <div className="relative">
          <div className="text-xl">Technical Skills</div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 mt-2 text-xs">
            <div className="w-full aspect-square sm:border-b-2 p-2">
              <div>Program Languages</div>
              <div className="text-black/50 dark:text-white/40">
                C
                <br /> C++ <br />
                Python <br /> JavaScript <br /> TypeScript <br /> Java
              </div>
            </div>
            <div className="w-full aspect-square sm:border-b-2 p-2">
              <div>Frontend Technologies</div>
              <div className="text-black/50 dark:text-white/40">
                HTML
                <br />
                CSS
                <br />
                React.js
                <br />
                Next.js
                <br />
                React Native
                <br />
                Tailwind CSS
                <br />
                Figma
                <br />
                Photoshop
              </div>
            </div>
            <div className="w-full aspect-square border-b-2 p-2">
              <div>Backend Technologies</div>
              <div className="text-black/50 dark:text-white/40">
                Node.js
                <br />
                Express.js
                <br />
                Flask
                <br />
                Django
                <br />
                Postgres SQL
                <br />
                MongoDB
                <br />
                Firebase
              </div>
            </div>
            <div className="w-full aspect-square border-b-2 p-2">
              <div>Development Tools</div>
              <div className="text-black/50 dark:text-white/40">
                Docker
                <br />
                Git
                <br />
                Linux
                <br />
                Puppeteer, Selenium
                <br />
                CI/CD - Github Actions, Bitbucket, Azure
                <br />
                Vim, Neovim
                <br />
                Arduino
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full overflow-visible mb-24">
        <div className="relative">
          <div className="text-xl">Contact</div>
          <div className="w-full flex flex-col sm:flex-row sm:gap-2 mt-2 text-black/50 dark:text-white/40">
            <div>
              Feel free to reach out and chat about{' '}
              <span className="italic">anything!</span>
            </div>
            <div>
              You can connect with me through{' '}
              <a
                href="https://www.linkedin.com/in/jareddrueco/"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>{' '}
              or{' '}
              <a
                href="mailto:jdrueco@ualberta.ca?Subject=Website%20Contact"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
