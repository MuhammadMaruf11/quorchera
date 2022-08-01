import React from "react";
import { Link } from "react-router-dom";
import images from "../../utilities/banner";

const Banner = () => {
  return (
    <div className="pb-16 text-white pt-28 bg-gradient-to-r from-teal-900 to-cyan-500">
      <div className="container h-full mx-auto lg:flex justify-evenly xl:justify-between">
        <div className="w-11/12 mx-auto md:w-4/5 xl:w-3/5 lg:w-2/5">
          <p className="mb-8 text-sm">
            <Link
              className="font-semibold hover:underline hover:underline-offset-1"
              to="/"
            >
              Browse
            </Link>
            <i className="mx-4 text-xs fa-thin fa-chevron-right"></i>
            <Link
              className="font-semibold hover:underline hover:underline-offset-1"
              to="/"
            >
              Data Science
            </Link>
            <i className="mx-4 text-xs fa-thin fa-chevron-right"></i>
            <Link
              className="font-semibold hover:underline hover:underline-offset-1"
              to="/"
            >
              Machine Learning
            </Link>
          </p>
          <p>
            This course is part of the
            <Link
              className="ml-1 font-bold hover:underline hover:underline-offset-1"
              to="/"
            >
              Machine Learning Specialization
            </Link>
          </p>
          <h1 className="mt-3 mb-5 text-4xl font-bold">
            Supervised Machine Learning: <br />
            Regression and Classification
          </h1>
          <div className="flex items-center mb-8">
            <div className="p-0 m-0 text-xs">
              <i className="mr-1 text-yellow-500 fa-solid fa-star"></i>
              <i className="mr-1 text-yellow-500 fa-solid fa-star"></i>
              <i className="mr-1 text-yellow-500 fa-solid fa-star"></i>
              <i className="mr-1 text-yellow-500 fa-solid fa-star"></i>
              <i className="text-yellow-300 fa-solid fa-star"></i>
            </div>
            <span className="mx-2 text-yellow-500">4.9</span>
            <span>
              <Link
                className="mr-2 hover:underline hover:underline-offset-1"
                to="/"
              >
                1,174 rating
              </Link>
              |
            </span>
            <span>
              <i className="mx-2 text-yellow-500 fa-solid fa-thumbs-up"></i>
              <Link className="hover:underline hover:underline-offset-1" to="/">
                99%
              </Link>
            </span>
          </div>
          <div className="flex flex-wrap items-center mb-8">
            <Link to="/">
              <img className="rounded-full" src={images.profile} alt="" />
            </Link>
            <div className="order-3 mt-4 md:mx-2 md:mt-0 md:order-2">
              <Link to="/">
                <span>Andrew NG</span>
                <span className="ml-2 underline underline-offset-1">
                  +3 more instructors
                </span>
              </Link>
            </div>
            <div className="relative order-2 ml-4 md:order-3 group md:m-0">
              <Link
                to="/"
                className="px-2 text-[10px] font-bold uppercase bg-blue-600 border border-white"
              >
                top instructors
              </Link>
              <div className="absolute hidden w-48 text-white bg-black group-hover:block -left-10 bottom-10">
                <i class="fa-solid fa-caret-down text-black text-3xl -bottom-5 left-1/2 -translate-x-1/2 absolute"></i>
                <p className="px-6 py-2 text-xs ">
                  Andrew Ng is rated among the top instructors on Coursera.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center mb-6">
            <Link
              to="/"
              className="px-10 py-3 mr-6 font-bold text-center duration-300 ease-in-out bg-red-400 md:text-lg hover:bg-red-700"
            >
              Enroll for Free <br />
              <span className="text-xs">starts Jul 26</span>
            </Link>
            <Link
              to="/"
              className="text-xs font-bold hover:underline hover:underline-offset-1"
            >
              Financial aid available
            </Link>
          </div>
          <div className="mb-10 text-lg">
            <strong>67,511</strong> already enrolled
          </div>
        </div>
        <div className="w-11/12 mx-auto lg:w-2/5 md:w-4/5">
          <p className="mx-4 mb-4">Offered by</p>
          <img src={images.deepLearning} alt="" />
          <img src={images.stanford} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
