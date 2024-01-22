import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      img: '/MobilityMate.png',
      title: 'MobilityMate',
      description: 'HackED 2024',
      link: 'https://devpost.com/software/mobility-mate-9fyp8v',
    },
    {
      img: '/SafeContact.png',
      title: 'Safe Contact',
      description: 'Katy Youth Hacks 2022',
      link: 'https://devpost.com/software/safe-contact',
    },
    {
      img: '/OutageML.png',
      title: 'OutageML',
      description: 'APIC Energy Hackathon 2023',
      link: 'https://github.com/owencooke/OutageML',
    },
  ];

  return (
    <div className="w-full flex flex-col border-b-[1px] gap-6 pt-6 pb-12">
      <div className="w-full flex flex-col md:flex-row gap-6">
        <p className="md:w-1/3 font-semibold">Projects</p>
        <p className="md:w-2/3">
          Notable projects from hackathons and personal initiatives.
          <br />
          <span className="flex items-center pt-6 md:p-0">
            View all my projects on{' '}
            <a
              href="https://github.com/jdrco"
              className="underline underline-offset-4 ml-1"
            >
              GitHub
            </a>
            <Github size={14} className="ml-1" />
            .
          </span>
        </p>
      </div>
      {projects.map((project, index) => (
        <div key={index}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};

export default Projects;
