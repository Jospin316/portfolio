import React from "react";

export default function Input({ label, type }) {
  return (
    <div className="bg-myWhite flex flex-col py-1 px-3 text-mySombre rounded-lg">
      <label htmlFor={label} className="text-lg">
        {label}
      </label>
      <input type={type} id={label} className="outline-none" />
    </div>
  );
}
