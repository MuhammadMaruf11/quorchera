import React, { useState } from "react";
import { Link } from "react-router-dom";
import Heading from "./header.json";
import Special from "./specialize.json";
import skill from './skills.json';

const About = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <>
      <div className="container py-6 mx-auto">
        <ul className="w-11/12 mx-auto md:w-4/5 xl:w-full xl:mx-0">
          {Heading.map((index) => {
            return (
              <li
                className="inline-block hover:underline hover:underline-offset-1 hover:text-[#0056D2] md:mb-0 mb-2 mr-4 last:mr-0"
                key={index.id}
              >
                <Link to="/">{index.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <hr />
      <div className="container gap-12 mx-auto xl:flex py-7">
        <div className="w-11/12 mx-auto xl:w-2/3 xl:mx-0 md:w-4/5">
          <h2 className="text-2xl">About this Course</h2>
          <p className="mb-4 font-semibold">3,026,320 recent views</p>
          <div>
            <p>
              In the first course of the Machine Learning Specialization, you
              will:
            </p>
            <ul>
              <li className="my-5">
                <ul>
                  <li>
                    • Build machine learning models in Python using popular
                    machine learning libraries NumPy and scikit-learn.
                  </li>
                  <li>
                    • Build and train supervised machine learning models for
                    prediction and binary classification tasks, including linear
                    regression and logistic regression
                  </li>
                </ul>
              </li>
            </ul>
            {isToggled && (
              <>
                <div className="text-gray-800">
                  <ul>
                    {Special.map((index) => {
                      return (
                        <li className="mb-7" key={index.id}>
                          {index.description}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </>
            )}
            <span
              onClick={() => setIsToggled(!isToggled)}
              className="ml-3 font-semibold text-blue-700 uppercase cursor-pointer hover:underline hover:underline-offset-1"
            >
              {isToggled === false ? "Show All" : "Show less"}
            </span>
            <div className="p-2 border md:p-5">
              <h3 className="font-semibold uppercase mb-7">
                what you will learn
              </h3>
              <div className="mb-4 lg:flex md:px-5">
                <div className="flex mb-8 lg:mb-0 lg:w-1/2">
                  <i class="fa-regular mr-4 fa-check text-green-600 text-xl"></i>
                  <span>
                    Build machine learning models in Python using popular
                    machine learning libraries NumPy & scikit-learn
                  </span>
                </div>
                <div className="flex lg:w-1/2">
                  <i class="fa-regular mr-4 fa-check text-green-600 text-xl"></i>
                  <span>
                    Build & train supervised machine learning models for
                    prediction & binary classification tasks, including linear
                    regression & logistic regression
                  </span>
                </div>
              </div>
            </div>
            <div className="p-2 mt-5 border md:p-5">
              <h3 className="font-semibold uppercase mb-7">
                SKILLS YOU WILL GAIN
              </h3>
              <div className="flex mb-4 md:px-5">
                <ul>
                  {skill && skill.map(index=>{
                    return(
                      <li className="inline-block px-4 py-1 mx-2 my-1 bg-gray-200 rounded-3xl" key={index.id}>{index.title}</li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-11/12 mx-auto mt-16 xl:w-1/3 xl:mx-0 md:w-4/5 xl:mt-0">
          <div className="flex mb-10">
            <div className="px-2.5 my-1 py-1 mr-3.5 border border-black rounded-full">
              <i class="fa-brands fa-wpforms inline-block text-2xl"></i>
            </div>
            <div>
              <h2 className="text-xl font-bold">Flexible deadlines</h2>
              <p>Reset deadlines in accordance to your schedule.</p>
            </div>
          </div>
          <div className="flex mb-10">
            <div className="px-2 my-1 py-1 mr-3.5 border border-black rounded-full">
              <i class="fa-regular fa-screencast text-2xl"></i>
            </div>
            <div>
              <h2 className="text-xl font-bold">Shareable Certificate</h2>
              <p>Earn a Certificate upon completion</p>
            </div>
          </div>
          <div className="flex mb-10 flex-nowrap">
            <div className="px-2 my-1 py-1 mr-3.5 border border-black rounded-full">
              <i class="fa-regular fa-globe text-2xl"></i>
            </div>
            <div>
              <h2 className="text-xl font-bold">100% online</h2>
              <p>Start instantly and learn at your own schedule.</p>
            </div>
          </div>
          <div className="flex mb-10 flex-nowrap">
            <div className="px-2 my-1 py-1 mr-3.5  border border-black rounded-full">
              <i class="fa-regular fa-rectangle-history text-2xl"></i>
            </div>
            <div>
              <h2 className="text-xl font-bold">Course 1 of 3 in the</h2>
              <Link
                to="/"
                className="text-blue-500 hover:underline hover:underline-offset-1"
              >
                Machine Learning Specialization
              </Link>
            </div>
          </div>
          <div className="flex items-start mb-10 flex-nowrap">
            <div className="pl-1.5 my-1 pb-1 mr-3.5 border border-black rounded-full">
              <i class="fa-regular pl-1.5 pb-1 fa-signal-good text-2xl"></i>
            </div>
            <div>
              <h2 className="text-xl font-bold">Beginner Level</h2>
              <p className="mb-2">
                Basic coding (for loops, functions, if/else statements) & high
                school-level math (arithmetic, algebra)
              </p>
              <p>Other math concepts will be explained</p>
            </div>
          </div>
          <div className="flex items-center mb-10 flex-nowrap">
            <div className="px-2 my-1 py-1 mr-3.5  border border-black rounded-full">
              <i class="fa-regular fa-clock text-2xl"></i>
            </div>
            <div>
              <h2 className="text-xl font-bold">
                Approx. 33 hours to complete
              </h2>
            </div>
          </div>
          <div className="flex mb-10 flex-nowrap">
            <div className="px-2 my-1 py-1 mr-3.5  border border-black rounded-full">
              <i class="fa-regular fa-message-dots text-2xl"></i>
            </div>
            <div>
              <h2 className="text-xl font-bold">English</h2>
              <p>Subtitles: English</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
