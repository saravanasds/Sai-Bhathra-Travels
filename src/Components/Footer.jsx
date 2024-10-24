import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPhone, } from 'react-icons/fa'; // Import icons
// import ImageBG from "../assets/et-footer.png"
import { BiSolidCommentEdit } from "react-icons/bi";
import { IoGrid } from "react-icons/io5";


function Footer() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer
            className="bg-gray-600 text-black relative"
        // style={{
        //     backgroundImage: `url(${ImageBG})`,
        //     backgroundSize: 'contain',
        //     backgroundBlendMode: 'blend',
        //     backgroundColor: '#455d7a',
        //     backgroundRepeat: 'no-repeat',
        //     backgroundPosition: 'center',
        // }}
        >
            <div className="bg-gradient-to-t from-secondary via-[#b0f1ff] to-primary bg-opacity-80 p-4 backdrop-blur-[2px]">
                <div className="w-full mx-auto flex flex-col justify-center items-center p-6 text-sm sm:text-[16px] border-gray-400 ">
                    {/* Clinic Overview */}
                    <div className="w-full flex flex-col items-center mb-6" data-aos="fade-right">
                        <h2 className="text-2xl md:text-4xl font-bold font-nunito mb-2 text-black uppercase tracking-wider text-center">
                            SAI Bathra TRAVELS
                        </h2>
                        <p className="text-center text-sm tracking-wider">
                            "Experience comfort and convenience on every mile with Sai Bathra Travels – your trusted travel partner!"
                        </p>
                    </div>

                    {/* Grid for 4 Columns */}
                    <div
                        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 sm:gap-8 place-items-center"
                        data-aos="fade-up"
                    >
                        {/* Quick Links with Icons */}
                        <div className="flex flex-col justify-center items-center mb-8 sm:mb-0 " data-aos="fade-right ">
                            <h2 className="text-lg font-semibold mb-2 text-left text-black">Quick Links</h2>
                            <ul className="space-y-2 flex flex-col lg:flex-row gap-4">
                                <li className="flex items-center justify-center space-x-2 mt-2">
                                    <FaHome className="text-black" />
                                    <a href="#">Home</a>
                                </li>
                                <li className="flex items-center justify-center space-x-2 ">
                                    <IoGrid className="text-black" />
                                    <a href="#packages">Packages</a>
                                </li>
                                <li className="flex items-center justify-center space-x-2">
                                    <BiSolidCommentEdit className="text-black" />
                                    <button
                                        onClick={() =>
                                            window.open(
                                                `https://www.google.co.in/search?q=sai+bathra+travels&sca_esv=85dd7771fb44bccf&sxsrf=ADLYWILGQWzox0YuksFqWl2NRZsv-zAasg%3A1729747616914&source=hp&ei=oNoZZ9K0NenuseMPnZ20uAs&iflsig=AL9hbdgAAAAAZxnosD_1SVdFhA2wq24J6KPzx9cvF-xm&oq=&gs_lp=Egdnd3Mtd2l6IgAqAggFMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMg0QLhjRAxjHARgnGOoCMgcQIxgnGOoCSNATUABYAHABeACQAQCYAQCgAQCqAQC4AQHIAQCYAgGgAgaoAgqYAwaSBwExoAcA&sclient=gws-wiz#lrd=0x3ba9df0c5afbb12d:0xd43802c3b29c5155,3,,,,`,
                                                '_blank'
                                            )
                                        }
                                    >
                                        Review Pages
                                    </button>
                                </li>
                            </ul>
                        </div>


                        {/* Address and Timing */}
                        <div className="flex flex-col col-span-2 xs:col-span-1 justify-center items-center sm:justify-start sm:items-start" data-aos="fade-right ">
                            <h2 className="text-lg font-semibold float-left mb-2 text-black">Address</h2>
                            <address className="sm:w-[300px] not-italic mb-2 text-center xs:text-left">
                                19.gounder Thottam Rajaji Road, Old, Palani -Thoppampatti - Dharapuram Rd, Palani, Tamil Nadu 624601
                            </address>
                        </div>
                    </div>

                    {/* Copyright Section */}
                    <div className="text-center mt-8">
                        <p className='text-xs sm:text-sm'>
                            <span className="text-red-400">&copy; {new Date().getFullYear()} </span>
                            Sai Bathra Travels. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
