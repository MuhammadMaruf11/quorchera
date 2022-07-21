import React from "react";
import { Link } from "react-router-dom";
import Rating from "./rating.json";

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
                <i className="text-yellow-300 fa-solid fa-star"></i>
                <i className="text-yellow-300 fa-solid fa-star"></i>
                <i className="text-yellow-300 fa-solid fa-star"></i>
                <i className="text-yellow-300 fa-solid fa-star"></i>
                <i className="text-yellow-300 fa-solid fa-star"></i>
              </div>
              <Link className="hover:underline underline-offset-1" to="/">
                231 reviews
              </Link>
            </div>
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
                <i className="text-yellow-300 fa-solid fa-star"></i>
                <i className="text-yellow-300 fa-solid fa-star"></i>
                <i className="text-yellow-300 fa-solid fa-star"></i>
                <i className="text-yellow-300 fa-solid fa-star"></i>
                <i className="text-yellow-300 fa-solid fa-star"></i>
              </div>
              <p className='mb-2'>
                by {index.lang} {index.date}
              </p>
              <p>{index.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
