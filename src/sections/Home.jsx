import React from "react";
import { imgProfil } from "./../assets";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-evenly text-center h-dvh">
      <img
        src={imgProfil}
        alt="Jospin profile's image"
        className="max-w-[220px] aspect-square object-cover rounded-2xl"
      />
      <div className="p-2">
        <h2 className="font-bold text-3xl">
          Hey there!&nbsp;I'm <span className="text-myRose">Jospin</span>
        </h2>
        <h1 className="font-extrabold text-myRose text-6xl">Web developer.</h1>
        <p>
          Passionate about creating innovative and engaging web experiences. I'm
          dedicated to continuously improving and learning new things in the
          ever-evolving world of web development.
        </p>
      </div>
      <a href="#contact" className="bg-myRose text-xl py-2 px-8 rounded-xl">
        Hire me
      </a>
    </section>
  );
}
