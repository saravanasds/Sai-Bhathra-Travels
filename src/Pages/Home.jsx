import React from "react";
import { useEffect } from "react";
import Hero from "../Home-Components/Hero";
import AboutTravels from "../Home-Components/AboutTravel";
import Packages from "../Home-Components/Packages";
import WhyChooseUs from "../Home-Components/WhyChooseUs";
import { Helmet } from "react-helmet-async";
import Review from "../Home-Components/Review";
import Map from "../Home-Components/Map";


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full overflow-hidden" >

      <Helmet>
        <title>Your Travel Partner - Travels in Palani, Affordable Packages</title>
        <meta
          name="description"
          content="Explore the world with experienced guides, affordable travel packages, customizable tours, and 24/7 support for a seamless adventure."
        />
        <meta
          name="keywords"
          content="tour and travels, travelS, tour, affordable travel packages, travels palani"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Sai Bathra" />
        <link rel="canonical" href="https://saibathratravels.in/" />
      </Helmet>

      <Hero />
      <AboutTravels />
      <Packages />
      <WhyChooseUs />
      <Review />
      <Map />
    </div>
  );
};

export default Home;
