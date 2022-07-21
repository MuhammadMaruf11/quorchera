import React from "react";
import images from "../../utilities/learning";
import { Link } from "react-router-dom";
import Offer from "./offer.json";

const Learning = () => {
  return (
    <div className="py-11">
      <div className="container flex justify-between py-16 mx-auto">
        <div className="w-1/2">
          <h2 className="mb-4 text-2xl">
            About the Machine Learning Specialization
          </h2>
          <p className="mb-2 text-sm">
            The Machine Learning Specialization is a foundational online program
            created in collaboration between DeepLearning.AI and Stanford
            Online. This beginner-friendly program will teach you the
            fundamentals of machine learning and how to use these techniques to
            build real-world AI applications.
          </p>
          <p className="text-sm">
            This Specialization is taught by Andrew Ng, an AI visionary who has
            led critical research at Stanford University and groundbreaking work
            at Google Brain, Baidu, and Landing.AI to advance the AI field. This
            3-course Specialization is an updated version of Andrew’s pioneering
            Machine Learning course, rated 4.9 out of 5 and taken by over 4.8
            million learners since it launched in 2012. It provides a broad
            introduction to modern machine learning, including supervised
            learning (multiple linear regression, logistic regression, neural
            networks, and decision trees), unsupervised learning (clustering,
            dimensionality reduction, recommender systems), and some of the best
            practices used in Silicon Valley for artificial intelligence and
            machine learning innovation (evaluating and tuning models, taking a
            data-centric approach to improving performance, and more.) By the
            end of this Specialization, you will have mastered key concepts and
            gained the practical know-how to quickly and powerfully apply
            machine learning to challenging real-world problems. If you’re
            looking to break into AI or build a career in machine learning, the
            new Machine Learning Specialization is the best place to start.
          </p>
        </div>
        <div className="w-1/2 ">
          <img className="ml-auto" src={images.learning} alt="" />
        </div>
      </div>
      <div className="container flex justify-between pt-16 pb-8 mx-auto">
        <div className="w-1/2">
          <h2 className="mb-2 text-2xl">Start Learning Today</h2>
          <Link
            to="/"
            className="font-semibold text-blue-600 hover:underline hover:underline-offset-1"
          >
            Financial aid available
          </Link>
          <ul className="mt-2 mb-8">
            {Offer.map((index) => (
              <li className="mb-1" key={index.id}>
                <i className="mr-2 text-lg fa-solid fa-check"></i>
                {index.content}
              </li>
            ))}
          </ul>
          <button className="px-4 py-2 w-[180px] h-[70px] font-semibold mb-10 text-white bg-blue-500 rounded-md shadow-md hover:bg-gray-600">
            Enroll for Free <br /> starts Jul 21
          </button>
          <p><strong>61,398</strong> already enrolled</p>
        </div>
        <div className="w-1/2">
          <p className="inline-block text-lg">
            Shareable on
            <img className="inline-block ml-1 " src={images.linkedin} alt="" />
          </p>
          <img className="max-h-[250px] my-4" src={images.certificate} alt="" />
          <p className="max-w-[430px]">
            You can share your Course Certificates in the Certifications section
            of your LinkedIn profile, on printed resumes, CVs, or other
            documents.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Learning;
