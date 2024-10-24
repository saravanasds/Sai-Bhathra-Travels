import React from 'react';
import AboutTravel from "../assets/family-tour.jpg";
import 'aos/dist/aos.css'; // Import AOS styles for scroll animations
import AOS from 'aos'; // Import AOS for scroll animation

const AboutTravels = () => {
  // Initialize AOS for scroll animations
  React.useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-light via-white to-light lg:py-20 py-10 px-2 xxs:px-4 sm:px-10">
      {/* Section Title */}
      <h2
        className="text-2xl sm:text-4xl font-bold text-center text-secondary pb-8 sm:pb-10 uppercase"
        data-aos="fade-up"
      >
        Welcome to Sai Bhathra Travels
      </h2>

      {/* Container */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20 px-4">

        {/* Image Section */}
        <div className="w-full lg:w-1/2" data-aos="fade-right">
          <img
            src={AboutTravel}
            alt="palani travels"
            className="w-full h-auto sm:min-h-[580px] object-cover rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left font-bitter" data-aos="fade-left">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6" style={{ textAlign: 'justify' }}>
            Sai Bhathra Travels is a trusted travel agency in Palani, offering the best in tour and travels services for over a decade. Our commitment to providing excellent customer service ensures that your journey is safe, comfortable, and unforgettable.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6" style={{ textAlign: 'justify' }}>
            As a leading travel agency in Palani, we offer a variety of tour packages and trip packages tailored to your needs, including popular destinations like Kodaikanal tour package, Munnar tour package and tour package from palani. Whether you're planning a business trip or a family vacation, our Palani travels services have got you covered.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6" style={{ textAlign: 'justify' }}>
            Our well-maintained fleet of vehicles is ready to take you to your destination, making us a trusted partner for all your travel needs. With a passion for travel and a focus on providing exceptional service, Sai Bhathra Travels ensures that every trip becomes a cherished memory.
          </p>

          {/* Call to Action Button */}
          <div className="mt-8">
            <a
              href="tel:+918072306324" // Replace with the actual contact link
              className="inline-block bg-secondary text-white tracking-wider text-sm sm:text-base lg:text-lg px-8 py-3 sm:px-10 sm:py-4 rounded-xl shadow-xl hover:bg-secondary hover:text-white transition-all duration-300 ease-in-out transform   hover:scale-105 font-bold"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTravels;
