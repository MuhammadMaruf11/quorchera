import React from "react";
import { Link } from "react-router-dom";
import Rating from "./rating.json";
import stars from "./stars.json";

const Reviews = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container flex mx-auto">
        <div className="w-1/3">
          <h2 className="mb-8 text-2xl font-bold">Reviews</h2>
          <div className="flex items-center mb-8">
            <h2 className="mr-3 text-5xl font-bold">4.9</h2>
            <div className="flex flex-col">
              <div className="p-0 m-0">
                <i className="text-yellow-500 fa-solid fa-star"></i>
                <i className="text-yellow-500 fa-solid fa-star"></i>
                <i className="text-yellow-500 fa-solid fa-star"></i>
                <i className="text-yellow-500 fa-solid fa-star"></i>
                <i className="text-yellow-500 fa-solid fa-star"></i>
              </div>
              <Link className="hover:underline underline-offset-1" to="/">
                231 reviews
              </Link>
            </div>
          </div>
          <div className="my-2">
            {stars.map((index) => (
              <p className="flex items-center">
                <span>{index.stars}</span>
                <div className="relative w-1/3 h-2 mx-2 bg-gray-200">
                  <div
                    style={{ width: index.percent }}
                    className={`absolute h-2 top-0 left-0 bg-yellow-500`}
                  ></div>
                </div>
                <span>{index.percent}</span>
              </p>
            ))}
          </div>
        </div>
        <div className="w-2/3 pr-20">
          <h4 className="text-sm font-semibold mb-7 pt-14">
            TOP REVIEWS FROM SUPERVISED MACHINE LEARNING: REGRESSION AND
            CLASSIFICATION
          </h4>
          {Rating.map((index) => (
            <div key={index.id} className="mb-8">
              <div className="mb-1">
                <i className="text-yellow-500 fa-solid fa-star"></i>
                <i className="text-yellow-500 fa-solid fa-star"></i>
                <i className="text-yellow-500 fa-solid fa-star"></i>
                <i className="text-yellow-500 fa-solid fa-star"></i>
                <i className="text-yellow-500 fa-solid fa-star"></i>
              </div>
              <p className="mb-2">
                by {index.lang} {index.date}
              </p>
              <p>{index.desc}</p>
            </div>
          ))}
          <div className="mt-12">
            <Link
              className="px-5 py-3 text-lg font-bold text-blue-700 transition-all duration-150 ease-in border border-blue-700 hover:bg-blue-700 hover:text-white"
              to="/"
            >
              View all reviews
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
