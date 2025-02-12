import React from "react";

export default function InfoContact({ titleInfo, valueInfo }) {
  return (
    <div className="text-center md:text-start">
      <h3 className="text-myRose text-2xl">{titleInfo} </h3>
      <p className="text-gray-400 text-xl">{valueInfo}</p>
    </div>
  );
}
