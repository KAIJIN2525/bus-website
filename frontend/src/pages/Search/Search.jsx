import React, { useState } from "react";

const locationsFrom = [
  "Location 1",
  "Location 2",
  "Location 3",
  "Location 4",
  "Location 5",
];
const locationsTo = [
  "Location 6",
  "Location 7",
  "Location 8",
  "Location 9",
  "Location 10",
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
      setError("Please fill in all fields.");
      return;
    }
    // TODO: Add search logic or API call here
    alert("Searching for available buses...");
  };

  return (
    <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 my-[8ch]">
      <div className="w-full bg-neutral-100 rounded-md dark:bg-neutral-900/40 p-8 shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 items-end">
            <div>
              <label htmlFor="from" className="block mb-2 font-medium">
                From
              </label>
              <select
                name="from"
                id="from"
                value={form.from}
                onChange={handleChange}
                className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-900/10 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
              >
                <option value="">Select Location</option>
                {locationsFrom.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="to" className="block mb-2 font-medium">
                To
              </label>
              <select
                name="to"
                id="to"
                value={form.to}
                onChange={handleChange}
                className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-900/10 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
              >
                <option value="">Select Location</option>
                {locationsTo.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="date" className="block mb-2 font-medium">
                Choose Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-900/10 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
              />
            </div>
            <div>
              <label htmlFor="time" className="block mb-2 font-medium">
                Choose Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-900/10 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
              />
            </div>
            <div>
              <label htmlFor="seat" className="block mb-2 font-medium">
                Total Seat
              </label>
              <input
                type="number"
                id="seat"
                name="seat"
                min="1"
                value={form.seat}
                onChange={handleChange}
                placeholder="Enter seat"
                className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-900/10 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
              />
            </div>
            <div className="flex flex-col gap-2">
              <button
                type="submit"
                className="w-full px-4 h-12 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-neutral-50 text-base font-semibold rounded-md shadow-md transition-all duration-300"
              >
                Check Availability
              </button>
              {error && <span className="text-red-500 text-sm">{error}</span>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
