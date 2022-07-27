import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import icon from "../../assets/img/courses/Icon.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "react-tabs/style/react-tabs.css";

const Courses = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div className="pt-16 pb-24 border-b border-gray-300">
      <div className="container mx-auto">
        <Tabs>
          <TabList className="border-b border-gray-300">
            <Tab className="inline-block mr-3 cursor-pointer focus:border-b-4 hover:text-blue-700 focus:border-blue-700 focus:text-blue-700">
              <div className="px-4 pt-2 pb-4 font-semibold focus:outline-4 focus:outline-offset-4 focus:outline">
                Related Courses
              </div>
            </Tab>
            <Tab className="inline-block mr-3 cursor-pointer focus:border-b-4 hover:text-blue-700 focus:border-blue-700 focus:text-blue-700">
              <div className="px-4 pt-2 pb-4 font-semibold focus:outline-4 focus:outline-offset-4 focus:outline">
                Degress
              </div>
            </Tab>
            <Tab className="inline-block cursor-pointer focus:border-b-4 hover:text-blue-700 focus:border-blue-700 focus:text-blue-700">
              <div className="px-4 pt-2 pb-4 font-semibold focus:outline-4 focus:outline-offset-4 focus:outline focus:outline-black">
                Recommended
              </div>
            </Tab>
          </TabList>

          <TabPanel>
            <div className="container mx-auto">
              <h2 className="py-16 text-2xl">
                Other courses in this Specialization
              </h2>
              <div className="flex justify-center">
                <Link
                  to="/"
                  className="relative transition-all ease-in duration-300 mx-1 shadow-lg rounded-md h-[386px] w-[336px] hover:shadow-2xl"
                >
                  <div className=" h-[132px] text-center text-white bg-red-900">
                    <h2 className="py-4 text-2xl font-semibold capitalize">
                      advanced learning <br /> algorithms
                    </h2>
                  </div>
                  <div className="absolute p-2 bg-white rounded-sm left-5 top-24">
                    <img className="w-16 h-16" src={icon} alt="" />
                  </div>
                  <div className="flex flex-col px-6 py-16">
                    <h2 className="mb-2 text-xl capitalize">
                      advanced learning algorithms
                    </h2>
                    <p>DeepLearning.Ai</p>
                    <span className="absolute text-xs font-bold uppercase bottom-7 left-5">
                      1 course
                    </span>
                  </div>
                </Link>
                <Link
                  to="/"
                  className="relative transition-all ease-in duration-300 mx-1 shadow-lg rounded-md h-[386px] w-[336px] hover:shadow-2xl"
                >
                  <div className="h-[132px] text-center text-white bg-red-900">
                    <h2 className="text-2xl font-semibold capitalize ">
                      unsupervised <br /> learning and <br /> recommender <br />{" "}
                      systems
                    </h2>
                  </div>
                  <div className="absolute p-2 bg-white rounded-sm left-5 top-24">
                    <img className="w-16 h-16" src={icon} alt="" />
                  </div>
                  <div className="flex flex-col px-6 py-16">
                    <h2 className="mb-2 text-xl capitalize">
                      unsupervised learning, recommenders, reinforcement
                      learning
                    </h2>
                    <p>DeepLearning.Ai</p>
                    <span className="absolute text-xs font-bold uppercase bottom-7 left-5">
                      1 course
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="container">
              <h2 className="py-16 text-2xl">Earn your Degree</h2>
              <div className="flex items-center justify-center">
                <Slider {...settings}>
                  <div>
                    <Link
                      to="/"
                      className="relative transition-all ease-in duration-300 mx-1 shadow-lg rounded-md h-[386px] w-[336px] hover:shadow-2xl"
                    >
                      <div className=" h-[132px] text-center text-white bg-red-900">
                        <h2 className="py-4 text-2xl font-semibold capitalize">
                          advanced learning <br /> algorithms
                        </h2>
                      </div>
                      <div className="absolute p-2 bg-white rounded-sm left-5 top-24">
                        <img className="w-16 h-16" src={icon} alt="" />
                      </div>
                      <div className="flex flex-col px-6 py-16">
                        <h2 className="mb-2 text-xl capitalize">
                          advanced learning algorithms
                        </h2>
                        <p>DeepLearning.Ai</p>
                        <span className="absolute text-xs font-bold uppercase bottom-7 left-5">
                          1 course
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/"
                      className="relative transition-all ease-in duration-300 mx-1 shadow-lg rounded-md h-[386px] w-[336px] hover:shadow-2xl"
                    >
                      <div className="h-[132px] text-center text-white bg-red-900">
                        <h2 className="text-2xl font-semibold capitalize ">
                          unsupervised <br /> learning and <br /> recommender{" "}
                          <br /> systems
                        </h2>
                      </div>
                      <div className="absolute p-2 bg-white rounded-sm left-5 top-24">
                        <img className="w-16 h-16" src={icon} alt="" />
                      </div>
                      <div className="flex flex-col px-6 py-16">
                        <h2 className="mb-2 text-xl capitalize">
                          unsupervised learning, recommenders, reinforcement
                          learning
                        </h2>
                        <p>DeepLearning.Ai</p>
                        <span className="absolute text-xs font-bold uppercase bottom-7 left-5">
                          1 course
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/"
                      className="relative transition-all ease-in duration-300 mx-1 shadow-lg rounded-md h-[386px] w-[336px] hover:shadow-2xl"
                    >
                      <div className=" h-[132px] text-center text-white bg-red-900">
                        <h2 className="py-4 text-2xl font-semibold capitalize">
                          advanced learning <br /> algorithms
                        </h2>
                      </div>
                      <div className="absolute p-2 bg-white rounded-sm left-5 top-24">
                        <img className="w-16 h-16" src={icon} alt="" />
                      </div>
                      <div className="flex flex-col px-6 py-16">
                        <h2 className="mb-2 text-xl capitalize">
                          advanced learning algorithms
                        </h2>
                        <p>DeepLearning.Ai</p>
                        <span className="absolute text-xs font-bold uppercase bottom-7 left-5">
                          1 course
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/"
                      className="relative transition-all ease-in duration-300 mx-1 shadow-lg rounded-md h-[386px] w-[336px] hover:shadow-2xl"
                    >
                      <div className="h-[132px] text-center text-white bg-red-900">
                        <h2 className="text-2xl font-semibold capitalize ">
                          unsupervised <br /> learning and <br /> recommender{" "}
                          <br /> systems
                        </h2>
                      </div>
                      <div className="absolute p-2 bg-white rounded-sm left-5 top-24">
                        <img className="w-16 h-16" src={icon} alt="" />
                      </div>
                      <div className="flex flex-col px-6 py-16">
                        <h2 className="mb-2 text-xl capitalize">
                          unsupervised learning, recommenders, reinforcement
                          learning
                        </h2>
                        <p>DeepLearning.Ai</p>
                        <span className="absolute text-xs font-bold uppercase bottom-7 left-5">
                          1 course
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/"
                      className="relative transition-all ease-in duration-300 mx-1 shadow-lg rounded-md h-[386px] w-[336px] hover:shadow-2xl"
                    >
                      <div className=" h-[132px] text-center text-white bg-red-900">
                        <h2 className="py-4 text-2xl font-semibold capitalize">
                          advanced learning <br /> algorithms
                        </h2>
                      </div>
                      <div className="absolute p-2 bg-white rounded-sm left-5 top-24">
                        <img className="w-16 h-16" src={icon} alt="" />
                      </div>
                      <div className="flex flex-col px-6 py-16">
                        <h2 className="mb-2 text-xl capitalize">
                          advanced learning algorithms
                        </h2>
                        <p>DeepLearning.Ai</p>
                        <span className="absolute text-xs font-bold uppercase bottom-7 left-5">
                          1 course
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/"
                      className="relative transition-all ease-in duration-300 mx-1 shadow-lg rounded-md h-[386px] w-[336px] hover:shadow-2xl"
                    >
                      <div className="h-[132px] text-center text-white bg-red-900">
                        <h2 className="text-2xl font-semibold capitalize ">
                          unsupervised <br /> learning and <br /> recommender{" "}
                          <br /> systems
                        </h2>
                      </div>
                      <div className="absolute p-2 bg-white rounded-sm left-5 top-24">
                        <img className="w-16 h-16" src={icon} alt="" />
                      </div>
                      <div className="flex flex-col px-6 py-16">
                        <h2 className="mb-2 text-xl capitalize">
                          unsupervised learning, recommenders, reinforcement
                          learning
                        </h2>
                        <p>DeepLearning.Ai</p>
                        <span className="absolute text-xs font-bold uppercase bottom-7 left-5">
                          1 course
                        </span>
                      </div>
                    </Link>
                  </div>
                </Slider>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
          <div className="container">
              <h2 className="py-16 text-2xl">People interested in this course also viewed</h2>
              <div className="flex items-center justify-center">
                <Slider {...settings}>
                  <div>
                    <Link
                      to="/"
                      className="relative transition-all ease-in duration-300 mx-1 shadow-lg rounded-md h-[386px] w-[336px] hover:shadow-2xl"
                    >
                      <div className=" h-[132px] text-center text-white bg-red-900">
                        <h2 className="py-4 text-2xl font-semibold capitalize">
                          advanced learning <br /> algorithms
                        </h2>
                      </div>
                      <div className="absolute p-2 bg-white rounded-sm left-5 top-24">
                        <img className="w-16 h-16" src={icon} alt="" />
                      </div>
                      <div className="flex flex-col px-6 py-16">
                        <h2 className="mb-2 text-xl capitalize">
                          advanced learning algorithms
                        </h2>
                        <p>DeepLearning.Ai</p>
                        <span className="absolute text-xs font-bold uppercase bottom-7 left-5">
                          1 course
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/"
                      className="relative transition-all ease-in duration-300 mx-1 shadow-lg rounded-md h-[386px] w-[336px] hover:shadow-2xl"
                    >
                      <div className="h-[132px] text-center text-white bg-red-900">
                        <h2 className="text-2xl font-semibold capitalize ">
                          unsupervised <br /> learning and <br /> recommender
                          <br /> systems
                        </h2>
                      </div>
                      <div className="absolute p-2 bg-white rounded-sm left-5 top-24">
                        <img className="w-16 h-16" src={icon} alt="" />
                      </div>
                      <div className="flex flex-col px-6 py-16">
                        <h2 className="mb-2 text-xl capitalize">
                          unsupervised learning, recommenders, reinforcement
                          learning
                        </h2>
                        <p>DeepLearning.Ai</p>
                        <span className="absolute text-xs font-bold uppercase bottom-7 left-5">
                          1 course
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/"
                      className="relative transition-all ease-in duration-300 mx-1 shadow-lg rounded-md h-[386px] w-[336px] hover:shadow-2xl"
                    >
                      <div className=" h-[132px] text-center text-white bg-red-900">
                        <h2 className="py-4 text-2xl font-semibold capitalize">
                          advanced learning <br /> algorithms
                        </h2>
                      </div>
                      <div className="absolute p-2 bg-white rounded-sm left-5 top-24">
                        <img className="w-16 h-16" src={icon} alt="" />
                      </div>
                      <div className="flex flex-col px-6 py-16">
                        <h2 className="mb-2 text-xl capitalize">
                          advanced learning algorithms
                        </h2>
                        <p>DeepLearning.Ai</p>
                        <span className="absolute text-xs font-bold uppercase bottom-7 left-5">
                          1 course
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/"
                      className="relative transition-all ease-in duration-300 mx-1 shadow-lg rounded-md h-[386px] w-[336px] hover:shadow-2xl"
                    >
                      <div className="h-[132px] text-center text-white bg-red-900">
                        <h2 className="text-2xl font-semibold capitalize ">
                          unsupervised <br /> learning and <br /> recommender{" "}
                          <br /> systems
                        </h2>
                      </div>
                      <div className="absolute p-2 bg-white rounded-sm left-5 top-24">
                        <img className="w-16 h-16" src={icon} alt="" />
                      </div>
                      <div className="flex flex-col px-6 py-16">
                        <h2 className="mb-2 text-xl capitalize">
                          unsupervised learning, recommenders, reinforcement
                          learning
                        </h2>
                        <p>DeepLearning.Ai</p>
                        <span className="absolute text-xs font-bold uppercase bottom-7 left-5">
                          1 course
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/"
                      className="relative transition-all ease-in duration-300 mx-1 shadow-lg rounded-md h-[386px] w-[336px] hover:shadow-2xl"
                    >
                      <div className=" h-[132px] text-center text-white bg-red-900">
                        <h2 className="py-4 text-2xl font-semibold capitalize">
                          advanced learning <br /> algorithms
                        </h2>
                      </div>
                      <div className="absolute p-2 bg-white rounded-sm left-5 top-24">
                        <img className="w-16 h-16" src={icon} alt="" />
                      </div>
                      <div className="flex flex-col px-6 py-16">
                        <h2 className="mb-2 text-xl capitalize">
                          advanced learning algorithms
                        </h2>
                        <p>DeepLearning.Ai</p>
                        <span className="absolute text-xs font-bold uppercase bottom-7 left-5">
                          1 course
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/"
                      className="relative transition-all ease-in duration-300 mx-1 shadow-lg rounded-md h-[386px] w-[336px] hover:shadow-2xl"
                    >
                      <div className="h-[132px] text-center text-white bg-red-900">
                        <h2 className="text-2xl font-semibold capitalize ">
                          unsupervised <br /> learning and <br /> recommender{" "}
                          <br /> systems
                        </h2>
                      </div>
                      <div className="absolute p-2 bg-white rounded-sm left-5 top-24">
                        <img className="w-16 h-16" src={icon} alt="" />
                      </div>
                      <div className="flex flex-col px-6 py-16">
                        <h2 className="mb-2 text-xl capitalize">
                          unsupervised learning, recommenders, reinforcement
                          learning
                        </h2>
                        <p>DeepLearning.Ai</p>
                        <span className="absolute text-xs font-bold uppercase bottom-7 left-5">
                          1 course
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/"
                      className="relative transition-all ease-in duration-300 mx-1 shadow-lg rounded-md h-[386px] w-[336px] hover:shadow-2xl"
                    >
                      <div className=" h-[132px] text-center text-white bg-red-900">
                        <h2 className="py-4 text-2xl font-semibold capitalize">
                          advanced learning <br /> algorithms
                        </h2>
                      </div>
                      <div className="absolute p-2 bg-white rounded-sm left-5 top-24">
                        <img className="w-16 h-16" src={icon} alt="" />
                      </div>
                      <div className="flex flex-col px-6 py-16">
                        <h2 className="mb-2 text-xl capitalize">
                          advanced learning algorithms
                        </h2>
                        <p>DeepLearning.Ai</p>
                        <span className="absolute text-xs font-bold uppercase bottom-7 left-5">
                          1 course
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/"
                      className="relative transition-all ease-in duration-300 mx-1 shadow-lg rounded-md h-[386px] w-[336px] hover:shadow-2xl"
                    >
                      <div className="h-[132px] text-center text-white bg-red-900">
                        <h2 className="text-2xl font-semibold capitalize ">
                          unsupervised <br /> learning and <br /> recommender{" "}
                          <br /> systems
                        </h2>
                      </div>
                      <div className="absolute p-2 bg-white rounded-sm left-5 top-24">
                        <img className="w-16 h-16" src={icon} alt="" />
                      </div>
                      <div className="flex flex-col px-6 py-16">
                        <h2 className="mb-2 text-xl capitalize">
                          unsupervised learning, recommenders, reinforcement
                          learning
                        </h2>
                        <p>DeepLearning.Ai</p>
                        <span className="absolute text-xs font-bold uppercase bottom-7 left-5">
                          1 course
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/"
                      className="relative transition-all ease-in duration-300 mx-1 shadow-lg rounded-md h-[386px] w-[336px] hover:shadow-2xl"
                    >
                      <div className=" h-[132px] text-center text-white bg-red-900">
                        <h2 className="py-4 text-2xl font-semibold capitalize">
                          advanced learning <br /> algorithms
                        </h2>
                      </div>
                      <div className="absolute p-2 bg-white rounded-sm left-5 top-24">
                        <img className="w-16 h-16" src={icon} alt="" />
                      </div>
                      <div className="flex flex-col px-6 py-16">
                        <h2 className="mb-2 text-xl capitalize">
                          advanced learning algorithms
                        </h2>
                        <p>DeepLearning.Ai</p>
                        <span className="absolute text-xs font-bold uppercase bottom-7 left-5">
                          1 course
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/"
                      className="relative transition-all ease-in duration-300 mx-1 shadow-lg rounded-md h-[386px] w-[336px] hover:shadow-2xl"
                    >
                      <div className="h-[132px] text-center text-white bg-red-900">
                        <h2 className="text-2xl font-semibold capitalize ">
                          unsupervised <br /> learning and <br /> recommender{" "}
                          <br /> systems
                        </h2>
                      </div>
                      <div className="absolute p-2 bg-white rounded-sm left-5 top-24">
                        <img className="w-16 h-16" src={icon} alt="" />
                      </div>
                      <div className="flex flex-col px-6 py-16">
                        <h2 className="mb-2 text-xl capitalize">
                          unsupervised learning, recommenders, reinforcement
                          learning
                        </h2>
                        <p>DeepLearning.Ai</p>
                        <span className="absolute text-xs font-bold uppercase bottom-7 left-5">
                          1 course
                        </span>
                      </div>
                    </Link>
                  </div>
                </Slider>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Courses;
