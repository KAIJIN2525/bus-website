import React from 'react'
import { Link } from 'react-router-dom'
import Bus1 from '../../../assets/bus1.png'
import Bus2 from '../../../assets/bus6.png'
import Bus3 from '../../../assets/bus9.png'

const Category = () => {
  return (
    <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mb-[8ch]'>
        <div className="w-full items-center flex justify-between">
            <h1 className='text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6'>
                Category
            </h1>
            <Link to={"/bus"} className='text-violet-600 hover:text-violet-700 dark:hover:text-violet-400 font-semibold transition-colors duration-300 flex items-center gap-2 group'>
                View All 
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
        </div>
        <div className="grid grid-cols-3 gap-8">
            <Link to={"/bus"} className='bg-white dark:bg-neutral-900/60 block rounded-2xl px-6 py-6 relative group ease-in-out duration-500 overflow-hidden shadow-lg hover:shadow-2xl border border-neutral-200/50 dark:border-neutral-800/50 transform hover:scale-105'>
                <img src={Bus1} alt="bus img" className='w-full aspect-video object-contain transition-transform duration-500 group-hover:scale-110'/>
                <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-violet-600/90 to-purple-600/90 group-hover:flex hidden items-center justify-center ease-in-out duration-500 backdrop-blur-sm'>
                    <h2 className='text-2xl font-bold text-center text-white drop-shadow-lg'>
                        Private Bus
                    </h2>
                </div>
            </Link>

            <Link to={"/bus"} className='bg-white dark:bg-neutral-900/60 block rounded-2xl px-6 py-6 relative group ease-in-out duration-500 overflow-hidden shadow-lg hover:shadow-2xl border border-neutral-200/50 dark:border-neutral-800/50 transform hover:scale-105'>
                <img src={Bus2} alt="bus img" className='w-full aspect-video object-contain transition-transform duration-500 group-hover:scale-110'/>
                <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-blue-600/90 to-indigo-600/90 group-hover:flex hidden items-center justify-center ease-in-out duration-500 backdrop-blur-sm'>
                    <h2 className='text-2xl font-bold text-center text-white drop-shadow-lg'>
                        Tourist Bus
                    </h2>
                </div>
            </Link>
            <Link to={"/bus"} className='bg-white dark:bg-neutral-900/60 block rounded-2xl px-6 py-6 relative group ease-in-out duration-500 overflow-hidden shadow-lg hover:shadow-2xl border border-neutral-200/50 dark:border-neutral-800/50 transform hover:scale-105'>
                <img src={Bus3} alt="bus img" className='w-full aspect-video object-contain transition-transform duration-500 group-hover:scale-110'/>
                <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-emerald-600/90 to-teal-600/90 group-hover:flex hidden items-center justify-center ease-in-out duration-500 backdrop-blur-sm'>
                    <h2 className='text-2xl font-bold text-center text-white drop-shadow-lg'>
                        Deluxe Bus
                    </h2>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Category