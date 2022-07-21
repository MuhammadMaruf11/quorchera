import React from "react";
import Learning from "../../components/Learning/Learning";
import Faq from "../../components/FAQ/Faq";
import Category from "../../components/Category/Category";
import Layout from "../Layout/Layout";
import Reviews from "../../components/Reviews/Reviews";

const Home = () => {
  return (
    <Layout>
      <Reviews/>
      <Learning />
      <Faq />
      <Category />
    </Layout>
  );
};

export default Home;
