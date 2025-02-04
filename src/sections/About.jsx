import React from "react";
import { cv, photoAbout } from "../assets";

export default function About() {
  return (
    <section className="mt-10 flex flex-col items-center text-center gap-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold">ABOUT ME</h1>
        <h3 className="text-gray-400">My introduction</h3>
      </div>
      <div className="flex flex-col items-center text-center">
        <img
          src={photoAbout}
          alt="Eloi Jospin"
          className="w-[250px] aspect-square object-cover rounded-2xl"
        />
        <div className="p-4">
          <p>
            My name is RAMINONANTENAINA Eloi Jospin, but you can just call me
            Jospin. I am still a student at Ecole Nationale d'informatique de
            Fianarantsoa in Madagascar. Passionate about web development, I find
            great satisfaction in creating innovative and responsive digital
            experiences. Outside of my studies, I enjoy listening to music and
            creating instrumentals. This passion for music helps me find a
            crucial balance in my personal and professional life. Additionally,
            I enjoy watching football matches, an activity that provides me
            relaxation and entertainment, while also inspiring values of
            teamwork and strategy, which I apply rigorously in my web
            development projects. I am committed to continuously improving my
            technical skills and striving for excellence in every project I
            undertake.
          </p>
          <a
            href={cv}
            download
            target="_blank"
            className="bg-myRose px-2 py-1 rounded-md text-lg"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
