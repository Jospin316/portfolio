import React from "react";

export default function Skill({ title, skills }) {
  return (
    <div>
      <h2 className="text-myRose text-3xl font-bold">{title}</h2>
      <ul className="flex gap-5 flex-wrap justify-center">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-lg">{skill.name}</span>
            <img
              src={skill.icon}
              alt="techno icon"
              className="w-7 aspect-square"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
