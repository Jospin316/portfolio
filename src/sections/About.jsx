import React from "react";
import { cv, photoAbout } from "../assets";
import { Title } from "../components";

export default function About() {
  return (
    <section className="mt-10 flex flex-col items-center text-center gap-4 p-5">
      <Title h1={"About me"} h3={"My introduction"} />
      <div className="flex flex-col items-center sm:justify-center text-center sm:flex-row lg:text-start lg:items-center sm:gap-5">
        <img
          src={photoAbout}
          alt="Eloi Jospin"
          className="max-w-[250px] aspect-square object-cover rounded-2xl sm:max-w-[280px]"
        />
        <div className="p-4 w-1/2">
          <p className="mb-4">
            My name is <strong>RAMINONANTENAINA Eloi Jospin</strong>, but you
            can just call me Jospin. I am still a student at Ecole Nationale
            d'informatique de Fianarantsoa in Madagascar. Passionate about web
            development, I find great satisfaction in creating innovative and
            responsive digital experiences. Outside of my studies, I enjoy
            listening to music and creating instrumentals. This passion for
            music helps me find a crucial balance in my personal and
            professional life. Additionally, I enjoy watching football matches,
            an activity that provides me relaxation and entertainment, while
            also inspiring values of teamwork and strategy, which I apply
            rigorously in my web development projects. I am committed to
            continuously improving my technical skills and striving for
            excellence in every project I undertake.
          </p>
          <a
            href={cv}
            download
            target="_blank"
            className="bg-myRose px-4 py-2 rounded-md text-lg"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
