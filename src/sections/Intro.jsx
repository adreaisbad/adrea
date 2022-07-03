

import React from "react";
import { HeartIcon } from "@heroicons/react/solid";

export default function Intro() {
  return (
    <section id="about">
      <div className="text-gray-400 bg-gray-800 px-10 py-20 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40"></div>
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <HeartIcon className="text-green-600 mx-auto inline-block w-10 mb-4" />
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello, I'm Adrea.
          </h1>
          <p className="mb-8 leading-relaxed text-xl text-gray-400">
            I am a 16-year-old Vietnamese man who enjoys cheating in block games
            and creating projects that grow wildly.
            <br /> I also play too much video games, and I'm afraid I'll die too
            soon.
          </p>
          </div>

          
        </div>
      </div>
    </section>
  );
}

