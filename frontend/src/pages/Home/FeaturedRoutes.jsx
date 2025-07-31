import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaClock, FaArrowRight } from "react-icons/fa";
import { featuredRoutes, formatNairaPrice } from "../../data/nigerianBusData";

const FeaturedRoutes = () => (
  <section className="w-full py-16 px-4 md:px-16 lg:px-28">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">
        Our Most Popular Routes
      </h2>
      <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
        Travel Nigeria's busiest routes with NaijaBus Express - comfortable, safe, and reliable
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredRoutes.slice(0, 3).map((route, idx) => (
        <div
          key={route.id}
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
                <FaMapMarkerAlt className="text-green-400" />
                <span>{route.frequency}</span>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {route.popularity}% Popular
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="text-lg font-bold text-neutral-800 dark:text-neutral-100">
                  {route.from}
                </div>
                <FaArrowRight className="text-green-600 text-sm" />
                <div className="text-lg font-bold text-neutral-800 dark:text-neutral-100">
                  {route.to}
                </div>
              </div>
            </div>

            <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
              {route.fromState} → {route.toState} • {route.distance}
            </div>

            <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-4 line-clamp-2">
              {route.description}
            </p>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                <FaClock className="text-sm" />
                <span className="text-sm">{route.duration}</span>
              </div>
              <div className="text-xl font-bold text-green-600 dark:text-green-400">
                {formatNairaPrice(route.price.min)}
              </div>
            </div>

            <div className="flex flex-wrap gap-1 mb-4">
              {route.features.map((feature, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-2 py-1 rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>

            <Link
              to={`/route-details/${route.id}`}
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              Book This Route
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-12">
      <Link
        to="/all-routes"
        className="inline-flex items-center gap-3 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30 font-semibold px-8 py-4 rounded-xl transition-all duration-300 group shadow-lg hover:shadow-xl"
      >
        View All Routes
        <FaArrowRight className="text-sm transform group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </div>
  </section>
);

export default FeaturedRoutes;