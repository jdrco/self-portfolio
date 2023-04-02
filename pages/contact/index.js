import Head from "next/head";

import {
  IoLogoLinkedin,
  IoMailUnreadSharp,
  IoLogoGithub,
} from "react-icons/io5";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Jared Drueco | Contact</title>
        <meta name="keywords" content="connect, contact" />
      </Head>
      <div className="flex flex-row justify-center items-center text-3xl">
        <a href="https://www.linkedin.com/in/jareddrueco/">
          <IoLogoLinkedin className="m-3" />
        </a>
        <a href="mailto:jdrueco@ualberta.ca?Subject=Website%20Contact">
          <IoMailUnreadSharp className="ml-3 mr-5 text-4xl" />
        </a>
        <a href="https://github.com/jdrco">
          <IoLogoGithub classNazme="m-3" />
        </a>
      </div>
    </>
  );
};

export default Contact;
