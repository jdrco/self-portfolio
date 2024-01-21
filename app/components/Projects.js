import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {

  const projects = [
    {
      img: '/MobilityMate.png',
      title: 'MobilityMate',
      description: 'HackED 2024',
      link: '',
    },
    {
      img: '/SafeContact.png',
      title: 'Safe Contact',
      description: 'Katy Youth Hacks 2022',
      link: '',
    },
    {
      img: '/OutageML.png',
      title: 'OutageML',
      description: 'APIC Energy Hackathon 2023',
      link: '',
    }
  ]

  return (
    <div className="w-full flex flex-col border-b-[1px] gap-6 pt-6 pb-12">
      <div className="w-full flex flex-col">
        <p className='font-semibold'>
          Projects
        </p>
        <br />
        <p>
          Notable projects from hackathons, school, and personal initiatives.
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
