import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock, FaUsers, FaStar, FaArrowRight, FaWifi, FaSnowflake, FaShieldAlt, FaPhone, FaCalendarAlt } from 'react-icons/fa';
import { allRoutes, companyBuses, companyInfo, formatNairaPrice, getRandomTerminals } from '../../data/nigerianBusData';

const RouteDetails = () => {
  const { id } = useParams();
  const [route, setRoute] = useState(null);
  const [availableBuses, setAvailableBuses] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find route in all routes
    const foundRoute = allRoutes.find(r => r.id === parseInt(id));
    
    if (foundRoute) {
      setRoute(foundRoute);
      
      // All buses are available for all routes in a single company
      setAvailableBuses(companyBuses);
    }
    
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (!route) {
    return (
      <div className="w-full mt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Route Not Found
          </h2>
          <Link to="/all-routes" className="text-green-600 hover:text-green-700">
            Browse Available Routes
          </Link>
        </div>
      </div>
    );
  }

  const fromTerminals = getRandomTerminals(route.from.toLowerCase().replace(' ', '-'), 2);
  const toTerminals = getRandomTerminals(route.to.toLowerCase().replace(' ', '-'), 2);

  return (
    <div className="w-full mt-20 min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={route.image}
          alt={`${route.from} to ${route.to}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:px-28 md:px-16 sm:px-7">
          <div className="text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl font-bold">{route.from}</div>
              <FaArrowRight className="text-2xl text-blue-400" />
              <div className="text-4xl font-bold">{route.to}</div>
              <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold ml-4">
                {route.popularity}% Popular
              </div>
            </div>
            <p className="text-xl text-blue-100 mb-2">{route.description}</p>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>{route.distance}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-green-400" />
                <span>{route.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUsers className="text-yellow-400" />
                <span>{route.frequency}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Route Information */}
            <div className="bg-white dark:bg-neutral-900/80 rounded-2xl shadow-xl border border-neutral-200/50 dark:border-neutral-800/50 p-8">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
                Route Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-neutral-700 dark:text-neutral-300 mb-3">Departure</h3>
                  <div className="space-y-2">
                    <div className="text-lg font-bold text-neutral-800 dark:text-neutral-100">
                      {route.from}, {route.fromState}
                    </div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">
                      Multiple pickup points available
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-neutral-700 dark:text-neutral-300 mb-3">Destination</h3>
                  <div className="space-y-2">
                    <div className="text-lg font-bold text-neutral-800 dark:text-neutral-100">
                      {route.to}, {route.toState}
                    </div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">
                      Multiple drop-off points available
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="font-semibold text-neutral-700 dark:text-neutral-300 mb-3">Route Features</h3>
                <div className="flex flex-wrap gap-2">
                  {route.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Company Info */}
              <div>
                <h3 className="font-semibold text-neutral-700 dark:text-neutral-300 mb-3">Service Provider</h3>
                <div className="flex items-center gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="w-16 h-8 bg-green-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">{companyInfo.shortName}</span>
                  </div>
                  <div>
                    <div className="font-bold text-neutral-800 dark:text-neutral-100">{companyInfo.name}</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">
                      {companyInfo.rating}★ • Established {companyInfo.established}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Available Buses */}
            <div className="bg-white dark:bg-neutral-900/80 rounded-2xl shadow-xl border border-neutral-200/50 dark:border-neutral-800/50 p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
                  Available Buses
                </h2>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-blue-600" />
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="px-3 py-2 bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-800 dark:text-neutral-100"
                  />
                </div>
              </div>

              <div className="space-y-4">
                {availableBuses.map((bus) => (
                  <div
                    key={bus.id}
                    className="border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={bus.image}
                          alt={bus.name}
                          className="w-16 h-12 object-cover rounded-lg"
                        />
                        <div>
                          <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-100">
                            {bus.name}
                          </h3>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            {companyInfo.name} • {bus.category}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                          {formatNairaPrice(bus.priceRange.min)}
                        </div>
                        <div className="text-sm text-neutral-500 dark:text-neutral-400">
                          Starting from
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                        <FaUsers className="text-blue-500" />
                        <span>{bus.passengers} seats</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                        <FaStar className="text-yellow-500" />
                        <span>{bus.rating}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                        <FaWifi className="text-green-500" />
                        <span>WiFi</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                        <FaSnowflake className="text-blue-500" />
                        <span>AC</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {bus.features.slice(0, 3).map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-2 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={`/bus/bus-details/${bus.id}`}
                        className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                      >
                        Select Bus
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Info */}
            <div className="bg-white dark:bg-neutral-900/80 rounded-2xl shadow-xl border border-neutral-200/50 dark:border-neutral-800/50 p-6">
              <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                Quick Info
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600 dark:text-neutral-400">Distance</span>
                  <span className="font-semibold text-neutral-800 dark:text-neutral-100">{route.distance}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600 dark:text-neutral-400">Duration</span>
                  <span className="font-semibold text-neutral-800 dark:text-neutral-100">{route.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600 dark:text-neutral-400">Frequency</span>
                  <span className="font-semibold text-neutral-800 dark:text-neutral-100">{route.frequency}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600 dark:text-neutral-400">Price Range</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">
                    {formatNairaPrice(route.price.min)} - {formatNairaPrice(route.price.max)}
                  </span>
                </div>
              </div>
            </div>

            {/* Terminals */}
            <div className="bg-white dark:bg-neutral-900/80 rounded-2xl shadow-xl border border-neutral-200/50 dark:border-neutral-800/50 p-6">
              <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                Terminals
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-neutral-700 dark:text-neutral-300 mb-2">{route.from}</h4>
                  <div className="space-y-2">
                    {fromTerminals.map((terminal, idx) => (
                      <div key={idx} className="text-sm">
                        <div className="font-medium text-neutral-800 dark:text-neutral-100">{terminal.name}</div>
                        <div className="text-neutral-600 dark:text-neutral-400">{terminal.address}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-700 dark:text-neutral-300 mb-2">{route.to}</h4>
                  <div className="space-y-2">
                    {toTerminals.map((terminal, idx) => (
                      <div key={idx} className="text-sm">
                        <div className="font-medium text-neutral-800 dark:text-neutral-100">{terminal.name}</div>
                        <div className="text-neutral-600 dark:text-neutral-400">{terminal.address}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Support */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4">Need Help?</h3>
              <p className="text-green-100 mb-4 text-sm">
                Our customer support team is available 24/7 to assist you with your booking.
              </p>
              <button className="flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 w-full justify-center">
                <FaPhone className="text-sm" />
                {companyInfo.contact.phone}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteDetails;