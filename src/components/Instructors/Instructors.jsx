import React from "react";
import { Link } from "react-router-dom";
import ins from "../../assets/img/instructors/SvgInstructor.png";
import { Profiles } from "./profile";

const Instructors = () => {
  return (
    <>
      <div className="container py-24 mx-auto">
        <h2 className="mb-1.5 text-2xl">Instructors</h2>
        <p className="font-semibold">
          <span>Instructor rating</span>
          <img className="inline-block mx-2" src={ins} alt="" />
          <span>4.97/5 (659 Ratings)</span>
          <i className="fa-regular fa-info ml-1 border border-gray-500 px-1 text-xs rounded-[50%]"></i>
        </p>
        <div className="grid grid-cols-2">
          {Profiles.map((index) => {
            return (
              <Link
                to={index.to}
                className="flex flex-wrap items-center my-4"
                key={index.id}
              >
                <div className="mr-8">
                  <img className="rounded-[50%]" src={index.image} alt="" />
                </div>
                <div className="mb-2">
                  <h4 className="mb-2 text-lg">
                    {index.name}
                    <span className="ml-2 text-xs font-bold text-white uppercase bg-blue-600 ">
                      {index.addition}
                    </span>
                  </h4>

                  <p className="mb-1 text-sm">{index.post}</p>
                  <p className="text-xs">{index.from}</p>
                  <p className="mt-3 mb-1 text-xs">
                    <i className="mr-1 fa-regular fa-user"></i>
                    <span><strong>{index.learners[0]}</strong>{index.learners[1]}</span>
                  </p>
                  <p className="text-xs ">
                    <i className="mr-1 fa-light fa-book-open-cover"></i>{" "}
                    <span><strong>{index.courses[0]}</strong>{index.courses[1]}</span>
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Instructors;
