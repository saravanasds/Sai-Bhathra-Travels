import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="nav bg-transparent absolute top-20 left-0 w-full z-10 py-4">
            <div className="max-w-6xl mx-auto px-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center w-full">
                        {/* <div className="flex-shrink-0">
                            <h1
                                className="uppercase font-bold sm:text-2xl lg:text-3xl text-white tracking-widest"
                                style={{ textShadow: "2px 2px 1px black" }}
                            >
                                Sai Bathra
                            </h1>
                        </div> */}
                        <div className="hidden md:block font-bold text-md">
                            <div className="flex items-baseline space-x-8 uppercase tracking-wider text-black">
                                <a href="#">Home</a>
                                <a href="#packages">Packages</a>
                            </div>
                        </div>
                    </div>
                    {/* <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleNavbar}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
                        >
                            {!isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div> */}
                </div>
            </div>

            {/* {isOpen && (
                <div className="md:hidden bg-gray-200 flex justify-center items-center">
                    <div className="px-2 py-2 pb-4 space-x-8 sm:px-3 text-[14px] sm:text-[16px] font-semibold">
                        <a href="#">Home</a>
                        <a href="#packages">Packages</a>
                    </div>
                </div>
            )} */}
        </nav>
    );
};

export default Navbar;
