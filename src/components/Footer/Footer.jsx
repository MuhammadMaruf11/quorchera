import React from "react";
import { Link } from "react-router-dom";
import Quorchera from "./quorchera.json";
import Community from "./community.json";
import More from "./more.json";
import images from "../../utilities/footer";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="container flex flex-wrap px-4 py-16 mx-auto gap-y-4 xl:px-0">
        <div className="w-1/2 lg:w-1/4 md:w-1/2">
          <h4 className="mb-4 text-lg font-semibold text-black">Quorchera</h4>
          <ul>
            {Quorchera.map((index) => (
              <li
                className="mb-2 text-sm hover:underline hover:underline-offset-1"
                key={index.id}
              >
                <Link to="/">{index.content}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2 pl-4 md:pl-0 lg:w-1/4 md:w-1/2">
          <h4 className="mb-4 text-lg font-semibold text-black">Community</h4>
          <ul>
            {Community.map((index) => (
              <li
                className="mb-2 text-sm hover:underline hover:underline-offset-1"
                key={index.id}
              >
                <Link to="/">{index.content}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full lg:w-1/4 md:w-1/2">
          <h4 className="mb-4 text-lg font-semibold text-black">More</h4>
          <ul>
            {More.map((index) => (
              <li
                className="mb-2 text-sm hover:underline hover:underline-offset-1"
                key={index.id}
              >
                <Link to="/">{index.content}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full lg:w-1/4 md:w-1/2">
          <Link to="/">
            <img className="w-[150px] h-[45px] md:block md:mr-0 mr-8 inline-block" src={images.app} alt="" />
          </Link>
          <Link to="/">
            <img
              className="w-[150px] h-[45px] md:block inline-block md:mt-4 md:mb-8"
              src={images.play}
              alt=""
            />
          </Link>
          <img className="w-[82px] h-[120px] md:m-0 mt-8" src={images.certified} alt="" />
        </div>
      </div>
      <div className="container flex flex-wrap justify-center py-16 mx-auto border-t border-gray-400 first-letter:w-full">
        <div className="mb-4 md:mb-0 md:w-1/2">
          <span className="text-sm md:text-start">
            © 2022 Coursera Inc. All rights reserved.
          </span>
        </div>
        <div className="mb-4 md:mb-0 md:w-1/2 md:text-end">
          <ul>
            <li className="inline-block mr-4 text-white bg-black rounded-full">
              <Link to="/">
                <i className="text-lg leading-7 text-center fa-brands fa-facebook-f w-7 h-7"></i>
              </Link>
            </li>
            <li className="inline-block mr-4 text-white bg-black rounded-full">
              <Link to="/">
                <i className="text-lg leading-7 text-center fa-brands fa-linkedin-in w-7 h-7"></i>
              </Link>
            </li>
            <li className="inline-block mr-4 text-white bg-black rounded-full">
              <Link to="/">
                <i className="text-lg leading-7 text-center fa-brands fa-twitter w-7 h-7"></i>
              </Link>
            </li>
            <li className="inline-block mr-4 text-white bg-black rounded-full">
              <Link to="/">
                <i className="text-lg leading-7 text-center fa-brands fa-youtube w-7 h-7"></i>
              </Link>
            </li>
            <li className="inline-block mr-4 text-white bg-black rounded-full">
              <Link to="/">
                <i className="text-lg leading-7 text-center fa-brands fa-instagram w-7 h-7"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
