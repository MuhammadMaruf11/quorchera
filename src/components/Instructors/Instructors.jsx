import React from "react";
import { Link } from "react-router-dom";
import ins from "../../assets/img/instructors/SvgInstructor.png";
import { Profiles } from "./profile";
import { icons } from "./profile";

const Instructors = () => {
  return (
    <>
      <div className="container px-4 mx-auto xl:py-16 lg:py-12 xl:px-0">
        <h2 className="mb-1.5 text-2xl">Instructors</h2>
        <p className="mb-4 font-semibold">
          <span>Instructor rating</span>
          <img className="inline-block mx-2" src={ins} alt="" />
          <span>4.97/5 (659 Ratings)</span>
          <i className="fa-regular fa-info ml-1 border border-gray-500 px-1 text-xs rounded-[50%]"></i>
        </p>
        <div className="grid md:grid-cols-2 xl:px-0 lg:px-4">
          {Profiles.map((index) => {
            return (
              <Link
                to={index.to}
                className="items-center my-4 lg:flex-wrap lg:flex group"
                key={index.id}
              >
                <div className="mr-8">
                  <img className="rounded-[50%] lg:mb-0 mb-4" src={index.image} alt="" />
                </div>
                <div className="mb-2">
                  <h4 className="mb-2 text-lg group-hover:underline group-hover:underline-offset-1">
                    {index.name}
                    <span className="ml-2 text-xs font-bold text-white uppercase bg-blue-600 ">
                      {index.addition}
                    </span>
                  </h4>

                  <p className="mb-1 text-sm">{index.post}</p>
                  <p className="text-xs">{index.from}</p>
                  <p className="mt-3 mb-1 text-xs">
                    <i className="mr-1 fa-regular fa-user"></i>
                    <span>
                      <strong>{index.learners[0]}</strong>
                      {index.learners[1]}
                    </span>
                  </p>
                  <p className="text-xs ">
                    <i className="mr-1 fa-light fa-book-open-cover"></i>{" "}
                    <span>
                      <strong>{index.courses[0]}</strong>
                      {index.courses[1]}
                    </span>
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="pt-10">
          <h2 className="mb-5 text-2xl">Offered by</h2>
          <div className="xl:flex">
            {icons &&
              icons.map((index) => {
                return (
                  <div key={index.id} className="mb-8 md:pr-24 md:flex xl:mb-0 xl:w-1/2">
                    <div className="mr-5">
                      <Link to="/">
                        <img
                          className="min-w-[120px] xl:mb-0 mb-4"
                          src={index.image}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="asdf">
                      <h2 className="mb-3 text-2xl hover:underline hover:underline-offset-1">
                        <Link to="/">{index.name}</Link>
                      </h2>
                      <p className="text-sm">{index.desc1}</p>
                      <p className="mt-2 text-sm">{index.desc2}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructors;
