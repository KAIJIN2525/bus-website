import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock, FaUsers, FaStar, FaArrowRight, FaFilter, FaSearch, FaTrendingUp } from 'react-icons/fa';
import { popularRoutes, formatNairaPrice } from '../../data/nigerianBusData';

const PopularRoutes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [priceRange, setPriceRange] = useState('all');

  // Filter and sort routes
  let filteredRoutes = popularRoutes.filter(route => {
    const matchesSearch = 
      route.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.to.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.fromState.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.toState.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPrice = priceRange === 'all' || 
      (priceRange === 'budget' && route.price.max <= 7000) ||
      (priceRange === 'mid' && route.price.min > 7000 && route.price.max <= 12000) ||
      (priceRange === 'premium' && route.price.min > 12000);
    
    return matchesSearch && matchesPrice;
  });

  // Sort routes
  if (sortBy === 'popularity') {
    filteredRoutes.sort((a, b) => b.popularity - a.popularity);
  } else if (sortBy === 'price') {
    filteredRoutes.sort((a, b) => a.price.min - b.price.min);
  } else if (sortBy === 'duration') {
    filteredRoutes.sort((a, b) => parseInt(a.duration.split('-')[0]) - parseInt(b.duration.split('-')[0]));
  }

  return (
    <div className="w-full mt-20 min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white py-20">
        <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FaTrendingUp className="text-4xl" />
              <h1 className="text-5xl md:text-6xl font-bold">
                Popular Routes
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-orange-100 leading-relaxed">
              Join thousands of travelers on Nigeria's most loved bus routes
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 -mt-16 relative z-10 mb-12">
        <div className="bg-white dark:bg-neutral-900/80 rounded-2xl shadow-2xl border border-neutral-200/50 dark:border-neutral-800/50 p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <label className="block mb-3 font-semibold text-neutral-700 dark:text-neutral-300">
                <FaSearch className="inline mr-2" />
                Search Routes
              </label>
              <input
                type="text"
                placeholder="Search by city or state..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800/60 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-orange-500 dark:focus:border-orange-400 text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
              />
            </div>

            <div>
              <label className="block mb-3 font-semibold text-neutral-700 dark:text-neutral-300">
                <FaFilter className="inline mr-2" />
                Price Range
              </label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800/60 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-orange-500 dark:focus:border-orange-400 text-neutral-800 dark:text-neutral-100 appearance-none"
              >
                <option value="all">All Prices</option>
                <option value="budget">Budget (≤₦7,000)</option>
                <option value="mid">Mid-range (₦7,000-₦12,000)</option>
                <option value="premium">Premium (₦12,000+)</option>
              </select>
            </div>

            <div>
              <label className="block mb-3 font-semibold text-neutral-700 dark:text-neutral-300">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800/60 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-orange-500 dark:focus:border-orange-400 text-neutral-800 dark:text-neutral-100 appearance-none"
              >
                <option value="popularity">Most Popular</option>
                <option value="price">Lowest Price</option>
                <option value="duration">Shortest Duration</option>
              </select>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700">
            <p className="text-neutral-600 dark:text-neutral-400">
              Showing <span className="font-semibold text-orange-600 dark:text-orange-400">{filteredRoutes.length}</span> popular routes
            </p>
          </div>
        </div>
      </div>

      {/* Routes Grid */}
      <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredRoutes.map((route, index) => (
            <div
              key={route.id}
              className="bg-white dark:bg-neutral-900/80 rounded-2xl shadow-xl hover:shadow-2xl border border-neutral-200/50 dark:border-neutral-800/50 overflow-hidden group transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex">
                <div className="w-1/3 relative">
                  <img
                    src={route.image}
                    alt={`${route.from} to ${route.to}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
                  
                  {/* Rank Badge */}
                  <div className="absolute top-4 left-4 bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    #{index + 1}
                  </div>
                </div>

                <div className="w-2/3 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="text-xl font-bold text-neutral-800 dark:text-neutral-100">
                        {route.from}
                      </div>
                      <FaArrowRight className="text-orange-600 text-sm" />
                      <div className="text-xl font-bold text-neutral-800 dark:text-neutral-100">
                        {route.to}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-orange-100 dark:bg-orange-900/20 px-2 py-1 rounded-full">
                      <FaTrendingUp className="text-orange-600 text-xs" />
                      <span className="text-orange-600 dark:text-orange-400 text-xs font-semibold">
                        {route.popularity}%
                      </span>
                    </div>
                  </div>

                  <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                    {route.fromState} → {route.toState} • {route.distance}
                  </div>

                  <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-4 line-clamp-2">
                    {route.description}
                  </p>

                  {/* Route Details */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                      <FaClock className="text-blue-500" />
                      <span>{route.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                      <FaUsers className="text-green-500" />
                      <span>{route.frequency}</span>
                    </div>
                  </div>

                  {/* Companies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {route.companies.slice(0, 2).map((company, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full"
                        >
                          {company}
                        </span>
                      ))}
                      {route.companies.length > 2 && (
                        <span className="text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 px-2 py-1 rounded-full">
                          +{route.companies.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {route.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-700">
                    <div>
                      <div className="text-sm text-neutral-500 dark:text-neutral-400">Starting from</div>
                      <div className="text-xl font-bold text-orange-600 dark:text-orange-400">
                        {formatNairaPrice(route.price.min)}
                      </div>
                    </div>
                    <Link
                      to={`/route-details/${route.id}`}
                      className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2 text-sm"
                    >
                      Book Now
                      <FaArrowRight className="text-xs" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredRoutes.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl text-neutral-300 dark:text-neutral-600 mb-4">🚌</div>
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
              No routes found
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              Try adjusting your search criteria or browse all available routes
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setPriceRange('all');
                setSortBy('popularity');
              }}
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularRoutes;