import React from "react";
import { useEffect } from "react";
import Hero from "../Home-Components/Hero";
import AboutTravels from "../Home-Components/AboutTravel";
import Packages from "../Home-Components/Packages";
import WhyChooseUs from "../Home-Components/WhyChooseUs";
// import Banner from "../Home-Components/Banner";
import { Helmet } from "react-helmet-async";
import Review from "../Home-Components/Review";


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full overflow-hidden" >

      <Helmet>
        <title>Your Travel Partner - Affordable Packages, Customizable Tours</title>
        <meta
          name="description"
          content="Explore the world with experienced guides, affordable travel packages, customizable tours, and 24/7 support for a seamless adventure."
        />
        <meta
          name="keywords"
          content="travel, tours, affordable travel packages, customizable tours, experienced guides, adventure, vacation"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Sai Bathra" />
        <link rel="canonical" href="https://yourwebsite.com/home" />
      </Helmet>

      <Hero />
      <AboutTravels />
      <Packages />
      <WhyChooseUs />
      {/* <Banner /> */}
      <Review />
    </div>
  );
};

export default Home;
