import React from "react";
import { EyeIcon } from "@heroicons/react/solid";

function Content() {
  return (
    <section id="skills">
      <div className="text-gray-400 bg-gray-800 px-10 py-20 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40"></div>
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <EyeIcon className="text-green-600 mx-auto inline-block w-10 mb-4" />
            <iframe
              className="flex justify-center items-center"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/r4z16al39UI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <br/>
            <h2 className="title-font sm:text-2xl text-1xl mb-4 text-white">
              Also My PC Specs
            </h2>
            <p className="mb-8 leading-relaxed text-xl text-gray-400">
              CPU: Intel i7-11700k <br />
              GPU: Geforce GTX 1650
              <br />
              Mouse: Logitech G502 Hero <br />
              Keyboard: Steelseries Apex Pro <br />
              Monitor: Gigabyte G34WQC A 34″ 165hz <br />I use Wifi because I'm
              poor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
