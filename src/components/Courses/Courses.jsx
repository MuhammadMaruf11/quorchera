import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import icon from "../../assets/img/courses/Icon.png";
import { related } from "./courseDetails";
import { degree } from "./courseDetails";
import { recommend } from "./courseDetails";

// import swiper slide
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";

const Courses = () => {
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
                <Swiper
                  spaceBetween={10}
                  slidesPerView={4}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  loop={true}
                  modules={[Autoplay]}
                  // onSlideChange={() => console.log('slide change')}
                  // onSwiper={(swiper) => console.log(swiper)}

                  breakpoints={{
                    375: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                    1600: {
                      slidesPerView: 4,
                    },
                  }}
                >
                  {related &&
                    related.map((index) => {
                      return (
                        <SwiperSlide>
                          <div className="relative overflow-hidden transition-all ease-in duration-300 xl:mx-4 mx-auto !shadow-lg rounded-md h-[386px] w-[336px] hover:!shadow-2xl">
                            <Link key={index.id} to={index.to}>
                              <div className=" h-[132px] text-center text-white bg-red-900">
                                <h2 className="p-4 text-2xl font-semibold capitalize">
                                  {index.name}
                                </h2>
                              </div>
                              <div className="absolute w-20 p-2 bg-white rounded-sm left-5 top-24">
                                <img className="w-16 h-16" src={icon} alt="" />
                              </div>
                              <div className="flex flex-col px-6 py-16">
                                <h2 className="mb-2 text-xl capitalize">
                                  {index.title}
                                </h2>
                                <p>DeepLearning.Ai</p>
                                <span className="absolute text-xs font-bold uppercase bottom-7 left-5">
                                  1 course
                                </span>
                              </div>
                            </Link>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="container">
              <h2 className="py-16 text-2xl">Earn your Degree</h2>
              <div className="flex items-center justify-center">
                <Swiper
                  spaceBetween={10}
                  slidesPerView={4}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  loop={true}
                  modules={[Autoplay]}
                  // onSlideChange={() => console.log('slide change')}
                  // onSwiper={(swiper) => console.log(swiper)}

                  breakpoints={{
                    375: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                    1600: {
                      slidesPerView: 4,
                    },
                  }}
                >
                  {degree &&
                    degree.map((index) => {
                      return (
                        <SwiperSlide>
                          <div className="relative overflow-hidden transition-all ease-in duration-300 lg:mx-1 mx-auto !shadow-lg rounded-md w-[336px] hover:!shadow-2xl">
                            <Link key={index.id} to={index.to}>
                              <div className="text-center ">
                                <img
                                  src={index.image}
                                  className="w-full"
                                  alt=""
                                />
                              </div>
                              <div className="flex flex-col px-6 py-6 pb-28">
                                <h2 className="mb-2 text-sm text-blue-600 capitalize">
                                  {index.name}
                                </h2>
                                <p className="text-xs">{index.desc}</p>
                                <span className="absolute text-xs font-bold text-white uppercase bottom-2 left-2">
                                  100% online
                                </span>
                                <span className="absolute text-xs font-bold uppercase bottom-1 -right-1">
                                  <img
                                    className="w-[80%]"
                                    src={index.icon}
                                    alt=""
                                  />
                                </span>
                                <div class="absolute -bottom-4 -left-[40%] w-[180%] -z-10 rotate-[4deg] h-12 bg-blue-300"></div>
                                <div class="absolute -bottom-4 -left-[40%] w-[180%] -z-10 -rotate-[4deg] h-12 bg-blue-500 right-shape"></div>
                              </div>
                            </Link>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="container">
              <h2 className="py-16 text-2xl">
                People interested in this course also viewed
              </h2>
              <div className="flex items-center justify-center">
                <Swiper
                  spaceBetween={10}
                  slidesPerView={4}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  loop={true}
                  modules={[Autoplay]}
                  // onSlideChange={() => console.log('slide change')}
                  // onSwiper={(swiper) => console.log(swiper)}

                  breakpoints={{
                    375: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                    1600: {
                      slidesPerView: 4,
                    },
                  }}
                >
                  {recommend &&
                    recommend.map((index) => {
                      return (
                        <SwiperSlide>
                          <div className="relative overflow-hidden transition-all ease-in duration-300 xl:mx-4 mx-auto !shadow-lg rounded-md h-[386px] w-[336px] hover:!shadow-2xl">
                            <Link key={index.id} to={index.to}>
                              <div className=" h-[132px] text-center text-white bg-red-900">
                                <h2 className="p-4 text-2xl font-semibold capitalize">
                                  {index.name}
                                </h2>
                              </div>
                              <div className="absolute w-20 p-2 bg-white rounded-sm left-5 top-24">
                                <img className="w-16 h-16" src={icon} alt="" />
                              </div>
                              <div className="flex flex-col px-6 py-16">
                                <h2 className="mb-2 text-xl capitalize">
                                  {index.title}
                                </h2>
                                <p>DeepLearning.Ai</p>
                                <span className="absolute text-xs font-bold uppercase bottom-7 left-5">
                                  1 course
                                </span>
                              </div>
                            </Link>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Courses;
