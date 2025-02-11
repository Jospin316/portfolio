import React from "react";
import { ProjectsList, Title } from "../components";
import { screenhot } from "./../assets";

export default function Projects() {
  const my_favorites_projects = [
    {
      rank: 1,
      nameOf: "My portfolio",
      presentation: screenhot,
      description:
        "lorem epsumrarzerzermzerkerjam  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis similique perferendis quae quos? Fugit impedit eaque sequi! Corporis, blanditiis sed? Ratione suscipit qui, quidem excepturi consequuntur voluptates iure deserunt!",
      usedTechnos: ["ReactJS", "HTML", "CSS"],
    },
    {
      rank: 2,
      nameOf: "My portfolio",
      presentation: screenhot,
      description:
        "lorem epsumrarzerzermzerkerjam  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis similique perferendis quae quos? Fugit impedit eaque sequi! Corporis, blanditiis sed? Ratione suscipit qui, quidem excepturi consequuntur voluptates iure deserunt!",
      usedTechnos: ["ReactJS", "HTML", "CSS"],
    },
    {
      rank: 3,
      nameOf: "My portfolio",
      presentation: screenhot,
      description:
        "lorem epsumrarzerzermzerkerjam  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis similique perferendis quae quos? Fugit impedit eaque sequi! Corporis, blanditiis sed? Ratione suscipit qui, quidem excepturi consequuntur voluptates iure deserunt!",
      usedTechnos: ["ReactJS", "HTML", "CSS"],
    },
  ];
  return (
    <section className="flex flex-col items-center">
      <Title h1={"Projects"} h3={"My favorites projects"} />
      <ProjectsList projects={my_favorites_projects} />
    </section>
  );
}
