import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import { languages } from "../data/languages";

function Languages() {
  return (
    <section id="skills">
      <div className="text-gray-400 bg-gray-800 px-10 py-20 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40"></div>
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <CodeIcon className="text-green-600 mx-auto inline-block w-10 mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              Languages that I know
            </h1>
          </div>

          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-600">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                ></th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-700 divide-y divide-gray-700">
              {languages.map((lang) => (
                <tr key={lang.name}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                    <img className="h-8 w-8" src={lang.logo} alt={lang.name}/>
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
        </div>
      </div>
    </section>
  );
}

export default Languages;
