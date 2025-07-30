import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock, FaUsers, FaStar, FaArrowRight, FaFilter, FaSearch } from 'react-icons/fa';
import { featuredRoutes, formatNairaPrice } from '../../data/nigerianBusData';

const FeaturedRoutes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [filterBy, setFilterBy] = useState('all');

  // Filter and sort routes
  let filteredRoutes = featuredRoutes.filter(route => {
    const matchesSearch = 
      route.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.to.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.fromState.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.toState.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterBy === 'all' || 
      (filterBy === 'short' && parseInt(route.duration.split('-')[0]) <= 4) ||
      (filterBy === 'medium' && parseInt(route.duration.split('-')[0]) > 4 && parseInt(route.duration.split('-')[0]) <= 8) ||
      (filterBy === 'long' && parseInt(route.duration.split('-')[0]) > 8);
    
    return matchesSearch && matchesFilter;
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
    <div className="w-full mt-20 min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white py-20">
        <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Featured Routes
            </h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
              Discover Nigeria's most popular travel destinations with our premium bus services
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
                className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800/60 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-green-500 dark:focus:border-green-400 text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
              />
            </div>

            <div>
              <label className="block mb-3 font-semibold text-neutral-700 dark:text-neutral-300">
                <FaFilter className="inline mr-2" />
                Filter by Duration
              </label>
              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
                className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800/60 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-green-500 dark:focus:border-green-400 text-neutral-800 dark:text-neutral-100 appearance-none"
              >
                <option value="all">All Routes</option>
                <option value="short">Short (≤4 hours)</option>
                <option value="medium">Medium (4-8 hours)</option>
                <option value="long">Long (8+ hours)</option>
              </select>
            </div>

            <div>
              <label className="block mb-3 font-semibold text-neutral-700 dark:text-neutral-300">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800/60 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-green-500 dark:focus:border-green-400 text-neutral-800 dark:text-neutral-100 appearance-none"
              >
                <option value="popularity">Most Popular</option>
                <option value="price">Lowest Price</option>
                <option value="duration">Shortest Duration</option>
              </select>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700">
            <p className="text-neutral-600 dark:text-neutral-400">
              Showing <span className="font-semibold text-green-600 dark:text-green-400">{filteredRoutes.length}</span> featured routes
            </p>
          </div>
        </div>
      </div>

      {/* Routes Grid */}
      <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRoutes.map((route) => (
            <div
              key={route.id}
              className="bg-white dark:bg-neutral-900/80 rounded-2xl shadow-xl hover:shadow-2xl border border-neutral-200/50 dark:border-neutral-800/50 overflow-hidden group transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={route.image}
                  alt={`${route.from} to ${route.to}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Popularity Badge */}
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {route.popularity}% Popular
                </div>

                {/* Route Info Overlay */}
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <FaMapMarkerAlt className="text-green-400" />
                    <span className="text-sm font-medium">{route.frequency}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-blue-400" />
                    <span className="text-sm font-medium">{route.duration}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-xl font-bold text-neutral-800 dark:text-neutral-100">
                      {route.from}
                    </div>
                    <FaArrowRight className="text-green-600 text-sm" />
                    <div className="text-xl font-bold text-neutral-800 dark:text-neutral-100">
                      {route.to}
                    </div>
                  </div>
                </div>

                <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  {route.fromState} → {route.toState} • {route.distance}
                </div>

                <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-4 line-clamp-2">
                  {route.description}
                </p>

                {/* Companies */}
                <div className="mb-4">
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-2">Available with:</div>
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
                        className="text-xs bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-700">
                  <div>
                    <div className="text-sm text-neutral-500 dark:text-neutral-400">Starting from</div>
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {formatNairaPrice(route.price.min)}
                    </div>
                  </div>
                  <Link
                    to={`/route-details/${route.id}`}
                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2"
                  >
                    Book Now
                    <FaArrowRight className="text-sm" />
                  </Link>
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
                setFilterBy('all');
                setSortBy('popularity');
              }}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedRoutes;