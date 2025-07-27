import React, { useEffect, useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Checkout = () => {
    const [ savedSeats, setSavedSeats ] = useState([]);
    const [ savedTotal, setSavedTotal ] =  useState(0);
    const [ from, setFrom ] = useState('');
    const [ to , setTo ] = useState('');

    useEffect(() => {
        // Retrieving info from the local storage
        const storedSeats = JSON.parse(localStorage.getItem('selectedSeats')) || [];
        const storedTotal = localStorage.getItem('totalPrice') || 0;
        const storedFrom = localStorage.getItem('from') || '';
        const storedTo = localStorage.getItem('to') || '';

        setSavedSeats(storedSeats);
        setSavedTotal(storedTotal);
        setFrom(storedFrom);
        setTo(storedTo);
    }, []);

  return (
    <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] mb-[8ch] space-y-10'>
        <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl font-bold text-neutral-800 dark:text-neutral-100">Complete Your Booking</h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">Just a few more details and you're all set!</p>
        </div>
        
        <div className="grid grid-cols-5 gap-16 items-start">
            <div className="col-span-3 space-y-8 pr-20">
                <h2 className="text-2xl text-neutral-800 dark:text-neutral-100 font-bold border-b-2 border-violet-200 dark:border-violet-800 pb-3">
                    Passenger Information
                </h2>
                <form className='space-y-8'>
                    <div className=''>
                        <label htmlFor="fullname" className='block mb-3 font-semibold text-neutral-700 dark:text-neutral-300'>
                            Full Name
                        </label>
                        <input type="text" id='fullname' placeholder='e.g. David Felix ' name='fullname' className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-50 dark:bg-neutral-800/60 px-4 h-14 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 focus:bg-white dark:focus:bg-neutral-800 transition-all duration-300 shadow-sm hover:shadow-md" />
                    </div>
                    <div className=''>
                        <label htmlFor="email" className='block mb-3 font-semibold text-neutral-700 dark:text-neutral-300'>
                            Email Address
                        </label>
                        <input type="email" id='email' placeholder='e.g. davidfelix01@gmail.com ' name='email' className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-50 dark:bg-neutral-800/60 px-4 h-14 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 focus:bg-white dark:focus:bg-neutral-800 transition-all duration-300 shadow-sm hover:shadow-md" />
                        <small className='block mt-2 text-sm text-neutral-500 dark:text-neutral-400 font-medium bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border-l-4 border-blue-400'>
                            You will get your tickets via this email address.
                        </small>
                    </div>
                    <div className=''>
                        <label htmlFor="phone" className='block mb-3 font-semibold text-neutral-700 dark:text-neutral-300'>
                            Phone Number
                        </label>
                        <input type="text" id='phone' placeholder='e.g. +234 801 234 5478 ' name='phone' className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-50 dark:bg-neutral-800/60 px-4 h-14 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 focus:bg-white dark:focus:bg-neutral-800 transition-all duration-300 shadow-sm hover:shadow-md" />
                    </div>
                    <div className=''>
                        <label htmlFor="altphone" className='block mb-3 font-semibold text-neutral-700 dark:text-neutral-300'>
                            Alternative Phone Number
                        </label>
                        <input type="text" id='altphone' placeholder='e.g. +234 812 345 6789' name='altphone' className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-50 dark:bg-neutral-800/60 px-4 h-14 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 focus:bg-white dark:focus:bg-neutral-800 transition-all duration-300 shadow-sm hover:shadow-md" />
                    </div>
                </form>
            </div>

            <div className="col-span-2 space-y-8 sticky top-24">
                <div className="bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900/80 dark:to-neutral-900/60 rounded-2xl py-8 px-6 shadow-2xl border border-neutral-200/50 dark:border-neutral-800/50 backdrop-blur-sm">
                    <h2 className="text-2xl text-center text-neutral-800 dark:text-neutral-100 font-bold border-b-2 border-violet-200 dark:border-violet-800 pb-4 mb-6">
                       Your Booking Status
                    </h2>

                    <div className="space-y-8 pb-4">
                        <div className="space-y-5">
                            <h6 className="text-lg text-neutral-700 dark:text-neutral-200 font-bold">
                                Your Destination
                            </h6>

                            <div className="w-full flex items-center gap-x-3 bg-neutral-50 dark:bg-neutral-800/40 p-4 rounded-xl">
                                <div className="w-fit text-base font-bold text-violet-600 dark:text-violet-400">
                                    From:- <span className='ml-1.5'>
                                        {from}
                                    </span>
                                </div>
                                <div className="flex-1">
                                <div className="w-full h-[2px] border border-dashed border-violet-300 dark:border-violet-600"></div>
                                </div>
                                <div className="w-fit text-base font-bold text-violet-600 dark:text-violet-400">
                                    To:- <span className='ml-1.5'>
                                        {to}
                                    </span>
                                </div>
                            </div>

                            <div className="w-full flex items-center gap-x-3 bg-neutral-50 dark:bg-neutral-800/40 p-4 rounded-xl">
                                <div className="w-fit text-base font-bold text-green-600 dark:text-green-400">
                                   Departing at:- <span className='ml-1.5'>
                                            03:30 PM
                                        </span>
                                </div>
                                <div className="flex-1">
                                    <div className="w-full h-[2px] border border-dashed border-green-300 dark:border-green-600"></div>
                                </div>
                                <div className="w-fit text-base font-bold text-green-600 dark:text-green-400">
                                    Arriving:- <span className='ml-1.5'>
                                        04:00 PM
                                    </span>
                                </div>
                            </div> 
                        </div>

                            <div className="space-y-5 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 p-5 rounded-xl border border-violet-200/50 dark:border-violet-800/50">
                                <div className="w-full flex items-center justify-between">
                                    <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-bold">
                                        Total No. of Seats
                                    </h6>

                                    <h6 className="text-base text-violet-600 dark:text-violet-400 font-bold bg-white dark:bg-neutral-800 px-3 py-1 rounded-full">
                                        {savedSeats.length} 
                                    </h6>
                                </div>

                                <div className="w-full flex items-center justify-between">
                                    <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-bold">
                                        Selected Seats:
                                    </h6>

                                    <h6 className="text-base text-violet-600 dark:text-violet-400 font-bold bg-white dark:bg-neutral-800 px-3 py-1 rounded-full">
                                        {savedSeats.join(",")}
                                    </h6>
                                </div>

                                <div className="w-full flex items-center justify-between border-t-2 border-violet-200 dark:border-violet-800 pt-4">
                                    <h6 className="text-lg text-neutral-700 dark:text-neutral-200 font-bold">
                                        Total Amount
                                    </h6>

                                    <h6 className="text-2xl text-violet-600 dark:text-violet-400 font-bold">
                                        $ {savedTotal}
                                    </h6>
                                </div>
                            </div>


                    </div>
                </div>

                <button className="w-full px-8 h-16 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-neutral-50 text-lg font-bold rounded-2xl flex items-center justify-center gap-x-3 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                    Proceed to Pay <FaArrowRightLong />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Checkout