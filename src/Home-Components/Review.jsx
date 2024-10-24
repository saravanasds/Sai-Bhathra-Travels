import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper modules directly
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Review = () => {
    // Sample static reviews (testimonials)
    const reviews = [
        {
            author_name: 'Jayasimha Gokana',
            rating: 5,
            text: 'Sai Bhathra travels has extended an excellent service to my family members who were comprise of only ladies (four) from Andhra Pradesh. We hv booked a vehicle for 5 days, the vehicle condition was good and drivers behaviour was excellent. Infact, my family members forced me to give them a best review because of their outstanding service Thank you Sanjith',
            date: '4 months ago',
        },
        {
            author_name: 'Khadar Gani',
            rating: 5,
            text: 'I appreciate Sai Bathra Travels for making my journey memorable. I highly recommend their services and look forward to planning my future trips with them.',
            date: '6 months ago',
        },
        {
            author_name: 'Arjun Nagarjuna',
            rating: 5,
            text: 'One of the best travels available in Palani which you can choose blindly for your travel plans,they provide best service in best tarriff 👍',
            date: '8 months ago',
        },
    ];

    return (
        <div className="w-full bg-white p-4 py-6 md:py-10">
            <h2 className="text-2xl sm:text-4xl font-semibold mb-4 text-center md:py-8 text-secondary">Customer Reviews</h2>

            <Swiper
                spaceBetween={30}
                navigation
                pagination={{ clickable: true }}
                loop={true} // Enable infinite looping
                autoplay={{
                    delay: 3000, // Set the autoplay delay to 3 seconds
                    disableOnInteraction: false, // Keep autoplay running even after user interaction
                }}
                modules={[Navigation, Pagination, Autoplay]} // Add Autoplay to modules
                className="mySwiper w-full md:w-[80%] mx-auto border-b shadow-sm "
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full md:w-[80%] mx-auto border-gray-300 text-center py-6 md:py-10 px-10">
                            <p className="font-bold mb-2">{review.author_name}</p>
                            <p className='mb-2'>{'⭐'.repeat(review.rating)}</p>
                            <p className='mb-2'>{review.text}</p>
                            <p className="text-sm text-gray-500">
                                {review.date}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className='w-full flex justify-center items-center'>
                <button
                    className="bg-blue-600 text-white px-8 py-2 rounded mt-4"
                    onClick={() =>
                        window.open(
                            `https://www.google.co.in/search?q=sai+bathra+travels&sca_esv=85dd7771fb44bccf&sxsrf=ADLYWILGQWzox0YuksFqWl2NRZsv-zAasg%3A1729747616914&source=hp&ei=oNoZZ9K0NenuseMPnZ20uAs&iflsig=AL9hbdgAAAAAZxnosD_1SVdFhA2wq24J6KPzx9cvF-xm&oq=&gs_lp=Egdnd3Mtd2l6IgAqAggFMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMg0QLhjRAxjHARgnGOoCMgcQIxgnGOoCSNATUABYAHABeACQAQCYAQCgAQCqAQC4AQHIAQCYAgGgAgaoAgqYAwaSBwExoAcA&sclient=gws-wiz#lrd=0x3ba9df0c5afbb12d:0xd43802c3b29c5155,3,,,,`,
                            '_blank'
                        )
                    }
                >
                    Add a Review
                </button>
            </div>
        </div>
    );
};

export default Review;
