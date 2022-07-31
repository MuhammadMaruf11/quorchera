import React from "react";
import { Link } from "react-router-dom";
import Heading from "./header.json";
import Special from "./specialize.json";

const About = () => {
  return (
    <>
      <div className="container py-6 mx-auto">
        <ul>
          {Heading.map((index) => {
            return (
              <li
                className="inline-block hover:underline hover:underline-offset-1 hover:text-[#0056D2] mr-4 last:mr-0"
                key={index.id}
              >
                <Link to="/">{index.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <hr />
      <div className="container flex gap-12 mx-auto py-7">
        <div className="w-2/3">
          <h2 className="text-2xl">About this Course</h2>
          <p className="mb-4 font-semibold">3,026,320 recent views</p>
          <div className="text-gray-800">
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
              {Special.map((index) => {
                return (
                  <li className="mb-7" key={index.id}>
                    {index.description}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="p-5 border">
            <h3 className="font-semibold uppercase mb-7">
              what you will learn
            </h3>
            <div className="flex px-5 mb-4">
              <div className="flex w-1/2">
                <i class="fa-regular mr-4 fa-check text-green-600 text-xl"></i>
                <span>
                  Build machine learning models in Python using popular machine
                  learning libraries NumPy & scikit-learn
                </span>
              </div>
              <div className="flex w-1/2">
                <i class="fa-regular mr-4 fa-check text-green-600 text-xl"></i>
                <span>
                  Build & train supervised machine learning models for
                  prediction & binary classification tasks, including linear
                  regression & logistic regression
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3">
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
              <Link to='/' className="text-blue-500 hover:underline hover:underline-offset-1">Machine Learning Specialization</Link>
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
