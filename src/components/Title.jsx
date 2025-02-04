import React from "react";

export default function Title({ h1, h3 }) {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold uppercase">{h1}</h1>
      <h3 className="text-gray-400">{h3}</h3>
    </div>
  );
}
