import React, { useState } from 'react'
import { GiSteeringWheel } from 'react-icons/gi'
import { MdOutlineChair } from 'react-icons/md'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { useSeatContext } from '../../Context/SeatContext'

const Seat = ({ seatNumber, isSelected, onClick }) => {
  return (
    <MdOutlineChair className={`text-2xl -rotate-90 cursor-pointer ${isSelected ? 'text-violet-600' : 'text-neutral-600'}`} onClick={onClick} />
  )
}

const BusSeatLayout = ({ busId, totalSeats }) => {
    const { selectedSeats, addSeat, removeSeat, totalPrice } = useSeatContext();

    const handleSeatCLick = (seatNumber) => {
        if (selectedSeats[busId]?.includes(seatNumber)) {
            removeSeat(busId, seatNumber);
        } else {
            if ((selectedSeats[busId]?.length || 0) < 10) {
                addSeat(busId, seatNumber);
            } else {
                alert("You can only select a maximum of 10 seats.");
            }
        }
    };

    const renderSeats = () => {
        let seats = [];
        for (let i = 1; i <= totalSeats; i++) {
            seats.push(
                <Seat 
                key={i} 
                seatNumber={i} 
                isSelected={selectedSeats[busId]?.includes(i)} 
                onClick={() => handleSeatCLick(i)} />
            )
        }
        return seats;
    };

    const renderRows = () => {
        const rows = Math.ceil(totalSeats / 10);
        const seatRows = [];

        for (let row = 0; row < rows; row++ ) {
            seatRows.push(
                <div key={row} className='w-full grid grid-cols-10 gap-x-3'>
                    {renderSeats().slice(row * 10, (row + 1) * 10)}
                </div>
            );
        }
        return seatRows;
    };

    return (
        <div className='space-y-5'>

            <h2 className="text-xl text-neutral-800 dark:text-neutral-100 font-medium">
                Choose a Seat
            </h2>

            {/*  Seat Layout */}
                <div className="w-full flex justify-between">
                    <div className="flex-1 w-full flex">
                        <div className="w-full flex-1 flex gap-x-5 items-stretch">
                            <div className="w-10 h-full border-r-2 border-dashed border-neutral-300 dark:border-neutral-800">
                                <GiSteeringWheel  className='text-3xl mt-6 text-violet-600 -rotate-90'/>
                            </div>

                            {/* Seat Layout */}
                            <div className="flex flex-col items-center">
                                <div className="flex-1 space-y-4">
                                    {renderRows()}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Instructions and Information */}
                    <div className="space-y-3 w-28">
                        <div className="flex items-center gap-x-2">
                            <MdOutlineChair className='text-lg text-neutral-500 -rotate-90' />
                            <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
                                Available
                            </p>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <MdOutlineChair className='text-lg text-red-500 -rotate-90' />
                            <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
                                Booked
                            </p>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <MdOutlineChair className='text-lg text-violet-600 -rotate-90' />
                            <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
                                Selected
                            </p>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <RiMoneyDollarCircleLine className='text-lg text-neutral-500 ' />
                            <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
                                $20
                            </p>
                        </div>
                    </div>
                </div>

            {/* Selected seats */}
            {
                selectedSeats[busId]?.length > 0 && (
                <div className='!mt-10'>
                    <h3 className="text-lg font-bold">
                        Selected Seats:
                    </h3>
                    <div className="flex flex-wrap">
                        {selectedSeats[busId]?.map(seat => (
                            <div key={seat} className="w-10 h-10 rounded-md m-1.5 text-lg font-medium bg-violet-600/30 flex items-center justify-center">
                                {seat}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Calculate price */}
            {
                selectedSeats[busId]?.length > 0 &&
                <div className='!mt-5 flex items-center gap-x-4'>
                    <h3 className="text-lg font-bold">
                        Total Fare Price:
                    </h3>
                    <p className="text-lg font-medium">
                        $ {totalPrice(busId)}
                    </p>
                    <span className="text-sm text-neutral-400 dark:text-neutral-600 font-normal">
                        (Including all of the taxes)
                    </span>
                </div>
            }

        </div>
    )

}

export default BusSeatLayout;