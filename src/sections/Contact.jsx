import React from "react";
import { Title, InfoContact, Input } from "./../components";

export default function Contact() {
  const infos = [
    {
      titleInfo: "Call me",
      valueInfo: "+261 34 47 889 74",
    },
    {
      titleInfo: "Email",
      valueInfo: "raminonantenainajospin@gmail.com",
    },
    {
      titleInfo: "Location",
      valueInfo: "Madagascar,Fianarantsoa,Tanambao",
    },
  ];
  return (
    <section className="flex flex-col items-center gap-4">
      <Title h1={"Contact"} h3={"Get in touch"} />
      <ul>
        {infos.map((info, index) => (
          <li key={index}>
            <InfoContact
              titleInfo={info.titleInfo}
              valueInfo={info.valueInfo}
            />
          </li>
        ))}
      </ul>
      <form action="" className="flex flex-col gap-2">
        <Input label={"Name"} />
        <Input label={"Email"} />
        <div className="bg-myWhite flex flex-col p-3 text-black rounded-2xl">
          <label htmlFor="forMessage" className="text-xl">
            Text to me...
          </label>
          <textarea
            id="forMessage"
            className="bg-myWhite resize-none outline-none min-h-[200px]"
          />
        </div>
        <button
          type="submit"
          className="bg-myRose py-1 text-xl rounded-2xl cursor-pointer"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
