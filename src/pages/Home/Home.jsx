import React from "react";
import Faq from "../../components/FAQ/Faq";
import Category from "../../components/Category/Category";
import Layout from "../Layout/Layout";

const Home = () => {
  return (
    <Layout>
    <Faq />
      <Category />
    </Layout>
  );
};

export default Home;
