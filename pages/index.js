export default function Home() {
  return (
    <>
      <div className="w-full h-full flex flex-col dark:text-white">
        <div className="w-full flex flex-col ">
          <div className="w-36 h-36 rounded-full bg-red-300 overflow-hidden">
            <img
              className="object-cover h-full w-full"
              src="/pf.JPG"
              alt="Rounded avatar"
            ></img>
          </div>
          <div className="text-3xl mt-12 mb-32 text-left max-w-2xl">
            Hi, I&apos;m Jared!{' '}
            <span className="font-extralight">
              - Aspiring software engineer passionate about building impactful
              products and pursuing leadership opportunities :)
            </span>
          </div>
        </div>
        <div className="text-3xl font-extralight">Work Experience</div>
        <div className="w-full h-auto mt-4 mb-32 flex gap-4">
          <div className="w-1/2 aspect-square border-[1px] rounded-3xl"></div>
          <div className="w-1/2 aspect-square border-[1px] rounded-3xl"></div>
        </div>
        <div className="text-3xl font-extralight">Volunteer Experience</div>
        <div className="w-full h-auto mt-4 pb-32 flex gap-4">
          <div className="w-1/2 aspect-square border-[1px] rounded-3xl"></div>
          <div className="w-1/2 aspect-square border-[1px] rounded-3xl"></div>
        </div>
      </div>
    </>
  );
}
