import React from "react";
import Img from "../assets/sai Bathra travels.png";

const Hero = () => {
  return (
    <div className="w-full h-auto relative bg-gradient-to-b from-secondary to-white">
      {/* Background Image */}
      <img
        src={Img}
        alt="tour package"
        className="w-full h-auto object-cover"
      />

      {/* Overlay Content (if needed) */}
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold ">
            Explore the World with Us
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            The best travel packages for your dream destinations.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
