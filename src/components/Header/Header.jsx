import React from "react";
import { Link } from "react-router-dom";
import group from "./group.json";

const Header = () => {
  return (
    <>
      <div className="fixed flex flex-row items-center justify-between w-full px-4 pt-2 pb-5 lg:py-1.5 bg-white ">
        <div className="block w-1/3 lg:hidden">
          <button className="flex flex-col items-center justify-center p-1 border-0 border-gray-400">
            <span className="line h-0.5 w-5 my-0.5 bg-black"></span>
            <span className="line h-0.5 w-5 my-0.5 bg-black"></span>
            <span className="line h-0.5 w-5 my-0.5 bg-black"></span>
          </button>
        </div>
        <div className="w-1/3 2xl:w-2/5 xl:w-1/2 lg:w-2/5">
          <div className="flex mr-2 text-3xl font-bold text-blue-700 lg:inline-block lg:text-start">
            <Link to="/" className="mx-auto">
              quorchera
            </Link>
          </div>
          <div className="hidden px-3 py-2 mr-2 text-sm font-semibold text-white transition-all ease-out bg-blue-600 border-2 border-black rounded-md shadow-md cursor-default lg:inline-block delay-800 hover:bg-white hover:text-blue-700">
            Explore<i className="ml-2 text-xs fa-solid fa-chevron-down"></i>
          </div>
          <div className="relative hidden lg:inline-block search-bar">
            <input
              className="px-2 2xl:w-[480px] xl:w-[320px] lg:w-[140px] py-1.5 border-2 border-gray-400"
              type="text"
              placeholder="What do you want to learn?"
            />
            <i className="absolute bottom-0 right-0 p-3 font-normal text-white bg-blue-600 cursor-pointer fa-thin fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="w-1/3 2xl:w-2/5 xl:w-1/2 lg:w-3/5 text-end">
          <ul className="hidden mx-2 lg:inline-block">
            <li className="relative inline-block mx-2 transition duration-300 ease-in-out group">
              <span className="items-center hidden text-sm font-normal transition duration-300 ease-in cursor-pointer xl:flex">
                Online Degrees
                <i className="ml-1.5 text-lg fa-light fa-chevron-down group-hover:rotate-180"></i>
              </span>
              <span className="flex items-center text-sm font-normal transition duration-300 ease-in cursor-pointer xl:none">
                Degrees
                <i className="ml-1.5 text-lg fa-light fa-chevron-down group-hover:rotate-180"></i>
              </span>
              <div className="absolute hidden bg-white rounded-lg group-hover:block w-96">
                <div className="p-2 text-start">
                  <ul>
                    {group.map((index) => (
                      <li
                        className="p-3.5 text-sm hover:bg-slate-100 last:mb-0"
                        key={index.id}
                      >
                        <Link to="/">
                          <h2 className="font-bold">{index.title}</h2>
                          <span>{index.desc}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
            <li className="inline-block mx-2">
              <Link
                className="text-sm font-normal duration-300 ease-in hover:underline hover:underline-offset-1"
                to="/"
              >
                Find your New Career
              </Link>
            </li>
            <li className="hidden mx-2 xl:inline-block">
              <Link
                className="text-sm font-normal duration-300 ease-in hover:underline hover:underline-offset-1"
                to="/"
              >
                For Enterprise
              </Link>
            </li>
            <li className="inline-block mx-2 xl:hidden">
              <Link
                className="text-sm font-normal duration-300 ease-in hover:underline hover:underline-offset-1"
                to="/"
              >
                Enterprise
              </Link>
            </li>
            <li className="hidden mx-2 xl:inline-block">
              <Link
                className="text-sm font-normal duration-300 ease-in hover:underline hover:underline-offset-1"
                to="/"
              >
                For Universities
              </Link>
            </li>
            <li className="inline-block mx-2 xl:hidden">
              <Link
                className="text-sm font-normal duration-300 ease-in hover:underline hover:underline-offset-1"
                to="/"
              >
                Universities
              </Link>
            </li>
            <li className="inline-block mx-2">
              <Link
                className="text-sm font-normal text-blue-600 duration-300 ease-in hover:underline hover:underline-offset-1"
                to="/"
              >
                Log in
              </Link>
            </li>
          </ul>
          <button className="hidden p-4 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-md lg:inline-block hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Join for Free
          </button>
          <div className="inline-block lg:hidden">
            <i className="fa-regular fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
