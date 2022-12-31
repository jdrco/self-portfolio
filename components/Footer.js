const Footer = () => {
  return (
    <div className="flex items-center flex-col pb-1 border-t-[1px] border-black py-2">
      <p className="text-sm sm:text-md 2xl:text-lg">
        2023 •{" "}
        <a
          href="https://www.linkedin.com/in/jareddrueco/"
          className=" text-sm sm:text-md 2xl:text-lg"
        >
          linkedin
        </a>{" "}
        •{" "}
        <a
          href="https://github.com/jdrco"
          className="text-sm sm:text-md 2xl:text-lg"
        >
          github
        </a>{" "}
        •{" "}
        <a
          href="mailto:jdrueco@ualberta.ca?Subject=Website%20Contact"
          className="text-sm sm:text-md 2xl:text-lg"
        >
          mail
        </a>
      </p>
    </div>
  );
};

export default Footer;
