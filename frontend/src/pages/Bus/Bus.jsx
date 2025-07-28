import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaFilter,
  FaStar,
  FaWifi,
  FaSnowflake,
  FaUsers,
} from "react-icons/fa";
import buses from "../../assets/assets";

const Bus = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("");

  // Function to handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to handle category selection
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Function to handle sorting
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Filter and sort buses
  let filteredBuses = buses.filter((bus) => {
    const matchesSearch = bus.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "" ||
      bus.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  // Sort buses
  if (sortBy === "rating") {
    filteredBuses.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "passengers") {
    filteredBuses.sort((a, b) => b.passengers - a.passengers);
  } else if (sortBy === "name") {
    filteredBuses.sort((a, b) => a.name.localeCompare(b.name));
  }

  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case "luxury":
        return FaSnowflake;
      case "deluxe":
        return FaWifi;
      default:
        return FaUsers;
    }
  };

  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case "luxury":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400";
      case "deluxe":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400";
      case "tourist":
        return "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  return (
    <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-24 mb-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          Find Your Perfect Bus
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Choose from our fleet of comfortable, safe, and reliable buses for
          your next journey
        </p>
      </div>

      {/* Search and Filter */}
      <div className="w-full bg-white dark:bg-neutral-900/60 rounded-2xl px-6 md:px-8 py-8 mb-12 shadow-xl border border-neutral-200/50 dark:border-neutral-800/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
          <div className="lg:col-span-2">
            <label className="block mb-3 font-semibold text-neutral-700 dark:text-neutral-300">
              Search Buses
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search by bus name..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-50 dark:bg-neutral-800/60 pl-12 pr-4 h-14 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 focus:bg-white dark:focus:bg-neutral-800 transition-all duration-300 shadow-sm hover:shadow-md"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 dark:text-neutral-500" />
            </div>
          </div>

          <div>
            <label className="block mb-3 font-semibold text-neutral-700 dark:text-neutral-300">
              <FaFilter className="inline mr-2" />
              Bus Type
            </label>
            <select
              className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-50 dark:bg-neutral-800/60 px-4 h-14 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 focus:bg-white dark:focus:bg-neutral-800 transition-all duration-300 shadow-sm hover:shadow-md"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">All Types</option>
              <option value="Tourist">Tourist Bus</option>
              <option value="Private">Private Bus</option>
              <option value="Luxury">Luxury Bus</option>
              <option value="Deluxe">Deluxe Bus</option>
            </select>
          </div>

          <div>
            <label className="block mb-3 font-semibold text-neutral-700 dark:text-neutral-300">
              Sort By
            </label>
            <select
              className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-50 dark:bg-neutral-800/60 px-4 h-14 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 focus:bg-white dark:focus:bg-neutral-800 transition-all duration-300 shadow-sm hover:shadow-md"
              value={sortBy}
              onChange={handleSortChange}
            >
              <option value="">Default</option>
              <option value="rating">Highest Rated</option>
              <option value="passengers">Most Capacity</option>
              <option value="name">Name (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Results count */}
        <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700">
          <p className="text-neutral-600 dark:text-neutral-400">
            Showing{" "}
            <span className="font-semibold text-violet-600 dark:text-violet-400">
              {filteredBuses.length}
            </span>{" "}
            buses
            {searchTerm && ` for "${searchTerm}"`}
            {selectedCategory && ` in ${selectedCategory} category`}
          </p>
        </div>
      </div>

      {/* Bus Cards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBuses.length > 0 ? (
          filteredBuses.map((bus) => {
            const CategoryIcon = getCategoryIcon(bus.category);
            return (
              <Link
                key={bus.id}
                to={`/bus/bus-details/${bus.id}`}
                className="w-full bg-white dark:bg-neutral-900/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-neutral-200/50 dark:border-neutral-800/50 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={bus.image}
                    alt={bus.name}
                    className="w-full h-48 object-contain object-center transition-transform duration-300 group-hover:scale-110 bg-neutral-50 dark:bg-neutral-800/30"
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
                        bus.category
                      )}`}
                    >
                      <CategoryIcon className="text-xs" />
                      {bus.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300 mb-2">
                      {bus.name}
                    </h3>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }, (_, i) => (
                          <FaStar
                            key={i}
                            className={`text-sm ${
                              i < Math.floor(bus.rating)
                                ? "text-yellow-400"
                                : "text-gray-300 dark:text-gray-600"
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                          {bus.rating}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-neutral-500 dark:text-neutral-400">
                        <FaUsers className="text-sm" />
                        <span className="text-sm font-medium">
                          {bus.passengers} seats
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-700">
                    <div className="text-sm text-neutral-500 dark:text-neutral-400">
                      Starting from
                    </div>
                    <div className="text-2xl font-bold text-violet-600 dark:text-violet-400">
                      $25
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform group-hover:scale-105 shadow-md hover:shadow-lg">
                    View Details & Book
                  </button>
                </div>
              </Link>
            );
          })
        ) : (
          <div className="col-span-3 text-center py-16">
            <div className="text-6xl text-neutral-300 dark:text-neutral-600 mb-4">
              🚌
            </div>
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
              No buses found
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              Try adjusting your search criteria or browse all available buses
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("");
                setSortBy("");
              }}
              className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bus;
