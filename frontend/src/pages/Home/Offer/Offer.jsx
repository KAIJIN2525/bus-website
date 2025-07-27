import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Save from "../../../assets/save.png"
import { FaCopy } from 'react-icons/fa6'

const Offer = () => {

    const [copied, setCopied ] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText("GHOST01")
        .then(() => {
            setCopied(true);
            setTimeout(() => {
                setCopied(true)
            }, 2000);
        })
        .catch((err) => {
            console.log('failed to copy', err)
        })
    }

  return (
    <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mb-[8ch]'>
        <div className="w-full items-center flex justify-between">
            <h1 className='text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6'>
                Offer
            </h1>
            <Link to={"/offer"} className='text-violet-600 hover:text-violet-700 dark:hover:text-violet-400 font-semibold transition-colors duration-300 flex items-center gap-2 group'>
                View All 
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
        </div>

        <div className="grid grid-cols-2 gap-8">
            <div className="w-full h-auto rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 p-8 flex items-center gap-x-4 shadow-xl border border-violet-200/50 dark:border-violet-800/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <img src={Save} alt="save img" className="w-52 aspect-[2/1] object-contain object-center drop-shadow-lg" />
                <div className="flex flex-1 flex-col space-y-5">
                    <h1 className='text-xl font-bold text-neutral-800 dark:text-neutral-50'>
                        Get 40% off on your first booking
                    </h1>
                    <div className='flex items-center gap-x-5'>
                        <div className='w-fit border-2 border-dashed px-4 py-2 border-violet-300 dark:border-violet-600 bg-violet-100 dark:bg-violet-800/20 rounded-lg font-mono font-bold text-violet-700 dark:text-violet-300'>
                            {
                                copied
                                ?
                                <span className='text-green-600 font-semibold'>Copied!</span>
                                :
                                <span>GHOST01</span>
                            }
                        </div>
                        {/* copy button */}
                        <button onClick={handleCopy} className='text-xl text-violet-600 hover:text-violet-700 dark:hover:text-violet-400 p-2 rounded-lg hover:bg-violet-100 dark:hover:bg-violet-800/20 transition-all duration-300'>
                            <FaCopy />
                        </button>
                    </div>
                    <p className='text-sm text-neutral-500 dark:text-neutral-400 font-medium'>
                        Valid till: <span className='text-sm font-bold text-red-500'>24th November</span>
                    </p>
                </div>
            </div>
            <div className="w-full h-auto rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 flex items-center gap-x-4 shadow-xl border border-blue-200/50 dark:border-blue-800/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <img src={Save} alt="save img" className="w-52 aspect-[2/1] object-contain object-center drop-shadow-lg" />
                <div className="flex flex-1 flex-col space-y-5">
                    <h1 className='text-xl font-bold text-neutral-800 dark:text-neutral-50'>
                        Weekend Special - 25% off
                    </h1>
                    <div className='flex items-center gap-x-5'>
                        <div className='w-fit border-2 border-dashed px-4 py-2 border-blue-300 dark:border-blue-600 bg-blue-100 dark:bg-blue-800/20 rounded-lg font-mono font-bold text-blue-700 dark:text-blue-300'>
                            {
                                copied
                                ?
                                <span className='text-green-600 font-semibold'>Copied!</span>
                                :
                                <span>WEEKEND25</span>
                            }
                        </div>
                        {/* copy button */}
                        <button onClick={handleCopy} className='text-xl text-blue-600 hover:text-blue-700 dark:hover:text-blue-400 p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-800/20 transition-all duration-300'>
                            <FaCopy />
                        </button>
                    </div>
                    <p className='text-sm text-neutral-500 dark:text-neutral-400 font-medium'>
                        Valid till: <span className='text-sm font-bold text-red-500'>30th December</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offer