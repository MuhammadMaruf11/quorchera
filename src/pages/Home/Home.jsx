import React from "react";
import Learning from "../../components/Learning/Learning";
import Faq from "../../components/FAQ/Faq";
import Category from "../../components/Category/Category";
import Layout from "../Layout/Layout";
import Reviews from "../../components/Reviews/Reviews";
import Banner from "../../components/Banner/Banner";
import About from "../../components/About/About";
import Courses from "../../components/Courses/Courses";
import Instructors from "../../components/Instructors/Instructors";
import Syll from "../../components/Syll/Syll"

const Home = () => {
  return (
    <Layout>
      <Banner />
      <About />
      <Instructors />
      <Courses />
      <Syll/>
      <Reviews />
      <Learning />
      <Faq />
      <Category />
    </Layout>
  );
};

export default Home;
