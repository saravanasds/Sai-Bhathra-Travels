import React from 'react';

const Map = () => {
    const mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9331.902041713985!2d77.5083448732304!3d10.454746684610834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9df0c5afbb12d%3A0xd43802c3b29c5155!2sSai%20bathra%20travels!5e0!3m2!1sen!2sin!4v1730100100266!5m2!1sen!2sin';

    return (
        <div className="w-full h-screen p-2 sm:p-8">
            <iframe
                title="Google Map"
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default Map;

