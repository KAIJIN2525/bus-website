import React from "react";
import { FaMapMarkerAlt, FaClock, FaArrowRight } from "react-icons/fa";

const featuredRoutes = [
  {
    from: "New York",
    to: "Washington DC",
    price: 45,
    duration: "4h 30m",
    frequency: "Every 2 hours",
    image:
      "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    from: "Los Angeles",
    to: "San Francisco",
    price: 55,
    duration: "7h 45m",
    frequency: "6 daily trips",
    image:
      "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    from: "Chicago",
    to: "Detroit",
    price: 35,
    duration: "5h 15m",
    frequency: "4 daily trips",
    image:
      "https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

const FeaturedRoutes = () => (
  <section className="w-full py-16 px-4 md:px-16 lg:px-28">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">
        Popular Routes
      </h2>
      <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
        Discover our most traveled routes with comfortable buses and competitive
        prices
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredRoutes.map((route, idx) => (
        <div
          key={idx}
          className="bg-white dark:bg-neutral-900/60 rounded-2xl shadow-lg hover:shadow-2xl border border-neutral-200/50 dark:border-neutral-800/50 overflow-hidden group transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src={route.image}
              alt={`${route.from} to ${route.to}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <div className="flex items-center gap-2 text-sm font-medium">
                <FaMapMarkerAlt className="text-violet-400" />
                <span>{route.frequency}</span>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="text-lg font-bold text-neutral-800 dark:text-neutral-100">
                  {route.from}
                </div>
                <FaArrowRight className="text-violet-600 text-sm" />
                <div className="text-lg font-bold text-neutral-800 dark:text-neutral-100">
                  {route.to}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                <FaClock className="text-sm" />
                <span className="text-sm">{route.duration}</span>
              </div>
              <div className="text-2xl font-bold text-violet-600 dark:text-violet-400">
                ${route.price}
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-12">
      <button className="inline-flex items-center gap-3 bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 hover:bg-violet-100 dark:hover:bg-violet-900/30 font-semibold px-8 py-4 rounded-xl transition-all duration-300 group">
        View All Routes
        <FaArrowRight className="text-sm transform group-hover:translate-x-1 transition-transform duration-300" />
      </button>
    </div>
  </section>
);

export default FeaturedRoutes;
