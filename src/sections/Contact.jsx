import React from "react";
import { LinkIcon } from "@heroicons/react/solid";
import { socials } from "../data/socials";

export default function Contact() {
  return (
    <section id="contact">
      <div className="text-gray-400 bg-slate-700 px-10 py-20 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40"></div>
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <LinkIcon className="text-green-600 w-10 inline-block mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              Contact Me
            </h1>
            <p className="text-gray-400 lg:w-2/3 mx-auto leading-relaxed text-xl">
              I might be able to help you with hosting related or SpigotMC projects :3
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {socials.map((account) => (
              <li key={account.name} className="col-span-1 bg-gray-600 rounded-lg shadow divide-y divide-gray-200 cursor-pointer">
                <a href={account.href} target="_blank" rel="noreferrer">
                  <div className="w-full flex items-center justify-between p-6 space-x-6">
                    <div className="flex-1 truncate">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-gray-300 text-sm font-medium truncate">
                          {account.name}
                        </h3>
                      </div>
                      <p className="mt-1 text-gray-200 text-sm truncate">
                        {account.description}
                      </p>
                    </div>
                    <img
                      className="w-10 h-10 rounded-full flex-shrink-0"
                      src={account.logo}
                      alt={account.name}
                    />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
