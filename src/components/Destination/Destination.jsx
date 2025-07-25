import React, { useEffect, useState } from 'react'
import { useSeatContext } from '../../Context/SeatContext';

const Destination = () => {

    const { setDestination } = useSeatContext();
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    useEffect(() => {
        if (from && to ) {
            setDestination(from, to);
        }
    },[from, to])

const handleFromChange = (e) => {
    setFrom(e.target.value)
}      
    
const handleToChange = (e) => {
    setTo(e.target.value)
}

const isDestinationSelected = from && to;

  return (
    <div className='w-full space-y-4'>
        {
            !isDestinationSelected  
            ?
            (
                <div className='w-full grid grid-cols-2 gap-10'>
                    <div className=''>
                        <label htmlFor="from" className='block mb-2 font-medium'>
                            From
                        </label>
                        <select 
                            name="from" 
                            value={from} 
                            onChange={handleFromChange} 
                            id="from" 
                            className='w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-900/10 dark:bg-neutral-900/60 px-3 h-11 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900'>
                            <option value="">Select Location</option>
                            <option value="location1">Location 1</option>
                            <option value="location2">Location 2</option>
                            <option value="location3">Location 3</option>
                            <option value="location4">Location 4</option>
                            <option value="location5">Location 5</option>
                        </select>
                    </div>

                    <div className=''>
                        <label htmlFor="to" className='block mb-2 font-medium'>
                            To
                        </label>
                        <select 
                        name="to" 
                        value={to} 
                        onChange={handleToChange} 
                        id="to" 
                        className='w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-900/10 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900'>
                            <option value="">Select Location</option>
                            <option value="location6">Location 6</option>
                            <option value="location7">Location 7</option>
                            <option value="location8">Location 8</option>
                            <option value="location9">Location 9</option>
                            <option value="location10">Location 10</option>
                        </select>
            </div>
                </div>
            )
            :
            (
                <div className='space-y-5'>
                    <h1 className="text-xl text-neutral-800 dark:text-neutral-100 font-medium">
                        Your Destination
                    </h1>
                    <div className="w-full flex items-center gap-x-3">
                        <div className='w-fit text-base font-semibold'>
                            From:- <span className='ml-1.5 font-medium'>{from}</span>
                        </div>
                        <div className="flex-1">
                            <div className="w-full h-[1px] border border-dashed border-neutral-200 dark:border-neutral-800/50">
                            </div>
                        </div>
                        <div className='w-fit text-base font-semibold'>
                            To:- <span className='ml-1.5 font-medium'>{to}</span>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Destination