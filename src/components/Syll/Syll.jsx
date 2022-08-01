import React, { useState } from "react";
import ins from "../../assets/img/instructors/SvgInstructor.png";
import details from "./details.json";

const Syllabus = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <div className="container px-4 py-16 mx-auto xl:px-0">
        <div className="text-center">
          <h2 className="mb-2 text-2xl">
            Syllabus - What you will learn from this course
          </h2>
          <p className="font-semibold">
            <span>Content rating</span>
            <img className="inline-block mx-2" src={ins} alt="" />
            <span>99% (16,930 Ratings)</span>
            <i className="fa-regular fa-info ml-1 border border-gray-500 px-1 text-xs rounded-[50%]"></i>
          </p>
        </div>
      </div>
      <div className="container px-4 mx-auto xl:px-0">
        {details &&
          details.map((syllabus) => {
            return (
              <div className="flex flex-col justify-center w-full lg:flex-row" key={syllabus.id}>
                <div className="mb-20 lg:w-1/5 lg:mb-0">
                  <div className="text-center lg:w-1/3">
                    <h3 className="tracking-[.2em] md:text-base text-2xl md:font-normal font-bold md:block inline-block mb-5 uppercase">
                      {syllabus.week}
                    </h3>
                    <h2 className="inline-block text-2xl font-bold md:font-light md:text-6xl md:block">{syllabus.id}</h2>
                  </div>
                </div>
                <div className="w-11/12 mx-auto md:w-4/5">
                  <h4 className="flex flex-wrap items-center mb-8">
                    <i className="fa-light mr-4 rounded-[50%] text-center text-xl fa-clock bg-gradient-to-r h-10 w-10 leading-10 text-white opacity-75 from-red-600 to-yellow-500"></i>
                    <span className="font-semibold">{syllabus.title}</span>
                  </h4>
                  <h2 className="mb-8 text-xl font-light">
                    {syllabus.heading}
                  </h2>
                  <p className="mb-8">{syllabus.description}</p>
                  <p className="flex flex-wrap items-center pb-8 mb-4 border-b border-gray-300 last:border-none ">
                    <i className="fa-regular mr-4 rounded-[50%] text-center text-xl fa-circle-book-open bg-gradient-to-r h-10 w-10 leading-10 text-white opacity-75 from-cyan-400 to-teal-600"></i>
                    <span className="w-[200px] md:w-auto">{syllabus.total}</span>
                    <span
                      onClick={() => setIsToggled(!isToggled)}
                      className="ml-3 text-sm font-bold text-blue-700 cursor-pointer hover:underline hover:underline-offset-1"
                    >
                     {isToggled === false ? 'See All':'Show less'}
                    </span>
                  </p>
                  {isToggled && (
                    <div>
                      <h4 className="mb-8 font-bold">
                        <i className="fa-solid fa-play rounded-[50%] text-xs h-6 w-6 leading-6 text-center mr-4 border border-blue-400 text-blue-400"></i>
                        <span className="font-bold">{syllabus.videos}</span>
                      </h4>
                      <ul className="mb-4 border-b border-gray-300">
                        {syllabus &&
                          syllabus.videoList.map((videoList) => {
                            return (
                              <li className="mb-7" key={syllabus.id}>
                                <span className="mr-2">{videoList.video}</span>
                                <span>{videoList.duration}</span>
                              </li>
                            );
                          })}
                      </ul>
                      {syllabus.reading &&
                        syllabus.reading.map((read) => {
                          return (
                            <div key={syllabus.id}>
                              <h4 className="mb-8 font-bold">
                                <i class="fa-regular fa-book-open-cover  rounded-[50%] text-xs h-6 w-6 leading-6 text-center mr-4 border border-blue-400 text-blue-400"></i>
                                <span>{read.heading}</span>
                              </h4>
                              <ul>
                                <li className="mb-7">
                                  <span className="mr-2">{read.title}</span>
                                  <span>{read.duration}</span>
                                </li>
                              </ul>
                            </div>
                          );
                        })}
                      <h4 className="mb-8 font-bold">
                        <i class="fa-solid fa-square-list  rounded-[50%] text-xs h-6 w-6 leading-6 text-center mr-4 border border-blue-400 text-blue-400"></i>
                        <span>{syllabus.practices}</span>
                      </h4>
                      <ul className="mb-4 border-b border-gray-300 last:border-none">
                        {syllabus &&
                          syllabus.practiceExercise.map((exers) => {
                            return (
                              <li className="mb-7" key={syllabus.id}>
                                <span className="mr-2">{exers.practice}</span>
                                <span>{exers.duration}</span>
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Syllabus;
