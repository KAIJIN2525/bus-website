import React from 'react'

const Search = () => {
  return (
    <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 my-[8ch]'>
      <div className="w-full bg-white dark:bg-neutral-900/60 rounded-2xl p-8 shadow-xl border border-neutral-200/50 dark:border-neutral-800/50 backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-8 text-center">Find Your Perfect Journey</h2>
        <div className="grid grid-cols-3 gap-x-10 gap-y-12 items-end">
            <div className=''>
                <label htmlFor="from" className='block mb-3 font-semibold text-neutral-700 dark:text-neutral-300'>
                    From
                </label>
                <select name="from" id="from" className='w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-50 dark:bg-neutral-800/60 px-4 h-14 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 focus:bg-white dark:focus:bg-neutral-800 transition-all duration-300 shadow-sm hover:shadow-md'>
                    <option value="">Select Location</option>
                    <option value="location1">Location 1</option>
                    <option value="location2">Location 2</option>
                    <option value="location3">Location 3</option>
                    <option value="location4">Location 4</option>
                    <option value="location5">Location 5</option>
                </select>
            </div>

            <div className=''>
                <label htmlFor="to" className='block mb-3 font-semibold text-neutral-700 dark:text-neutral-300'>
                    To
                </label>
                <select name="to" id="to" className='w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-50 dark:bg-neutral-800/60 px-4 h-14 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 focus:bg-white dark:focus:bg-neutral-800 transition-all duration-300 shadow-sm hover:shadow-md'>
                    <option value="">Select Location</option>
                    <option value="location6">Location 6</option>
                    <option value="location7">Location 7</option>
                    <option value="location8">Location 8</option>
                    <option value="location9">Location 9</option>
                    <option value="location10">Location 10</option>
                </select>
            </div>

            <div className=''>
                <label htmlFor="date" className='block mb-3 font-semibold text-neutral-700 dark:text-neutral-300'>
                    Choose Date
                </label>
                <input type="date" id='date' name='date' className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-50 dark:bg-neutral-800/60 px-4 h-14 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 focus:bg-white dark:focus:bg-neutral-800 transition-all duration-300 shadow-sm hover:shadow-md" />
            </div>

            <div className=''>
                <label htmlFor="time" className='block mb-3 font-semibold text-neutral-700 dark:text-neutral-300'>
                    Choose Time
                </label>
                <input type="time" id='time' name='time' className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-50 dark:bg-neutral-800/60 px-4 h-14 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 focus:bg-white dark:focus:bg-neutral-800 transition-all duration-300 shadow-sm hover:shadow-md" />
            </div>

            <div className=''>
                <label htmlFor="seat" className='block mb-3 font-semibold text-neutral-700 dark:text-neutral-300'>
                    Total Seat
                </label>
                <input type="number" id='seat' placeholder='Enter seat' name='seat' className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-50 dark:bg-neutral-800/60 px-4 h-14 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 focus:bg-white dark:focus:bg-neutral-800 transition-all duration-300 shadow-sm hover:shadow-md" />
            </div>

            <div className=''>
                <button className='w-full px-4 h-14 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-neutral-50 text-base font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105'>
                    Check Availability
                </button>
            </div>

        </div>
      </div>  
    </div>
  )
}

export default Search