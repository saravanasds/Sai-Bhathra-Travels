import React, { useState } from "react";
import { FaLongArrowAltRight, FaStar, FaStarHalfAlt } from "react-icons/fa";
import pac1Image from "../assets/kodaikanal.jpg";
import pac2Image from "../assets/madurai.jpg";
import pac3Image from "../assets/ramesh1.jpg";
import pac4Image from "../assets/coimbatore.jpg";
import pac5Image from "../assets/thiruchendur.jpg";
import pac6Image from "../assets/munnar.jpg";
import pac7Image from "../assets/valparai.jpg";
import { RiPoliceCarLine } from "react-icons/ri";
import { PiCarProfileLight } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
// import Offer from "../assets/offer.png";
import { Link } from "react-router-dom";
import Tempo from "../assets/bathra-travels.png"
import { GrClose } from "react-icons/gr";
import Bg from "../assets/package-background1.jpg"
import { TiPhoneOutline } from "react-icons/ti";

const Packages = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const gridItems = [
    {
      id: 1,
      icon: <PiCarProfileLight />,
      car: <RiPoliceCarLine />,
      title: "Kodaikanal",
      actualprice: "7000",
      price: "6000",
      destination: "Palani to Kodaikanal",
      img: pac1Image,
      rating: 4.5,
      link: "/kodaikanalPackage",
      seat: "8-14 Seats",
      time: "14 hours",
      km: "200 Km",
      extraKm: "Rs.22/km",
      extraHour: "Rs.200/hr",
      noOfPlaceVisit: "10"
    },
    {
      id: 2,
      icon: <PiCarProfileLight />,
      car: <RiPoliceCarLine />,
      title: "Madurai",
      actualprice: "8000",
      price: "7500",
      destination: "Palani to Madurai",
      img: pac2Image,
      rating: 4.5,
      link: "/maduraiPackage",
      seat: "8-14 Seats",
      time: "14 hours",
      km: "280 Km",
      extraKm: "Rs.22/km",
      extraHour: "Rs.200/hr",
      noOfPlaceVisit: "3"
    },
    {
      id: 3,
      icon: <PiCarProfileLight />,
      car: <RiPoliceCarLine />,
      title: "Rameshwaram",
      actualprice: "14000",
      price: "13000",
      destination: "Palani to Rameshwaram",
      img: pac3Image,
      rating: 4.5,
      link: "/rameshwaramPackage",
      seat: "8-14 Seats",
      time: "24 hours",
      km: "600 Km",
      extraKm: "Rs.22/km",
      extraHour: "Rs.200/hr",
    },
    {
      id: 4,
      icon: <PiCarProfileLight />,
      car: <RiPoliceCarLine />,
      title: "Coimbatore",
      actualprice: "9500",
      price: "9000",
      destination: "Palani to Coimbatore",
      img: pac4Image,
      rating: 4.5,
      link: "/coimbatorePackage",
      seat: "8-14 Seats",
      time: "14 hours",
      km: "300 Km",
      extraKm: "Rs.22/km",
      extraHour: "Rs.200/hr",
      noOfPlaceVisit: "5"
    },
    {
      id: 5,
      icon: <PiCarProfileLight />,
      car: <RiPoliceCarLine />,
      title: "Thirunchendur",
      actualprice: "16000",
      price: "14500",
      destination: "Palani to Thirunchendur",
      img: pac5Image,
      rating: 4.5,
      link: "/thiruchendurPackage",
      seat: "8-14 Seats",
      time: "24 hours",
      km: "650 Km",
      extraKm: "Rs.22/km",
      extraHour: "Rs.200/hr"
    },
    {
      id: 6,
      icon: <PiCarProfileLight />,
      car: <RiPoliceCarLine />,
      title: "Munnar",
      actualprice: "15000",
      price: "14000",
      destination: "Palani to Munnar",
      img: pac6Image,
      rating: 4.5,
      link: "/munnarPackage",
      seat: "8-14 Seats",
      time: "2 days",
      km: "300 Km",
      extraKm: "Rs.25/km",
      extraHour: "Rs.200/hr",
      noOfPlaceVisit: "12"
    },
    {
      id: 7,
      icon: <PiCarProfileLight />,
      car: <RiPoliceCarLine />,
      title: "Valparai",
      actualprice: "11000",
      price: "10000",
      destination: "Palani to Valparai",
      img: pac7Image,
      rating: 4.5,
      link: "/valparaiPackage",
      seat: "8-14 Seats",
      time: "15 hours",
      km: "320 Km",
      extraKm: "Rs.25/km",
      extraHour: "Rs.200/hr",
      noOfPlaceVisit: "6"
    },
    // {
    //   id: 8,
    //   icon: <PiCarProfileLight />,
    //   car: <RiPoliceCarLine />,
    //   title: "Rameshwaram",
    //   price: "13000",
    //   destination: "Palani to Rameshwaram",
    //   img: pac3Image,
    //   rating: 4.5,
    //   link: "/rameshwarampackage",
    //   seat: "8-14 Seats",
    //   time: "14 hours",
    //   km: "280 Km"
    // },
  ];

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const totalStars = 5;

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
    }
    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
    }
    for (let i = stars.length; i < totalStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="text-gray-300" />);
    }
    return stars;
  };

  // Function to handle 'View More' button click
  const handleViewMoreClick = (item) => {
    setSelectedItem(item); // Set the selected package details
    setShowPopup(true);    // Show the popup
  };

  // Function to close the popup
  const closePopup = () => {
    setShowPopup(false);
    setSelectedItem(null);
  };

  const handleOverlayClick = (e) => {
    // Check if clicked element is the overlay (background) and not the popup content
    if (e.target.id === "popup-overlay") {
      closePopup();
    }
  };

  return (
    <div className="w-full min-h-screen mx-auto p-4 pb-10 lg:py-10 px-4 sm:px-10 relative overflow-hidden bg-gradient-to-t from-white via-[#d5f7ff] to-white" id="packages">

      <h2 className="relative text-2xl sm:text-3xl lg:text-5xl font-bold tracking-widest text-secondary py-3 lg:py-3 px-4 lg:px-8 mb-6 lg:mb-8 text-center rounded-lg uppercase z-10 font-caveat" style={{ textShadow: "2px 2px 1px black" }}>
        Tour Packages - Palani
      </h2>

      <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative">
        {gridItems.map((item) => (
          <div
            key={item.id}
            className="relative shadow-sm shadow-gray-500 rounded overflow-hidden p-1 leading-8 bg-white"
          >
            <div >
              <div className="relative w-full overflow-hidden">
                <img
                  className="w-full h-64 object-cover transform transition-all duration-500 lg:hover:scale-[1.03]"
                  src={item.img}
                  alt="palani travels"
                />
                <div className="absolute bottom-0 left-0 w-full bg-opacity-50 bg-black p-2 px-4 flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-3 tracking-wider">
                    {item.car} {item.destination}
                  </h3>
                  <span className="text-gray-300 font-semibold text-2xl mt-1">
                    {item.icon}
                  </span>
                </div>
              </div>

              <div className="px-3 sm:px-4 h-auto my-2 ">
                <h3 className="text-base sm:text-lg font-semibold flex justify-left items-center gap-5 text-blue-700">
                  Price:
                  <span className="text-green-600 font-semibold flex justify-center items-center gap-2">
                    ₹ {item.price}{" "}
                    <del className="font-normal text-gray-800 text-sm">
                      ₹ {item.actualprice}
                    </del>
                  </span>
                </h3>
                <div className="flex items-center gap-2 pt-1">
                  {renderStars(item.rating)}
                  <span className="font-thin text-sm">( Top Rating )</span>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center items-center mb-0 p-1">
              <button
                className="w-full py-2 text-center lg:text-base text-sm font-semibold bg-gray-300 rounded text-black lg:hover:bg-gray-400 transform transition-all tracking-wider flex justify-center items-center gap-4"
                onClick={() => handleViewMoreClick(item)}
              >
                View More
              </button>
            </div>

            <a href="tel:+918072306324">
              <div className="w-full flex justify-center items-center mb-0 p-1">
                <button
                  onClick={() => window.trackConversion()}
                  className="w-full py-2 text-center lg:text-base text-sm font-semibold bg-secondary rounded text-black lg:hover:bg-cyan-500 transform transition-all tracking-wider flex justify-center items-center gap-4"
                >
                  Book Now
                </button>
              </div>
            </a>

          </div>
        ))}

        <div className="bg-white rounded-[5px] flex flex-col justify-center items-center gap-4 p-6 border shadow-sm shadow-gray-500">
          <div className="w-full border rounded-[5px] py-10 bg-secondary">
            <img src={Tempo} alt="traveller in palani" className="w-[80%] mx-auto" />
          </div>
          <h3 className="text-2xl lg:text-3xl font-semibold text-center font-caveat">For More Packages</h3>

          {/* <a href="tel:+918072306324">
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-full flex gap-2 justify-center items-center hover:bg-yellow-600">Call Us <TiPhoneOutline /></button>
          </a> */}
          <p className="text-black  tracking-widest font-bold text-center">8072306324, 7639265084</p>
        </div>
      </div>

      {/* Popup for additional details */}
      {showPopup && selectedItem && (
        <div id="popup-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 "
          onClick={handleOverlayClick} >

          <div className="bg-white rounded-lg p-4 md:p-10 w-[90%] sm:w-[60%] lg:w-[80%] xl:w-[60%] shadow-lg z-50 relative flex flex-col lg:flex-row justify-center items-center">
            <div className="w-full lg:w-[60%] py-4">
              <img src={Tempo} alt="traveller in palani" className="w-[80%] mx-auto" />
            </div>

            <div className="w-full lg:w-[40%] border  border-secondary p-2 rounded text-sm lg:text-base">
              <h3 className="text-xl font-semibold text-center mb-4 bg-secondary text-white p-1 rounded">{selectedItem.title}</h3>
              <div className="flex flex-col sm:flex-row lg:flex-col sm:gap-4 lg:gap-0">
                <div >
                  <p className="bg-gray-100 p-1 rounded mb-1">
                    <strong>Seats:</strong> {selectedItem.seat}
                  </p>
                  <p className="bg-gray-200 p-1 rounded mb-1">
                    <strong>Duration:</strong> {selectedItem.time}
                  </p>
                  <p className="bg-gray-100 p-1 rounded mb-1">
                    <strong>Kilometers:</strong> {selectedItem.km}
                  </p>
                  <p className="bg-gray-200 p-1 rounded mb-1">
                    <strong>Included:</strong> Toll, Parking, Driver Bata
                  </p>
                </div>
                <div>
                  <p className="bg-gray-100 p-1 rounded mb-1">
                    <strong>Extra Kilometers:</strong> {selectedItem.extraKm}
                  </p>
                  <p className="bg-gray-200 p-1 rounded mb-1">
                    <strong>Extra Hours:</strong> {selectedItem.extraHour}
                  </p>
                  {selectedItem.noOfPlaceVisit ?
                    <p className="bg-gray-100 p-1 rounded mb-1">
                      <strong>No of places visit:</strong> {selectedItem.noOfPlaceVisit}
                    </p> : ""}
                </div>
              </div>
              <a href="tel:+918072306324">
                <button
                  onClick={() => window.trackConversion()}
                  className="mt-4 w-full bg-green-700 text-white py-2 rounded hover:bg-green-600">
                  Book Now
                </button>
              </a>

            </div>

            <div className="absolute top-4 right-4">
              <button onClick={closePopup} className="text-xl"><GrClose /></button>
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default Packages;