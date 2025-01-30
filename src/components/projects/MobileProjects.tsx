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

export default function MobileProjects({
  projects,
  project,
  setProject,
}: {
  projects: Projects[];
  project: Project;
  setProject: React.Dispatch<React.SetStateAction<object>>;
}) {
  return (
    <section className="xl:hidden flex flex-col items-center gap-3 px-6">
      <div className="flex w-full overflow-x-auto whitespace-nowrap">
        {projects.map((projectItem) => (
          <button
            type="button"
            key={projectItem.id}
            className="mydiv"
            onClick={() => setProject(projectItem)}
          >
            <Image src={projectItem.logo} alt={projectItem.title} width={50} height={50} className='mx-auto'/>
            <div className="px-6 py-4">
              <h1 className="font-bold text-xl mb-2">{projectItem.title}</h1>
            </div>
          </button>
        ))}
      </div>
      {project && (
        <div className="w-5/6 h-fit my-auto ">
          <div>
            <div className="flex justify-between">
              <h1 className="text-3xl py-6">{project.title}</h1>
              <Image src={project.logo} alt={project.title} width={70} height={70}/>
            </div>
            <Image src={project.image} alt={project.title} width={500} height={500} />
          </div>
          <div className="m-auto space-y-4">
            <p className="text-gray-700 text-justify w-80">
              {project.description}
            </p>
            <p className="text-gray-700 text-justify w-fit">{project.link}</p>
          </div>
        </div>
      )}
    </section>
  );
}
