import React from "react";
import { CardProject } from "./";

export default function ProjectsList({ projects }) {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:justify-center px-5">
      {projects.map((project, index) => (
        <CardProject
          key={index}
          rank={project.rank}
          nameOf={project.nameOf}
          presentation={project.presentation}
          description={project.description}
          usedTechnos={project.usedTechnos}
        />
      ))}
    </div>
  );
}
