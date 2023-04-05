import {
  IoLogoLinkedin,
  IoMailUnreadSharp,
  IoLogoGithub,
} from "react-icons/io5";
import Link from 'next/link';

const Contact = () => {
  return (
    <div className="h-full flex flex-col p-10 justify-center items-center font-light">
      {/* <p className="text-3xl sm:text-6xl text-white">Contact Me</p> */}
      <div className="flex flex-row justify-center items-center text-4xl text-red-500">
        <Link href="https://www.linkedin.com/in/jareddrueco/">
          <IoLogoLinkedin className="m-3" />
        </Link>
        <Link href="mailto:jdrueco@ualberta.ca?Subject=Website%20Contact">
          <IoMailUnreadSharp className="ml-3 mr-5 text-5xl"  />
        </Link>
        <Link href="https://github.com/jdrco">
          <IoLogoGithub classNazme="m-3" />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
