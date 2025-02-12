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
    <section id="contact" className="mt-10">
      <Title h1={"Contact"} h3={"Get in touch"} />
      <div className="flex flex-col gap-5 items-center mt-5">
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
        <form action="" className="flex flex-col gap-2 items-center">
          <Input label="Name" type="text"/>
          <Input label="Email" type="email" />
          <div className="bg-myWhite flex flex-col py-1 px-3 text-mySombre rounded-lg w-full">
            <label htmlFor="forMessage" className="text-lg">
              Text to me...
            </label>
            <textarea
              id="forMessage"
              className="bg-myWhite resize-none outline-none min-h-[200px]"
            />
          </div>
          <button
            type="submit"
            className="bg-myRose w-fit py-1 px-8 text-lg rounded-2xl cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
