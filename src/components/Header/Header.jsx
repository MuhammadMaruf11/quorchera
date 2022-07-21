import React from "react";
import { Link } from "react-router-dom";
// import logo from "../../assets/img/logo/logo.png";

const Header = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between px-4 py-3 ">
        <div className="w-2/5">
          <div className="inline-block mr-2 text-3xl font-bold text-blue-600">
            <Link to="/">
              {/* <img className='max-h-full' src={logo} alt="logo" /> */}
              quorchera
            </Link>
          </div>
          <div className="inline-block px-4 py-2 mr-2 text-sm font-semibold text-white bg-blue-500 border border-black rounded-md shadow-md cursor-pointer hover:bg-white hover:text-blue-600">
            Explore<i className="ml-2 fa-solid fa-chevron-down"></i>
          </div>
          <div className="relative inline-block search-bar">
            <input
              className="px-2 w-[480px] py-1.5 border-2 border-gray-400"
              type="text"
              placeholder="What do you want to learn?"
            />
            <i className="absolute bottom-0 right-0 p-3 font-normal text-white bg-blue-600 fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="w-2/5 text-end">
          <ul className="inline-block mx-2">
            <li className="inline-block mx-2">
              <Link
                className="text-sm font-normal duration-300 ease-in hover:underline hover:underline-offset-1"
                to="/"
              >
                Online Degrees
              </Link>
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
          <button className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Join for Free
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
