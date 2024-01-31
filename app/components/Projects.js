import React from 'react';
import ProjectCard from './ProjectCard';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      img: '/JOLL-E.png',
      title: 'JOLL-E',
      description: 'An RC car controlled using an infrared remote sensor/remote and programmed with Arduino and C/C++.',
      link: 'https://github.com/HowToFailRobotics/AlbertaLoop-Competition',
    },
    {
      img: '/MobilityMate.png',
      title: 'MobilityMate',
      description: 'An app that streamlines physiotherapy interactions, providing patients with an exercise-tracking system and AI voice assistant.',
      link: 'https://devpost.com/software/mobility-mate-9fyp8v',
    },
    {
      img: '/SafeContact.png',
      title: 'Safe Contact',
      description: 'An automated device-tracking system to address safety concerns for those travelling in isolated travel areas, providing SMS alerts and location sharing.',
      link: 'https://devpost.com/software/safe-contact',
    },
    {
      img: '/OutageML.png',
      title: 'OutageML',
      description: 'An outage tracker app that uses machine learning to prioritize and display the whereabouts of local power outages.',
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
