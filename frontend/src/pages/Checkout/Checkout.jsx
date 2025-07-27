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
        <div className="grid grid-cols-5 gap-16 items-start">
            <div className="col-span-3 space-y-7 pr-20">
                <h2 className="text-xl text-neutral-800 dark:text-neutral-100 font-medium ">
                    Passenger Information
                </h2>
                <form className='space-y-6'>
                    <div className=''>
                        <label htmlFor="fullname" className='block mb-2 font-medium'>
                            Full Name
                        </label>
                        <input type="text" id='fullname' placeholder='e.g. David Felix ' name='fullname' className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-900/10 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900" />
                    </div>
                    <div className=''>
                        <label htmlFor="email" className='block mb-2 font-medium'>
                            Email Address
                        </label>
                        <input type="email" id='email' placeholder='e.g. davidfelix01@gmail.com ' name='email' className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-900/10 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900" />
                        <small className='block mt-1 text-xs text-neutral-500 dark:text-neutral-600 font-normal'>
                            You will get your tickets via this email address.
                        </small>
                    </div>
                    <div className=''>
                        <label htmlFor="phone" className='block mb-2 font-medium'>
                            Phone Number
                        </label>
                        <input type="text" id='phone' placeholder='e.g. +234 801 234 5478 ' name='phone' className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-900/10 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900" />
                    </div>
                    <div className=''>
                        <label htmlFor="altphone" className='block mb-2 font-medium'>
                            Alternative Phone Number
                        </label>
                        <input type="text" id='altphone' placeholder='e.g. +234 812 345 6789' name='altphone' className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-900/10 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900" />
                    </div>
                </form>
            </div>

            <div className="col-span-2 space-y-8">
                <div className="bg-neutral-200/50 dark:bg-neutral-900/70 rounded-md py-5 px-5">
                    <h2 className="text-xl text-center text-neutral-800 dark:text-neutral-100 font-medium border-b-2 border-neutral-200 dark:border-neutral-800/40 pb-3 mb-4">
                       Your Booking Status
                    </h2>

                    <div className="space-y-8 pb-3">
                        <div className="space-y-4">
                            <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                                Your Destination
                            </h6>

                            <div className="w-full flex items-center gap-x-3">
                                <div className="w-fit text-base font-medium ">
                                    From:- <span className='ml-1.5'>
                                        {from}
                                    </span>
                                </div>
                                <div className="flex-1">
                                <div className="w-full h-[1px] border border-dashed border-neutral-400 dark:border-neutral-700/80 "></div>
                                </div>
                                <div className="w-fit text-base font-medium ">
                                    To:- <span className='ml-1.5'>
                                        {to}
                                    </span>
                                </div>
                            </div>

                            <div className="w-full flex  items-center gap-x-3">
                                <div className="w-fit text-base font-medium">
                                   Departing at:- <span className='ml-1.5'>
                                            03:30 PM
                                        </span>
                                </div>
                                <div className="flex-1">
                                    <div className="w-full h-[1px] border border-dashed border-neutral-400 dark:border-neutral-700/80 "></div>
                                </div>
                                <div className="w-fit text-base font-medium ">
                                    Arriving:- <span className='ml-1.5'>
                                        04:00 PM
                                    </span>
                                </div>
                            </div> 
                        </div>

                            <div className="space-y-4">
                                <div className="w-full flex items-center justify-between">
                                    <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                                        Total No. of Seats
                                    </h6>

                                    <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                                        {savedSeats.length} 
                                    </h6>
                                </div>

                                <div className="w-full flex items-center justify-between">
                                    <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                                        Selected Seats:
                                    </h6>

                                    <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                                        {savedSeats.join(",")}
                                    </h6>
                                </div>

                                <div className="w-full flex items-center justify-between">
                                    <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                                        Total Amount
                                    </h6>

                                    <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                                        $ {savedTotal}
                                    </h6>
                                </div>
                            </div>


                    </div>
                </div>

                <button className="w-full px-8 h-12 bg-violet-600 text-neutral-50 text-base font-normal rounded-md flex items-center justify-center gap-x-2">
                    Proceed to Pay <FaArrowRightLong />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Checkout