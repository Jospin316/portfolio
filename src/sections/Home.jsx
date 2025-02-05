import React from "react";
import { imgProfil, github, linkedInIcon, facebook } from "./../assets";
import { LinkSocial } from "./../components";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-evenly sm:justify-center text-center sm:text-start h-dvh sm:flex-row-reverse mx-10">
      <img
        src={imgProfil}
        alt="Jospin profile's image"
        className="max-w-[250px] aspect-square object-cover rounded-full sm:max-w-[350px]"
      />
      <div className="p-2 sm:w-1/2 flex flex-col items-center sm:items-start gap-2">
        <div>
          <h2 className="font-bold text-3xl">
            Hey there!&nbsp;I'm <span className="text-myRose">Jospin</span>
          </h2>
          <h1 className="font-extrabold text-myRose text-5xl">
            Web developer.
          </h1>
        </div>
        <div className="inline-flex justify-center gap-5 items-center">
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

        <a href="#contact" className="bg-myRose text-xl py-2 px-8 rounded-xl">
          Contact me
        </a>
      </div>
    </section>
  );
}
