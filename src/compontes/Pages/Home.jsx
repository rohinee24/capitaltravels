import React from "react";
import Hero from "../Home/Hero";
import TrustedBy from "../Home/TrustedBy";
import BestTours from "../Home/BestTours";
import ClientReviews from "../Home/ClientReviews";
import WhyUs from "../Home/WhyUs";

const Home = () => {
  return (
    <>
      <Hero />
     
      <BestTours />
      <WhyUs />
       <TrustedBy />
      <ClientReviews />

    </>
  );
};

export default Home;
