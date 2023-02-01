import React, { useEffect, useState } from "react";
const Programs = () => {
  const [checkWidth, setCheckWidth] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth >= 768 ? setCheckWidth(true) : setCheckWidth(false)
    );
  }, []);
  return (
    <div
      className={`px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 `}
    >
      {/* heading */}
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full"></p>
        </div>
        <h2 className="max-w-xl mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          UMP sebagai kampus yang menuju
          <div className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            <span className="relative px-1">
              <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-blue-300" />
              <span className="relative inline-block text-gray-600 mt-2">
                {/* a lazy dog */}
                word class university
              </span>
            </span>
          </div>
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
          doloribus! Facilis fuga molestiae sint voluptates neque qui minima est
          autem voluptate, at, commodi eos rem!
        </p>
      </div>
      {/* program */}
      <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8">
        <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
          {/* 1 */}
          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-blue-700 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-blue-700 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-blue-700 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-blue-700 group-hover:scale-y-100" />
            <div className="relative p-5 bg-gray-100 rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                  <svg
                    className="w-8 h-8 text-black "
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="font-semibold leading-5 text-md sm:text-xl">
                  35 program studi
                </h6>
              </div>
              <p className="mb-2 text-sm text-gray-900 md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur unde, vero praesentium beatae mollitia facere.
                Placeat molestiae dolore illum velit maiores quam ipsum maxime
                consectetur?
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-blue-400 hover:text-blue-800"
              >
                Learn more
              </a>
            </div>
          </div>
          {/* 2 */}
          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-blue-700 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-blue-700 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-blue-700 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-blue-700 group-hover:scale-y-100" />
            <div className="relative p-5 bg-gray-100 rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                  <svg
                    className="w-8 h-8 text-black "
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="font-semibold leading-5 text-md sm:text-xl">
                  7 program studi Pascasarjana
                </h6>
              </div>
              <p className="mb-2 text-sm text-gray-900 md:text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
                dolor error nesciunt officia reiciendis minus repudiandae?
                Cupiditate voluptates quaerat neque rerum laborum aspernatur qui
                quidem.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-blue-400 hover:text-blue-800"
              >
                Learn more
              </a>
            </div>
          </div>
          {/* 3 */}
          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-blue-700 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-blue-700 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-blue-700 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-blue-700 group-hover:scale-y-100" />
            <div className="relative p-5 bg-gray-100 rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                  <svg
                    className="w-8 h-8 text-black "
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="font-semibold leading-5 text-md sm:text-xl">
                  5 program profesi
                </h6>
              </div>
              <p className="mb-2 text-sm text-gray-900 md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                iure, odit labore soluta corporis omnis amet, repudiandae
                quibusdam tempore doloremque eos quae, sunt mollitia aliquam.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-blue-400 hover:text-blue-800"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
