import React from "react";
import { HeartIcon } from "@heroicons/react/solid";

export default function Intro() {
  return (
    <section id="about">
      <div className="text-gray-400 bg-dark px-10 py-20 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40"></div>
        <div className="container mx-auto">
          <div className="mb-20 text-center">
            <div className="bg-lilbitdark">
              <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                <HeartIcon className="text-gray-400 mx-auto inline-block w-10 mb-4" />
                  <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                  Hello, I'm Adrea.
                  </p>
                  <p className="max-w-xl mt-5 mx-auto text-xl text-gray-400">
                    I'm from Vietnam, and I'm 16 years old.
                    I love cheating in block game, doing web, and being a retard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
