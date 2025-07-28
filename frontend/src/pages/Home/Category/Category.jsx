import React from "react";
import { Link } from "react-router-dom";
import Bus1 from "../../../assets/bus1.png";
import Bus2 from "../../../assets/bus6.png";
import Bus3 from "../../../assets/bus9.png";
import { FaArrowRight, FaUsers, FaWifi, FaSnowflake } from "react-icons/fa";

const Category = () => {
  const categories = [
    {
      title: "Luxury Coaches",
      subtitle: "Premium comfort & amenities",
      image: Bus1,
      features: ["Reclining seats", "WiFi", "Entertainment"],
      gradient: "from-violet-600/90 to-purple-600/90",
      icon: FaSnowflake,
    },
    {
      title: "Express Services",
      subtitle: "Fast & efficient travel",
      image: Bus2,
      features: ["Non-stop routes", "Quick boarding", "On-time guarantee"],
      gradient: "from-blue-600/90 to-indigo-600/90",
      icon: FaUsers,
    },
    {
      title: "Economy Class",
      subtitle: "Affordable & comfortable",
      image: Bus3,
      features: ["Budget-friendly", "Clean facilities", "Safe travel"],
      gradient: "from-emerald-600/90 to-teal-600/90",
      icon: FaWifi,
    },
  ];

  return (
    <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 py-16 bg-neutral-50 dark:bg-neutral-900/30">
      <div className="w-full items-center flex justify-between mb-12">
        <div>
          <h2 className="text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-3">
            Choose Your Travel Style
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Find the perfect bus service for your journey
          </p>
        </div>
        <Link
          to={"/bus"}
          className="hidden md:flex items-center gap-3 text-violet-600 hover:text-violet-700 dark:hover:text-violet-400 font-semibold transition-all duration-300 group bg-violet-50 dark:bg-violet-900/20 px-6 py-3 rounded-xl hover:bg-violet-100 dark:hover:bg-violet-900/30"
        >
          View All Buses
          <FaArrowRight className="text-sm transform group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={"/bus"}
            className="bg-white dark:bg-neutral-900/60 block rounded-2xl overflow-hidden relative group ease-in-out duration-500 shadow-lg hover:shadow-2xl border border-neutral-200/50 dark:border-neutral-800/50 transform hover:scale-105"
          >
            <div className="p-6 pb-4">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-48 object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-6 pt-2">
              <div className="flex items-center gap-3 mb-3">
                <category.icon className="text-violet-600 text-xl" />
                <div>
                  <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {category.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                  >
                    <div className="w-1.5 h-1.5 bg-violet-600 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-violet-600 dark:text-violet-400">
                  Starting from $25
                </span>
                <FaArrowRight className="text-neutral-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300" />
              </div>
            </div>

            <div
              className={`absolute top-0 left-0 w-full h-full bg-gradient-to-tr ${category.gradient} group-hover:flex hidden items-center justify-center ease-in-out duration-500 backdrop-blur-sm`}
            >
              <div className="text-center text-white p-6">
                <category.icon className="text-4xl mb-4 mx-auto" />
                <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
                  {category.title}
                </h3>
                <p className="text-lg opacity-90 mb-4">{category.subtitle}</p>
                <button className="bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-2 rounded-full font-semibold hover:bg-white/30 transition-all duration-300">
                  Explore Now
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile View All Button */}
      <div className="md:hidden mt-8 text-center">
        <Link
          to={"/bus"}
          className="inline-flex items-center gap-3 text-violet-600 hover:text-violet-700 dark:hover:text-violet-400 font-semibold transition-all duration-300 group bg-violet-50 dark:bg-violet-900/20 px-6 py-3 rounded-xl hover:bg-violet-100 dark:hover:bg-violet-900/30"
        >
          View All Buses
          <FaArrowRight className="text-sm transform group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default Category;
