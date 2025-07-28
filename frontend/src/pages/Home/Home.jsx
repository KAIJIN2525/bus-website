import React from "react";
import Search from "../Search/Search";
import Hero from "./Hero/Hero";
import Category from "./Category/Category";
import Offer from "./Offer/Offer";
import FeaturedRoutes from "./FeaturedRoutes";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Search />
      <FeaturedRoutes />
      <Category />
      <Offer />
      <Testimonials />
    </div>
  );
};

export default Home;
