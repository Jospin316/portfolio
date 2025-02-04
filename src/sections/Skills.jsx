import React from "react";
import {
  bootstrapIcon,
  githubIcon,
  gitIcon,
  mySQLIcon,
  nodeIcon,
  postgreSQLIcon,
  pythonIcon,
  reactIcon,
  solvingIcon,
  tailwindIcon,
  typescriptIcon,
} from "../assets";
import { Skill } from "./../components";

export default function Skills() {
  const frontend_skills = [
    { name: "Typescript", icon: typescriptIcon },
    { name: "ReactJS", icon: reactIcon },
    { name: "TaiwindCSS", icon: tailwindIcon },
    { name: "Bootstrap", icon: bootstrapIcon },
  ];
  const backend_skills = [
    { name: "NodeJS", icon: nodeIcon },
    { name: "Python", icon: pythonIcon },
    { name: "MySQL", icon: mySQLIcon },
    { name: "PostgreSQL", icon: postgreSQLIcon },
  ];
  const others_skills = [
    { name: "Git", icon: gitIcon },
    { name: "github", icon: githubIcon },
    { name: "Problem solving", icon: solvingIcon },
  ];
  return (
    <section className="mt-10 flex flex-col items-center text-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">SKILLS</h1>
        <h3 className="text-gray-400">My technical level</h3>
      </div>
      <div className="flex flex-col gap-8">
        <Skill title={"Frontend"} skills={frontend_skills} />
        <Skill title={"Backend"} skills={backend_skills} />
        <Skill title={"Others"} skills={others_skills} />
      </div>
    </section>
  );
}
