import React from "react";
import { Link } from "react-router-dom";
import Analyst from "./analyst.json";
import Topics from './topics.json'
import Courses from './courses.json'
import Certificates from './certificate.json'

const Category = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container flex mx-auto">
        <div className="w-1/4 pr-28">
          <h4 className="mb-4 text-lg font-semibold text-black">
            Start or advance your career
          </h4>
          <ul>
            {Analyst.map((index) => (
              <li
                className="mb-2 text-sm hover:underline hover:underline-offset-1"
                key={index.id}
              >
                <Link to="/">{index.content}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/4 pr-28">
          <h4 className="mb-4 text-lg font-semibold text-black">
          Browse popular topics
          </h4>
          <ul>
            {Topics.map((index) => (
              <li
                className="mb-2 text-sm hover:underline hover:underline-offset-1"
                key={index.id}
              >
                <Link to="/">{index.content}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/4 pr-28">
          <h4 className="mb-4 text-lg font-semibold text-black">
          Popular courses and articles
          </h4>
          <ul>
            {Courses.map((index) => (
              <li
                className="mb-2 text-sm hover:underline hover:underline-offset-1"
                key={index.id}
              >
                <Link to="/">{index.content}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/4 pr-28">
          <h4 className="mb-4 text-lg font-semibold text-black">
          Earn a degree or certificate online
          </h4>
          <ul>
            {Certificates.map((index) => (
              <li
                className="mb-2 text-sm hover:underline hover:underline-offset-1"
                key={index.id}
              >
                <Link to="/">{index.content}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Category;
