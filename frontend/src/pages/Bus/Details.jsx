import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FaStar } from 'react-icons/fa6'
import { nigerianBuses, nigerianBusCompanies, formatNairaPrice, pickupPoints } from '../../data/nigerianBusData'
import Destination from '../../components/Destination/Destination'
import DepartTime from '../../components/DepartTime/DepartTime'
import BusSeatLayout from '../../components/Seat/Seat'
import Spinner from '../../components/Spinner/Spinner'
import { useSeatContext } from '../../Context/SeatContext'

const Details = () => {

    
    const { id } = useParams(); // Get bus Id
    const [ bus, setBus ] = useState(null); //State for the bus details
    const [ company, setCompany ] = useState(null); //State for the company details
    const [loading, setLoading ] = useState(true); //State for loading 
    const { selectedSeats, totalPrice } = useSeatContext(); 
    const { fromTo } = useSeatContext();

    const navigate = useNavigate();

    useEffect(() => {
        const fetchBusDetails = () =>{
            const foundBus = nigerianBuses.find(bus => bus.id === parseInt(id));
            const foundCompany = foundBus ? nigerianBusCompanies.find(c => c.id === foundBus.companyId) : null;
            setTimeout(() => {
                setBus(foundBus);
                setCompany(foundCompany);
                setLoading(false);
            }, 1000); // Find the bus by ID
        };
        fetchBusDetails();
        
         //Stop loading after checking
    },[id]);

    //Loading spinner while waiting for data to be fetched
    if (loading) {
        return <Spinner />
    }

    // if bus not found
    if (!bus) {
        return (
            <div className="flex items-center justify-center w-full min-h-screen">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">Bus not found</h2>
                    <Link to="/bus" className="text-green-600 hover:text-green-700">Browse Available Buses</Link>
                </div>
            </div>
        );
    }

    const handleCheckout = () => {
        // Check if the forms are filled

        if (!fromTo.from || !fromTo.to) {
            alert("Please fill in your destinations first");
            return; // Exit incase of failure
        }

        if (!selectedSeats[bus.id] || selectedSeats[bus.id].length === 0) {
            alert("Please select at least one seat");
            return;
        }

        // save selectedSeats, destinations and totalPrice in the localStorage
        localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats[bus.id] || []));
        localStorage.setItem('totalPrice', totalPrice(bus.id));
        localStorage.setItem('from', fromTo.from);
        localStorage.setItem('to', fromTo.to);
        localStorage.setItem('busDetails', JSON.stringify({
            name: bus.name,
            company: bus.company,
            category: bus.category,
            image: bus.image
        }));
        
        // checkout page
        navigate(`/bus/bus-details/checkout`);
    }

    

  return (
    <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-24 mb-16 min-h-screen bg-gradient-to-br from-green-50/50 via-blue-50/50 to-purple-50/50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800'>
        {/* Hero Section */}
        <div className="relative h-64 mb-12 rounded-2xl overflow-hidden">
            <img 
                src={bus.image} 
                alt={bus.name} 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {bus.category}
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                        {bus.company}
                    </span>
                </div>
                <h1 className="text-4xl font-bold mb-2">{bus.name}</h1>
                <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }, (_, i) => (
                            <FaStar 
                                key={i} 
                                className={i < Math.floor(bus.rating) ? "text-yellow-400" : "text-gray-400"} 
                            />
                        ))}
                        <span className="ml-1">{bus.rating}</span>
                    </div>
                    <span>•</span>
                    <span>{bus.passengers} seats</span>
                    <span>•</span>
                    <span>Starting from {formatNairaPrice(bus.priceRange.min)}</span>
                </div>
            </div>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
                {/* Bus Information */}
                <div className="bg-white dark:bg-neutral-900/80 rounded-2xl shadow-xl border border-green-200/50 dark:border-green-800/50 p-8">
                    <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
                        Bus Information
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <h3 className="font-semibold text-neutral-700 dark:text-neutral-300 mb-3">Company Details</h3>
                            <div className="space-y-2">
                                <div className="text-lg font-bold text-neutral-800 dark:text-neutral-100">
                                    {bus.company}
                                </div>
                                {company && (
                                    <div className="text-sm text-neutral-600 dark:text-neutral-400">
                                        Established {company.established} • {company.fleet_size} buses
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold text-neutral-700 dark:text-neutral-300 mb-3">Pricing</h3>
                            <div className="space-y-2">
                                <div className="text-lg font-bold text-green-600 dark:text-green-400">
                                    {formatNairaPrice(bus.priceRange.min)} - {formatNairaPrice(bus.priceRange.max)}
                                </div>
                                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                                    Price varies by route and seat type
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                        <h3 className="font-semibold text-neutral-700 dark:text-neutral-300 mb-3">Features & Amenities</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {bus.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                    <span className="text-sm font-medium text-neutral-800 dark:text-neutral-100">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Amenities */}
                    <div className="mb-6">
                        <h3 className="font-semibold text-neutral-700 dark:text-neutral-300 mb-3">Onboard Amenities</h3>
                        <div className="flex flex-wrap gap-2">
                            {bus.amenities.map((amenity, idx) => (
                                <span
                                    key={idx}
                                    className="bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                                >
                                    {amenity}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Routes */}
                    <div>
                        <h3 className="font-semibold text-neutral-700 dark:text-neutral-300 mb-3">Available Routes</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {bus.routes.map((route, idx) => (
                                <div key={idx} className="p-3 bg-neutral-50 dark:bg-neutral-800/60 rounded-lg">
                                    <span className="font-medium text-neutral-800 dark:text-neutral-100">{route}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {company && (
                        <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700">
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 italic">
                                {company.description}
                            </p>
                        </div>
                    )}
                </div>

                {/* Destination Selection */}
                <div className="bg-white dark:bg-neutral-900/80 rounded-2xl shadow-xl border border-green-200/50 dark:border-green-800/50 p-8">
                    <Destination />
                </div>

                {/* Departure Time */}
                <div className="bg-white dark:bg-neutral-900/80 rounded-2xl shadow-xl border border-green-200/50 dark:border-green-800/50 p-8">
                    <DepartTime />
                </div>

                {/* Seat Selection */}
                <div className="bg-white dark:bg-neutral-900/80 rounded-2xl shadow-xl border border-green-200/50 dark:border-green-800/50 p-8">
                    <BusSeatLayout busId={bus.id} totalSeats={bus.passengers} />
                </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
                {/* Quick Info */}
                <div className="bg-white dark:bg-neutral-900/80 rounded-2xl shadow-xl border border-green-200/50 dark:border-green-800/50 p-6 sticky top-24">
                    <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                        Quick Info
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-neutral-600 dark:text-neutral-400">Category</span>
                            <span className="font-semibold text-neutral-800 dark:text-neutral-100">{bus.category}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-neutral-600 dark:text-neutral-400">Capacity</span>
                            <span className="font-semibold text-neutral-800 dark:text-neutral-100">{bus.passengers} seats</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-neutral-600 dark:text-neutral-400">Rating</span>
                            <span className="font-semibold text-yellow-600 dark:text-yellow-400">{bus.rating} ★</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-neutral-600 dark:text-neutral-400">Seat Types</span>
                            <span className="font-semibold text-neutral-800 dark:text-neutral-100">
                                {bus.seatTypes.join(', ')}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Booking Summary */}
                {(selectedSeats[bus.id]?.length > 0 || fromTo.from || fromTo.to) && (
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl shadow-xl border border-green-200/50 dark:border-green-800/50 p-6">
                        <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                            Booking Summary
                        </h3>
                        
                        {fromTo.from && fromTo.to && (
                            <div className="mb-4">
                                <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">Route</div>
                                <div className="font-semibold text-neutral-800 dark:text-neutral-100">
                                    {fromTo.from} → {fromTo.to}
                                </div>
                            </div>
                        )}
                        
                        {selectedSeats[bus.id]?.length > 0 && (
                            <>
                                <div className="mb-4">
                                    <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">Selected Seats</div>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedSeats[bus.id].map(seat => (
                                            <span key={seat} className="bg-green-600 text-white px-2 py-1 rounded text-sm font-medium">
                                                {seat}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="mb-6">
                                    <div className="flex items-center justify-between text-lg font-bold">
                                        <span className="text-neutral-800 dark:text-neutral-100">Total</span>
                                        <span className="text-green-600 dark:text-green-400">
                                            {formatNairaPrice(totalPrice(bus.id))}
                                        </span>
                                    </div>
                                    <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                                        Including all taxes and fees
                                    </div>
                                </div>
                            </>
                        )}
                        
                        <button
                            onClick={handleCheckout}
                            className='w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold text-base px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                )}
            </div>
        </div>

        {/* Old layout for reference - can be removed */}
        <div className="hidden">
            <div className="col-span-1 space-y-8">
                <img src={bus.image} alt={bus.name} className="w-full aspect rounded-md object-contain" />
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-50">
                        {bus.name}
                        <span className="text-base font-normal text-neutral-400 dark:text-neutral-500 ml-3">
                            ({bus.company})
                        </span>
                  </h1> 

                  <div className="flex items-center gap-x-2">
                    <div className="flex items-center gap-x-1 text-sm text-yellow-500 dark:text-yellow-600">
                        {Array.from( {length:5}, (_, index) => (
                            <FaStar key={index} className={index < bus.rating ? "text-yellow-500" : "text-gray-300" } />
                        ))}
                    </div>
                    <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
                        ({bus.rating})
                    </p>
                  </div>

                    <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
                        Experience comfortable travel with {bus.company}'s {bus.category} service. This {bus.passengers}-seater bus offers premium amenities including {bus.features.join(', ')} for your journey comfort.
                    </p>
                </div>
            </div>
            <div className="col-span-1 space-y-10">
                <div className="space-y-6">
                    {/* Destination Card  */}
                        <Destination />
                    {/* Departure Card  */}
                        <DepartTime />
                </div>
                {/* Seat Selection */}
                    <BusSeatLayout busId={bus.id} totalSeats={bus.passengers} />
                {/* Checkout Btn */}
                <div className="flex">
                    <button
                    onClick={handleCheckout} 
                    className='w-fit bg-green-600 text-neutral-50 font-medium text-base px-6 py-2 rounded-md hover:bg-green-700 ease-in-out duration-300'>
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details