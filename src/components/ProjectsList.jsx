import React from "react";
import { CardProject } from "./";

export default function ProjectsList({ projects }) {
  return (
    <div>
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
