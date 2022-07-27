import React from "react";
import { Link } from "react-router-dom";
import group from "./group.json";

const Header = () => {
  return (
    <>
      <div className="fixed flex flex-row items-center justify-between w-full px-4 py-1.5 bg-white ">
        <div className="w-2/5">
          <div className="inline-block mr-2 text-3xl font-bold text-blue-700">
            <Link to="/">quorchera</Link>
          </div>
          <div className="inline-block px-3 py-2 mr-2 text-sm font-semibold text-white transition-all ease-out bg-blue-600 border-2 border-black rounded-md shadow-md cursor-default delay-800 hover:bg-white hover:text-blue-700">
            Explore<i className="ml-2 text-xs fa-solid fa-chevron-down"></i>
          </div>
          <div className="relative inline-block search-bar">
            <input
              className="px-2 w-[480px] py-1.5 border-2 border-gray-400"
              type="text"
              placeholder="What do you want to learn?"
            />
            <i className="absolute bottom-0 right-0 p-3 font-normal text-white bg-blue-600 cursor-pointer fa-thin fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="w-2/5 text-end">
          <ul className="inline-block mx-2">
            <li className="relative inline-block mx-2 transition duration-300 ease-in-out group">
              <span className="flex items-center text-sm font-normal transition duration-300 ease-in cursor-pointer">
                Online Degrees
                <i className="ml-1.5 text-lg fa-light fa-chevron-down group-hover:rotate-180"></i>
              </span>
              <div className="absolute hidden bg-white rounded-lg group-hover:block w-96">
                <div className="p-2 text-start">
                  <ul>
                    {group.map((index) => (
                      <li className="p-3.5 text-sm hover:bg-slate-100 last:mb-0" key={index.id}>
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
            <li className="inline-block mx-2">
              <Link
                className="text-sm font-normal duration-300 ease-in hover:underline hover:underline-offset-1"
                to="/"
              >
                For Enterprise
              </Link>
            </li>
            <li className="inline-block mx-2">
              <Link
                className="text-sm font-normal duration-300 ease-in hover:underline hover:underline-offset-1"
                to="/"
              >
                For Universities
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
          <button className="p-4 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Join for Free
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
