import React from "react";
import { CollectionIcon } from "@heroicons/react/solid";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="skills">
      <div className="text-gray-400 bg-dark px-10 py-20 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40"></div>
            <div className="bg-lilbitdark">
              <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                  <CollectionIcon className="text-gray-400 mx-auto inline-block w-10 mb-4" />
                  <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                    Current Projects
                  </p>
                  <p className="max-w-xl mt-5 mx-auto text-xl text-gray-400">
                    Still trying to be productive from day to day...
                  </p>
                  <br />
                  <div className="flex flex-wrap -m-4">
                    {projects.map((project) => (
                      <a
                        href={project.link}
                        key={project.image}
                        className="sm:w-1/2 w-100 p-4"
                      >
                        
                        <motion.div whileHover={{ scale: 1.02 }}>
                            
                          <div className="flex relative ">
                          <img
                              alt={project.title}
                              className="bg-etabledaaark w-52 h-52"
                              src={project.image}
                            />
                            <div className="px-10 py-8 relative z-10 w-full bg-etabledaaark">
                              <h2 className="tracking-widest text-sm title-font font-medium text-gray-400 mb-2">
                                {project.subtitle}
                              </h2>
                              <h1 className="title-font text-2x font-medium text-white mb-3">
                                {project.title}
                              </h1>
                              <p className="leading-relaxed text-sm">
                                {project.description}
                              </p>
                              <p className="">
                                Status: {project.status}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
    </section>
  );
}
