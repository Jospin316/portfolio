import React from "react";

export default function CardProject({
  rank,
  presentation,
  nameOf,
  description,
  usedTechnos,
}) {
  return (
    <a
      href="https://github.com"
      target="_blank"
      className="shadow-black shadow-2xl p-4 rounded-2xl max-h-[350px] aspect-square
    flex flex-col justify-evenly box-border duration duration-500 hover:rotate-1"
    >
      <h3 className="text-2xl font-bold">#{rank}</h3>
      <img
        src={presentation}
        alt={`${nameOf}'s project`}
        className="max-w-full"
      />
      <div>
        <h2 className="text-2xl font-bold">{nameOf}</h2>
        <p className="text-gray-400 truncate">{description}</p>
      </div>
      <div className="flex gap-1 justify-end">
        {usedTechnos.map((techno, index) => (
          <span
            key={index}
            className="border border-myRose border-dashed p-1 rounded-full"
          >
            {techno}
          </span>
        ))}
      </div>
    </a>
  );
}
