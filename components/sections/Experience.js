const Experience = () => {
  return (
    <div className="w-full flex flex-col border-b-[1px] gap-6 pt-6 pb-12">
      <div className="flex md:flex-row flex-col gap-6">
        <div className="flex md:w-1/3">Experience</div>
        <div className="max-w-md flex flex-col md:w-2/3">
          <div>
            I&apos;ve completed two software development co-op/internships and actively engage in several tech-related university clubs.
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-x-6">
        <div className="flex md:w-1/3">2023 Jan - Aug</div>
        <div className="max-w-md flex flex-col md:w-2/3">
            <div>Software Developer Intern, Toronto ON
              <div className="flex">
                  <a href="https://www.insidedesk.com/" className="underline underline-offset-4">InsideDesk</a>↗
              </div>
            </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-x-6">
        <div className="flex md:w-1/3">2022 May - Aug</div>
        <div className="max-w-md flex flex-col md:w-2/3">
            <div>Software Developer Intern, Edmonton AB
              <div className="flex">
                  <a href="https://www.geosonsolutions.com/" className="underline underline-offset-4">Geoson Solutions</a>↗
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
