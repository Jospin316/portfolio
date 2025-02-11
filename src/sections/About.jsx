import React from "react";
import { cv, photoAbout } from "../assets";
import { Title } from "../components";

export default function About() {
  return (
    <section className="mt-10 flex flex-col items-center gap-4">
      <Title h1={"About me"} h3={"My introduction"} />
      <div className="flex flex-col items-center gap-4 md:flex-row lg:items-start">
        <img
          src={photoAbout}
          alt="Eloi Jospin"
          className="max-w-[300px] object-contain rounded-sm"
        />
        <div className="flex flex-col items-center md:items-start md:pr-24 lg:pr-[200px]">
          <p className="mb-2 text-center text-lg md:text-start md:text-xl">
            My name is
            <strong> RAMINONANTENAINA Eloi Jospin</strong>, but you can just
            call me Jospin. I am still a student at Ecole Nationale
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
            className="bg-myRose px-8 py-2 w-fit rounded-xl text-xl"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
