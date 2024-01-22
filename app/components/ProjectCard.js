import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = ({ project }) => {
  return (
    <Link href={project.link}>
      <div className="w-full bg-white border rounded-lg shadow dark:bg-neutral-800 overflow-hidden">
        <div className="relative pb-[47%] md:pb-[49%] m-2 md:m-3">
          <Image
            src={project.img}
            alt="Project"
            className="absolute w-full h-full object-cover rounded-md overflow-hidden border-[1px]"
            fill
          />
        </div>
        <div className="px-4 pb-4">
          <h5 className="font-semibold tracking-tight text-gray-900 dark:text-white">
            {project.title}
          </h5>
          <p className='max-w-xl'>{project.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
