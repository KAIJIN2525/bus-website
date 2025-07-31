import React, { useState } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";
import { popularRoutes } from "../../data/nigerianBusData";

const nigerianCitiesFrom = [
  "Lagos",
  "Abuja",
  "Kano",
  "Ibadan",
  "Port Harcourt",
  "Benin City",
  "Kaduna",
  "Jos",
  "Ilorin",
  "Enugu",
];

const nigerianCitiesTo = [
  "Abuja",
  "Lagos",
  "Ibadan",
  "Kano",
  "Enugu",
  "Calabar",
  "Warri",
  "Aba",
  "Maiduguri",
  "Sokoto",
];

const Search = () => {
  const [form, setForm] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
    seat: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.from || !form.to || !form.date || !form.time || !form.seat) {
      setError("Please fill in all fields to search for available buses.");
      return;
    }
    // TODO: Add search logic or API call here
    alert("Searching for available buses...");
  };

  return (
    <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 -mt-16 relative z-20">
      <div className="w-full bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-2xl border border-neutral-200/50 dark:border-neutral-800/50 backdrop-blur-sm">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
            Find Your Perfect Journey
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            Search and compare bus routes across the country
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 items-end">
            <div className="lg:col-span-1">
              <label
                htmlFor="from"
                className="flex items-center gap-2 mb-3 font-semibold text-neutral-700 dark:text-neutral-300"
              >
                <FaMapMarkerAlt className="text-violet-600 text-sm" />
                From
              </label>
              <select
                name="from"
                id="from"
                value={form.from}
                onChange={handleChange}
                className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-50 dark:bg-neutral-800/60 px-4 h-14 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 focus:bg-white dark:focus:bg-neutral-800 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <option value="">Select departure city</option>
                {nigerianCitiesFrom.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            <div className="lg:col-span-1">
              <label
                htmlFor="to"
                className="flex items-center gap-2 mb-3 font-semibold text-neutral-700 dark:text-neutral-300"
              >
                <FaMapMarkerAlt className="text-violet-600 text-sm" />
                To
              </label>
              <select
                name="to"
                id="to"
                value={form.to}
                onChange={handleChange}
                className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-50 dark:bg-neutral-800/60 px-4 h-14 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 focus:bg-white dark:focus:bg-neutral-800 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <option value="">Select destination city</option>
                {nigerianCitiesTo.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            <div className="lg:col-span-1">
              <label
                htmlFor="date"
                className="flex items-center gap-2 mb-3 font-semibold text-neutral-700 dark:text-neutral-300"
              >
                <FaCalendarAlt className="text-violet-600 text-sm" />
                Departure Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-50 dark:bg-neutral-800/60 px-4 h-14 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 focus:bg-white dark:focus:bg-neutral-800 transition-all duration-300 shadow-sm hover:shadow-md"
              />
            </div>

            <div className="lg:col-span-1">
              <label
                htmlFor="time"
                className="flex items-center gap-2 mb-3 font-semibold text-neutral-700 dark:text-neutral-300"
              >
                <FaClock className="text-violet-600 text-sm" />
                Preferred Time
              </label>
              <select
                name="time"
                id="time"
                value={form.time}
                onChange={handleChange}
                className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-50 dark:bg-neutral-800/60 px-4 h-14 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 focus:bg-white dark:focus:bg-neutral-800 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <option value="">Any time</option>
                <option value="morning">Morning (6AM - 12PM)</option>
                <option value="afternoon">Afternoon (12PM - 6PM)</option>
                <option value="evening">Evening (6PM - 12AM)</option>
                <option value="night">Night (12AM - 6AM)</option>
              </select>
            </div>

            <div className="lg:col-span-1">
              <label
                htmlFor="seat"
                className="flex items-center gap-2 mb-3 font-semibold text-neutral-700 dark:text-neutral-300"
              >
                <FaUsers className="text-violet-600 text-sm" />
                Passengers
              </label>
              <input
                type="number"
                id="seat"
                name="seat"
                min="1"
                max="10"
                value={form.seat}
                onChange={handleChange}
                placeholder="How many?"
                className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-50 dark:bg-neutral-800/60 px-4 h-14 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 focus:bg-white dark:focus:bg-neutral-800 transition-all duration-300 shadow-sm hover:shadow-md"
              />
            </div>

            <div className="lg:col-span-1 flex flex-col gap-2">
              <button
                type="submit"
                className="w-full px-6 h-14 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-white text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <FaSearch className="text-sm" />
                Search Buses
              </button>
              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                  <span className="text-red-600 dark:text-red-400 text-sm font-medium">
                    {error}
                  </span>
                </div>
              )}
            </div>
          </div>
        </form>

        {/* Quick Search Options */}
        <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-700">
          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-4">
            Quick Route Selection:
          </p>
          <div className="flex flex-wrap gap-3">
            {popularRoutes.map((route, index) => (
              <button
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full text-sm font-medium hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors duration-300 group"
                onClick={() => {
                  setForm((prev) => ({
                    ...prev,
                    from: route.from,
                    to: route.to,
                  }));
                }}
              >
                <span>{route.from}</span>
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                <span>{route.to}</span>
                <span className="text-xs bg-green-200 dark:bg-green-800 px-2 py-0.5 rounded-full ml-2">
                  {route.price}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;