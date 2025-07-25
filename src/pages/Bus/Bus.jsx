import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import buses from '../../assets/assets'

const Bus = () => {

    const [ searchTerm, setSearchTerm ] = useState('');
    const [ selectedCategory, setSelectedCategory ] = useState('');

    // Function to handle search input
    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }

     // Function to handle category selection
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value)
    }

    // Filter buses based on search term and selected category
    const filterBuses = buses.filter(bus => {
        const matchesSearch = bus.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === '' || bus.category.toLowerCase() === selectedCategory.toLowerCase();
        return matchesSearch && matchesCategory
    })

  return (
    <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] mb-[8ch] space-y-14'>
        {/* Search and Filter */}
        <div className='w-full grid grid-cols-6 gap-14 bg-neutral-200/60 dark:bg-neutral-900/40 rounded-md px-6 py-5 items-center justify-between'>
            <div className='flex items-center gap-x-2 col-span-2'>
                <input 
                    type="text" 
                    id='seat' 
                    placeholder='Search Buses...' 
                    name='seat'
                    value={searchTerm}
                    onChange={handleSearch} 
                    className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-900/10 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900" />
                <button className='bg-violet-600 h-11 px-4 rounded-md text-base text-neutral-50 font-normal'>
                    <FaSearch />
                </button>
            </div>

            <div className="col-span-2">
                
            </div>

            <div className="col-span-2">
                <select 
                    className='w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-900/10 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900'
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
        <div className="w-full grid grid-cols-3 gap-10">
            {filterBuses.length > 0 ? (
                filterBuses.map(bus => (
                    <Link
                      key={bus.id} 
                      to={`/bus/bus-details/${bus.id}`} 
                      className='w-full bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl p-4'>
                        <img src={bus.image} alt="bus img" className='w-full aspect-video object-contain object-center'/>
                        <div className="px-3 py-4 space-y-2">
                            <div className="flex items-center justify-between">
                                <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">
                                    {bus.name}
                                </h1>
                                <p className="text-sm font-normal text-neutral-800 dark:text-neutral-50">
                                    {bus.passengers} passengers
                                </p>
                            </div>
                        </div>
                    </Link>
                ))
            ) : (
                <p className="text-xl text-neutral-800 dark:text-neutral-100">
                    No buses matches your search
                </p>
            )}
            
        </div>
    </div>
  )
}

export default Bus