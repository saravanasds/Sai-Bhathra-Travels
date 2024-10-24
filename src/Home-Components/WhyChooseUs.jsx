import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Experienced Guides",
      description:
        "Our experienced guides have in-depth local knowledge, ensuring that you get the most authentic and enriching travel experiences.",
      icon: "🌍",
    },
    {
      title: "Affordable Packages",
      description:
        "We provide affordable travel packages with flexible payment options, making your dream vacation both accessible and budget-friendly.",
      icon: "💰",
    },
    {
      title: "Customizable Tours",
      description:
        "Our customizable tours allow you to tailor your trip by selecting from a variety of destinations, activities, and accommodations, ensuring a personalized experience.",
      icon: "🎒",
    },
    {
      title: "24/7 Support",
      description:
        "Enjoy peace of mind with our 24/7 support team, who are available to assist you throughout your entire journey, from booking to the final destination.",
      icon: "📞",
    },
  ];

  return (
    <section className="w-full py-16 rounded-lg xl:px-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl tracking-wider" style={{textShadow: "2px 2px 1px black"}}>
            Why Choose Us?
          </h2>
          <p className="mt-4 text-lg text-blue-800">
            Discover why we're the best choice for your next adventure! Our
            experienced guides, affordable travel packages, customizable tours, and 24/7 support make your journey unforgettable.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-t from-secondary to-primary shadow-lg rounded-lg p-6 text-center transition transform sm:hover:scale-105 border"
            >
              <div className="text-5xl">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-bold text-black">
                {feature.title}
              </h3>
              <p className="mt-2 text-black">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
