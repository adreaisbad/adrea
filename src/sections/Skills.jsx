import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import { languages } from "../data/languages";
import { motion } from "framer-motion";

function Languages() {
  return (
    <section id="skills">
      <div className="text-gray-400 bg-dark px-10 py-20 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40"></div>
        <div className="container mx-auto">
          <div className="mb-20 text-center">
            <div className="bg-lilbitdark">
              <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                  <CodeIcon className="text-gray-400 mx-auto inline-block w-10 mb-4" />
                  <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                    My Skills
                  </p>
                  <p className="max-w-xl mt-5 mx-auto text-xl text-gray-400">
                    I have over 3-4 years of Spigot development experience and
                    about a month of web development, kinda.
                  </p>
                  <p className="max-w-xl mt-5 mx-auto text-sm italic text-blue-400">
                    <a href="https://github.com/adreaisbad/adrea">https://github.com/adreaisbad/adrea</a>
                  </p>
                  <br />
                  <motion.div whileHover={{ scale: 1.09 }}>
                    <table className="border-solid border-2 min-w-full divide-y divide-gray-400">
                      <thead className="bg-tabledark">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-medium text-gray-200 uppercase tracking-wider"
                          ></th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-medium text-gray-200 uppercase tracking-wider"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-medium text-gray-200 uppercase tracking-wider"
                          >
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-etabledaaark">
                        {languages.map((lang) => (
                          <tr key={lang.name}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                              <img
                                className="h-8 w-8"
                                src={lang.logo}
                                alt={lang.name}
                              />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                              {lang.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                              {lang.status}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Languages;
