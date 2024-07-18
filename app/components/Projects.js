import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Github } from 'lucide-react';
import LinkArrow from './LinkArrow';

const Projects = () => {
  return (
    <div className="w-full flex flex-col border-b-[1px] gap-9 pt-6 pb-12">
      <div className="w-full flex flex-col md:flex-row gap-6">
        <p className="md:w-1/3 font-semibold">Projects</p>
        <p className="md:w-2/3">
          Notable projects from hackathons and personal initiatives.
          <br />
          <span className="flex items-center pt-6 md:p-0">
            View all my projects{' '}
            <a
              href="https://github.com/jdrco"
              className="underline underline-offset-4 ml-1"
            >
              here
            </a>
            <Github size={14} className="ml-1" />.
          </span>
        </p>
      </div>
      <div className="w-full bg-white border rounded-lg shadow dark:bg-neutral-800 overflow-hidden">
        <div className="relative pb-[47%] md:pb-[49%] m-2 md:m-3">
          <Image
            src="/Rhythm.png"
            alt="Project"
            className="absolute w-full h-full object-cover rounded-md overflow-hidden border-2"
            fill
          />
        </div>
        <div className="px-4 pb-4">
          <h5 className="font-semibold tracking-tight text-gray-900 dark:text-white flex flex-col">
            Rhythm-WWDC24
            <div className="mt-2">
              <span className="bg-orange-100 text-orange-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-orange-900 dark:text-orange-300">
                Swift
              </span>
              <span className="bg-amber-100 text-amber-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-amber-900 dark:text-amber-300">
                SwiftUI
              </span>
              <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                AVAudioEngine
              </span>
            </div>
          </h5>
          <p className="max-w-xl mt-3">
            A drum machine application for iPad OS. This was my submission for
            Apple&apos;s WWDC Swift Student Challenge and was selected as a 2024 winner.
          </p>
          <Link
            href="https://github.com/jdrco/Rhythm-WWDC24/blob/main/README.md"
            className="mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-blue-800"
          >
            View project
            <LinkArrow />
          </Link>
        </div>
      </div>
      <div className="w-full bg-white border rounded-lg shadow dark:bg-neutral-800 overflow-hidden">
        <div className="relative pb-[47%] md:pb-[49%] m-2 md:m-3">
          <Image
            src="/HouseHomey.png"
            alt="Project"
            className="absolute w-full h-full object-cover rounded-md overflow-hidden border-2"
            fill
          />
        </div>
        <div className="px-4 pb-4">
          <h5 className="font-semibold tracking-tight text-gray-900 dark:text-white flex flex-col">
            HouseHomey
            <div className='mt-2'>
              <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                Android Studio
              </span>
              <span className="bg-orange-100 text-orange-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-orange-900 dark:text-orange-300">
                Java
              </span>
              <span className="bg-slate-100 text-slate-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-slate-900 dark:text-slate-300">
                XML
              </span>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                Firebase
              </span>
            </div>
          </h5>
          <p className="max-w-xl mt-3">
          HouseHomey is an Android app for household inventory management, featuring image capture, barcode and serial number scanning, and comprehensive inventory tracking.
          </p>
          <Link
            href="https://github.com/CMPUT301F23T08/HouseHomey/wiki"
            className="mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-blue-800"
          >
            View project
            <LinkArrow />
          </Link>
        </div>
      </div>
      <div className="w-full bg-white border rounded-lg shadow dark:bg-neutral-800 overflow-hidden">
        <div className="relative pb-[47%] md:pb-[49%] m-2 md:m-3">
          <Image
            src="/MobilityMate.png"
            alt="Project"
            className="absolute w-full h-full object-cover rounded-md overflow-hidden border-2"
            fill
          />
        </div>
        <div className="px-4 pb-4">
          <h5 className="font-semibold tracking-tight text-gray-900 dark:text-white flex flex-col">
            MobilityMate
            <div className='mt-2'>
              <span className="bg-teal-100 text-teal-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-teal-900 dark:text-teal-300">
                Flask
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                React
              </span>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                Firebase
              </span>
              <span className="bg-slate-100 text-slate-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-slate-900 dark:text-slate-300">
                Whisper LLM
              </span>
            </div>
          </h5>
          <p className="max-w-xl mt-3">
            MobilityMate is a web app that streamlines physiotherapy interactions, providing patients with an exercise-tracking system and AI voice assistant.
          </p>
          <Link
            href="https://devpost.com/software/mobility-mate-9fyp8v"
            className="mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-blue-800"
          >
            View project
            <LinkArrow />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
