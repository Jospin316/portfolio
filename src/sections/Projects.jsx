import React from "react";
import { ProjectsList } from "../components";
import { screenhot } from "./../assets";

export default function Projects() {
  const my_favorites_projects = [
    {
      rank: 1,
      nameOf: "My portfolio",
      presentation: { screenhot },
      description:
        "lorem epsumrarzerzermzerkerjam  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis similique perferendis quae quos? Fugit impedit eaque sequi! Corporis, blanditiis sed? Ratione suscipit qui, quidem excepturi consequuntur voluptates iure deserunt!",
      usedTechnos: ["ReactJS", "HTML", "CSS"],
    },
    {
      rank: 2,
      nameOf: "My portfolio",
      presentation: { screenhot },
      description:
        "lorem epsumrarzerzermzerkerjam  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis similique perferendis quae quos? Fugit impedit eaque sequi! Corporis, blanditiis sed? Ratione suscipit qui, quidem excepturi consequuntur voluptates iure deserunt!",
      usedTechnos: ["ReactJS", "HTML", "CSS"],
    },
    {
      rank: 3,
      nameOf: "My portfolio",
      presentation: { screenhot },
      description:
        "lorem epsumrarzerzermzerkerjam  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis similique perferendis quae quos? Fugit impedit eaque sequi! Corporis, blanditiis sed? Ratione suscipit qui, quidem excepturi consequuntur voluptates iure deserunt!",
      usedTechnos: ["ReactJS", "HTML", "CSS"],
    },
  ];
  return (
    <section className="flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">PROJECTS</h1>
        <h3 className="text-gray-400">My favorites projects</h3>
      </div>
      <ProjectsList projects={my_favorites_projects} />
    </section>
  );
}
