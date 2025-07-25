import React, { createContext, useCallback, useContext, useState } from 'react'

// Create a Context
const SeatContext = createContext();

export const useSeatContext = () => useContext(SeatContext);

// Create a provider component 
export const SeatProvider = ({ children }) => {
    const [ selectedSeats, setSelectedSeats ] = useState({});
    const [ fromTo, setFromTo ] = useState({ from: '', to: ''});
    const pricePerSeat = 20;

    const addSeat = (busId, seatNumber) => {
        setSelectedSeats((prev) => {
            const currentSeats = prev[busId] || [];
            return { ...prev, [busId]: [...currentSeats, seatNumber] };
        });
    };

    const removeSeat = (busId, seatNumber) => {
        setSelectedSeats((prev) => {
            const currentSeats = prev[busId] || [];
            return { ...prev, [busId]: currentSeats.filter((seat) => seat !== seatNumber) };
        });
    }

    const totalPrice = (busId) => {
        return (selectedSeats[busId] ? selectedSeats[busId].length : 0 ) * pricePerSeat;
    };

    const setDestination = useCallback((from, to) => {
        setFromTo({ from, to });
    }, []);

    const contextValue = {
        selectedSeats,
        addSeat,
        removeSeat,
        totalPrice,
        fromTo,
        setDestination
    }

    return (
        <SeatContext.Provider value={contextValue}>
            { children }
        </SeatContext.Provider>
    )
};

// Custom hook to use the SeatContext
