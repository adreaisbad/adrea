import { MoonIcon } from "@heroicons/react/solid";
import React from "react";
import { clients } from "../data/clients";

export default function OwnedClients() {
  return (
    <section id="clients">
      <div className="text-gray-400 bg-gray-800 px-10 py-20 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-20">
            <MoonIcon className="text-green-600 mx-auto inline-block w-10 mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              Clients that I own
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">
              I play legit all the time.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {clients.map((client) => (
              <a
                href={client.link}
                key={client.image}
                className="sm:w-1/2 w-100 p-4"
              >
                <div className="flex relative">
                  <img
                    alt={client.title}
                    className="absolute inset-0 object-cover object-center h-full w-full"
                    src={client.image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {client.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {client.title}
                    </h1>
                    <p className="leading-relaxed">{client.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
