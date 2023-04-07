import Head from 'next/head';
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaLinux,
  FaDocker,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiAzuredevops,
  SiPostman,
  SiVim,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiFlask,
  SiFirebase,
  SiVercel,
  SiArduino,
} from 'react-icons/si';

const Projects = () => {
  return (
    <>
      <Head>
        <title>Jared Drueco | Skills</title>
        <meta name="keywords" content="skills" />
      </Head>
      <div className='w-full flex flex-col pt-14'>
        <div className='text-2xl sm:text-3xl pb-2'>Tech stack</div>
        <div className='w-full flex align-baseline mb-8 border-t-[1px] border-black'>
          {/* left */}
          <div className='w-1/2 text-base sm:text-lg'>Languages</div>
          {/* right */}
          <div className='w-1/2 text-xs h-auto grid grid-cols-2 sm:grid-cols-3'>
            <div className='h-full flex items-center gap-1 sm:text-base'>
              <FaPython className=''/>
              <div className=''>Python</div>
            </div>
            <div className='h-full flex items-center gap-1 sm:text-base'>
              <SiJavascript className=''/>
              <div className=''>JavaScript</div>
            </div>
            <div className='h-full flex items-center gap-1 sm:text-base'>
              <SiTypescript className=''/>
              <div className=''>TypeScript</div>
            </div>
            <div className='h-full flex items-center gap-1 sm:text-base'>
              <FaJava className=''/>
              <div className=''>Java</div>
            </div>
            <div className='h-full flex items-center gap-1 sm:text-base'>
              <div className='font-bold'>C</div>
            </div>
            <div className='h-full flex items-center gap-1 sm:text-base'>
              <div className='font-bold'>C++</div>
            </div>
          </div>
        </div>
        <div className='w-full flex align-baseline mb-5 border-t-[1px] border-black'>
          {/* left */}
          <div className='w-1/2 text-base sm:text-lg'>Frontend</div>
          {/* right */}
          <div className='w-1/2 text-xs h-auto grid grid-cols-2 sm:grid-cols-3'>
            <div className='h-full flex items-center gap-1 sm:text-base'>
              <FaHtml5 className=''/>
              <div className=''>HTML</div>
            </div>
            <div className='h-full flex items-center gap-1 sm:text-base'>
              <FaCss3Alt className=''/>
              <div className=''>CSS</div>
            </div>
            <div className='h-full flex items-center gap-1 sm:text-base'>
              <FaReact className=''/>
              <div className=''>React.js</div>
            </div>
            <div className='h-full flex items-center gap-1 sm:text-base'>
              <SiTailwindcss className=''/>
              <div className=''>Tailwind</div>
            </div>
            <div className='h-full flex items-center gap-1 sm:text-base'>
              <FaFigma className=''/>
              <div className=''>Figma</div>
            </div>
          </div>
        </div>
        <div className='w-full flex align-baseline mb-5 border-t-[1px] border-black'>
          {/* left */}
          <div className='w-1/2 text-base sm:text-lg'>Backend</div>
          {/* right */}
          <div className='w-1/2 text-xs h-auto grid grid-cols-2 sm:grid-cols-3'>
            <div className='h-full flex items-center gap-1 sm:text-base'>
              <FaNodeJs className=''/>
              <div className=''>Node.js</div>
            </div>
            <div className='h-full flex items-center gap-1 sm:text-base'>
              <SiExpress className=''/>
              <div className=''>Express.js</div>
            </div>
            <div className='h-full flex items-center gap-1 sm:text-base'>
              <SiMongodb className=''/>
              <div className=''>MongoDB</div>
            </div>
            <div className='h-full flex items-center gap-1 sm:text-base'>
              <SiMysql className=''/>
              <div className=''>SQL</div>
            </div>
            <div className='h-full flex items-center gap-1 sm:text-base'>
              <SiFlask className=''/>
              <div className=''>Flask</div>
            </div>
            <div className='h-full flex items-center gap-1 sm:text-base'>
              <SiFirebase className=''/>
              <div className=''>Firebase</div>
            </div>
          </div>
        </div>
        <div className='w-full flex align-baseline mb-5 border-t-[1px] border-black'>
          {/* left */}
          <div className='w-1/2 text-base sm:text-lg'>Frameworks & Tools</div>
          {/* right */}
          <div className='w-1/2 text-xs h-auto grid grid-cols-2 sm:grid-cols-3'>
            <div className='h-full flex items-center gap-1 sm:text-base'>
              <FaDocker className=''/>
              <div className=''>Docker</div>
            </div>
            <div className='h-full flex items-center gap-1 sm:text-base'>
              <SiNextdotjs className=''/>
              <div className=''>Next.js</div>
            </div>
            <div className='h-full flex items-center gap-1 sm:text-base'>
              <SiVercel className=''/>
              <div className=''>Vercel</div>
            </div>
            <div className='h-full flex items-center gap-1 sm:text-base'>
              <FaGitAlt className=''/>
              <div className=''>Git</div>
            </div>
            <div className='h-full flex items-center gap-1 sm:text-base'>
              <SiArduino className=''/>
              <div className=''>Arduino</div>
            </div>
            <div className='h-full flex items-center gap-1 sm:text-base'>
              <FaLinux className=''/>
              <div className=''>Linux</div>
            </div>
            <div className='h-full flex items-center gap-1 sm:text-base'>
              <SiVim className=''/>
              <div className=''>Vim</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
