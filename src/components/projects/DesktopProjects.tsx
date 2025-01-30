import React from 'react';
import Image from "next/image";

interface Projects {
  id: number;
  title: string;
  logo: string;
  image: string;
  description: string;
  link: string;
}

interface Project {
  title: string;
  logo: string;
  image: string;
  description: string;
  link: string;
}

export default function DesktopProjects({
  projects,
  project,
  setProject,
}: {
  projects: Projects[];
  project: Project;
  setProject: React.Dispatch<React.SetStateAction<object>>;
}) {
  return (
    <section className="hiddenDesktop xl:flex xl:justify-between xl:gap-1 xl:px-6 xl:h-screen">
      {project && (
        <div className="w-5/6 h-fit my-auto flex">
          <div>
            <div className="flex justify-between">
              <h1 className="text-3xl py-6">{project.title}</h1>
              <Image src={project.logo} alt={project.title} className="size-20" width={150} height={150}/>
            </div>
            <Image src={project.image} alt={project.title} width={600} height={600}/>
          </div>
          <div className="m-auto space-y-4">
            <p className="text-gray-700 text-justify w-80">
              {project.description}
            </p>
            <p className="text-gray-700 text-justify w-fit">{project.link}</p>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 gap-4 w-1/4 overflow-y-scroll scrollStyle">
        {projects.map((projectItem) => (
          <button
            type="button"
            key={projectItem.id}
            className="mydiv"
            onClick={() => setProject(projectItem)}
          >
            <Image
              src={projectItem.logo}
              alt={projectItem.title}
              className="size-40 mx-auto"
              width={300} height={300}
            />
            <div className="px-6 py-4">
              <h1 className="font-bold text-xl mb-2">{projectItem.title}</h1>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
