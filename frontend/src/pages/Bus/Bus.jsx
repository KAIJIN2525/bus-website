import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import buses from "../../assets/assets";

const Bus = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Function to handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to handle category selection
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Filter buses based on search term and selected category
  const filterBuses = buses.filter((bus) => {
    const matchesSearch = bus.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "" ||
      bus.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] mb-[8ch] space-y-14">
      {/* Search and Filter */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 bg-white dark:bg-neutral-900/60 rounded-2xl px-4 md:px-8 py-6 items-center justify-between shadow-xl border border-neutral-200/50 dark:border-neutral-800/50">
        <div className="flex items-center gap-x-2 col-span-2">
          <input
            type="text"
            id="seat"
            placeholder="Search Buses..."
            name="seat"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-50 dark:bg-neutral-800/60 px-4 h-12 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 focus:bg-white dark:focus:bg-neutral-800 transition-all duration-300"
          />
          <button className="bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 h-12 px-5 rounded-xl text-base text-neutral-50 font-medium transition-all duration-300 shadow-md hover:shadow-lg">
            <FaSearch />
          </button>
        </div>
        <div className="col-span-2"></div>
        <div className="col-span-2">
          <select
            className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-50 dark:bg-neutral-800/60 px-4 h-12 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 focus:bg-white dark:focus:bg-neutral-800 transition-all duration-300"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Select Bus Type</option>
            <option value="Tourist">Tourist Bus</option>
            <option value="Private">Private Bus</option>
            <option value="Luxury">Luxury Bus</option>
            <option value="Deluxe">Deluxe Bus</option>
          </select>
        </div>
      </div>

      {/* Bus Cards  */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filterBuses.length > 0 ? (
          filterBuses.map((bus) => (
            <Link
              key={bus.id}
              to={`/bus/bus-details/${bus.id}`}
              className="w-full bg-white block dark:bg-neutral-900/60 rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-neutral-200/50 dark:border-neutral-800/50 transition-all duration-300 transform hover:scale-105 group"
            >
              <img
                src={bus.image}
                alt="bus img"
                className="w-full aspect-video object-contain object-center transition-transform duration-300 group-hover:scale-110 rounded-xl"
              />
              <div className="px-2 py-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-bold text-neutral-800 dark:text-neutral-50 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                    {bus.name}
                  </h1>
                  <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full">
                    {bus.passengers} passengers
                  </p>
                </div>
                <div className="flex items-center gap-x-2">
                  <span className="text-xs font-semibold text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/20 px-2 py-1 rounded">
                    {bus.category}
                  </span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    {bus.features?.join(", ")}
                  </span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-xl text-neutral-800 dark:text-neutral-100 col-span-3 text-center py-12">
            No buses match your search
          </p>
        )}
      </div>
    </div>
  );
};

export default Bus;
