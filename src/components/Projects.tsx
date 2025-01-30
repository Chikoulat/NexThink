'use client'

import React from 'react';
import projects from '../data/projects.json';
import DesktopProjects from './projects/DesktopProjects';
import MobileProjects from './projects/MobileProjects';

interface Project {
  title: string;
  logo: string;
  image: string;
  description: string;
  link: string;
}

export default function Projects() {
  const [project, setProject] = React.useState<Project>(projects[0]);

  return (
    <section id="projects">
      <h1 className="text-secondary text-center text-4xl font-semibold py-4 uppercase xl:text-6xl">
        {' '}
        Nos projets{' '}
      </h1>
      <DesktopProjects
        projects={projects}
        project={project as Project}
        setProject={setProject as React.Dispatch<React.SetStateAction<object>>}
      />
      <MobileProjects
        projects={projects}
        project={project as Project}
        setProject={setProject as React.Dispatch<React.SetStateAction<object>>}
      />
    </section>
  );
}
