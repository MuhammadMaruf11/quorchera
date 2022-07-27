import React from "react";
import Learning from "../../components/Learning/Learning";
import Faq from "../../components/FAQ/Faq";
import Category from "../../components/Category/Category";
import Layout from "../Layout/Layout";
import Reviews from "../../components/Reviews/Reviews";
import Banner from "../../components/Banner/Banner";
import About from "../../components/About/About";
import Courses from "../../components/Courses/Courses";

const Home = () => {
  
  return (
    <Layout>
      <Banner />
      <About />
      <Courses />
      <Reviews />
      <Learning />
      <Faq />
      <Category />
    </Layout>
  );
};

export default Home;
