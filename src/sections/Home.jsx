import React from "react";
import { imgProfil, github, linkedInIcon, facebook } from "./../assets";
import { LinkSocial } from "./../components";

export default function Home() {
  return (
    <section className="flex flex-col items-center h-dvh justify-evenly md:flex-row-reverse">
      <img
        src={imgProfil}
        alt="Jospin profile's image"
        className="max-w-[250px] aspect-square object-cover rounded-full md:max-w-[360px]"
      />
      <div className="text-center flex flex-col gap-2 items-center px-16 md:text-start md:items-start md:w-1/2">
        <div>
          <h2 className="text-3xl font-bold sm:text-5xl">
            Hey there!&nbsp;I'm <span className="text-myRose">Jospin</span>
          </h2>
          <h1 className="font-extrabold text-myRose text-5xl sm:text-6xl">
            Web developer.
          </h1>
        </div>
        <div className="flex justify-center gap-5 items-center">
          <LinkSocial href="https://github.com/Jospin316" src={github} />
          <LinkSocial
            href="https://www.linkedin.com/in/eloi-jospin-2b6604319/?originalSubdomain=mg"
            src={linkedInIcon}
          />
          <LinkSocial
            href="https://www.facebook.com/jospin.vincent/"
            src={facebook}
          />
        </div>
        <p className="text-xl">
          Passionate about creating innovative and engaging web experiences. I'm
          dedicated to continuously improving and learning new things in the
          ever-evolving world of web development.
        </p>

        <a
          href="#contact"
          className="bg-myRose rounded-xl text-xl py-2 w-fit px-8"
        >
          Contact me
        </a>
      </div>
    </section>
  );
}
