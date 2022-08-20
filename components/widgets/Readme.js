import Image from 'next/image';

const Readme = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-600 h-full flex flex-col">
      <div className="bg-blue-200 shadow-lg shadow-slate-200/30 w-[42%] h-[42%] rounded-full ml-7 sm:ml-11 mt-6 sm:mt-10 overflow-hidden relative">
        <Image src="/photo.jpg" layout="fill" className="object-cover" />
      </div>
      <div className="w-[75%] h-12 ml-7 sm:ml-11 mt-4 sm:mt-7 text-[10px] sm:text-sm md:text-base text-white leading-[11px] sm:leading-[18px] md:leading-[22px]">
        You can click here
        <br />
        to read more about me :)
      </div>
    </div>
  );
};

export default Readme;
