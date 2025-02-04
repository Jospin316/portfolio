import React from "react";

export default function Input({ label }) {
  return (
    <div className="bg-myWhite flex flex-col p-3 text-black rounded-2xl">
      <label htmlFor={label} className=" text-xl">
        {label}
      </label>
      <input type="text" id={label} className="outline-none" />
    </div>
  );
}
