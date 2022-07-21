import React from "react";
import { Link } from "react-router-dom";
import Quorchera from "./quorchera.json";
import Community from "./community.json";
import More from "./more.json";
import images from "../../utilities/footer";

const Footer = () => {
  return (
    <>
      <div className="container flex py-16 mx-auto">
        <div className="w-1/4">
          <h4 className="mb-4 text-lg font-bold text-black">Quorchera</h4>
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
        <div className="w-1/4">
          <h4 className="mb-4 text-lg font-bold text-black">Community</h4>
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
        <div className="w-1/4">
          <h4 className="mb-4 text-lg font-bold text-black">More</h4>
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
        <div className="w-1/4">
          <Link to="/">
            <img className="w-[150px] h-[45px]" src={images.app} alt="" />
          </Link>
          <Link to="/">
            <img
              className="w-[150px] h-[45px] mt-4 mb-8"
              src={images.play}
              alt=""
            />
          </Link>
          <img className="w-[82px] h-[120px]" src={images.certified} alt="" />
        </div>
      </div>
      <div className="container flex py-16 mx-auto border-t border-gray-400 first-letter:w-full">
        <div className="w-1/2">
          <span className="text-sm">
            © 2022 Coursera Inc. All rights reserved.
          </span>
        </div>
        <div className="w-1/2 text-end">
          <ul>
            <li className="inline-block mr-4 text-white bg-black rounded-full">
              <Link to="/">
                <i className="leading-7 text-center fa-brands fa-facebook-f w-7 h-7"></i>
              </Link>
            </li>
            <li className="inline-block mr-4 text-white bg-black rounded-full">
              <Link to="/">
                <i class="fa-brands fa-linkedin-in w-7 h-7 leading-7 text-center"></i>
              </Link>
            </li>
            <li className="inline-block mr-4 text-white bg-black rounded-full">
              <Link to="/">
              <i class="fa-brands fa-twitter w-7 h-7 leading-7 text-center"></i>
              </Link>
            </li>
            <li className="inline-block mr-4 text-white bg-black rounded-full">
              <Link to="/">
              <i class="fa-brands fa-youtube w-7 h-7 leading-7 text-center"></i>
              </Link>
            </li>
            <li className="inline-block mr-4 text-white bg-black rounded-full">
              <Link to="/">
              <i class="fa-brands fa-instagram w-7 h-7 leading-7 text-center"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
