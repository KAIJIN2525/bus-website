import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Bus from "../../assets/bus9.png"
import { FaStar } from 'react-icons/fa6'
import buses from '../../assets/assets'
import Destination from '../../components/Destination/Destination'
import DepartTime from '../../components/DepartTime/DepartTime'
import BusSeatLayout from '../../components/Seat/Seat'
import Spinner from '../../components/Spinner/Spinner'
import { useSeatContext } from '../../Context/SeatContext'

const Details = () => {

    
    const { id } = useParams(); // Get bus Id
    const [ bus, setBus ] = useState(null); //State for the bus details
    const [loading, setLoading ] = useState(true); //State for loading 
    const { selectedSeats, totalPrice } = useSeatContext(); 
    const { fromTo } = useSeatContext();

    const navigate = useNavigate();

    useEffect(() => {
        const fetchBusDetails = () =>{
            const foundBus = buses.find(bus => bus.id === parseInt(id));
            setTimeout(() => {
                setBus(foundBus);
                setLoading(false);
            }, 2000); // Find the bus by ID
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
            <div className="flex items-center justify-center w-full h-full">
                <p className="text-lg text-neutral-900 dark:text-neutral-50">Bus not found</p>
            </div>
        );
    }

    const handleCheckout = () => {
        // Check if the forms are filled

        if (!fromTo.from || !fromTo.to) {
            alert("Please fill in your destinations first");
            return; // Exit incase of failure
        }

        // save selectedSeats, destinations and totalPrice in the localStorage
        localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats[bus.id] || []));
        localStorage.setItem('totalPrice', totalPrice(bus.id));
        localStorage.setItem('from', fromTo.from);
        localStorage.setItem('to', fromTo.to);
        
        // checkout page
        navigate(`/bus/bus-details/checkout`);
    }

    

  return (
    <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] mb-[10ch]'>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="col-span-1 space-y-8">
                <img src={bus.image} alt={bus.name} className="w-full aspect rounded-md object-contain" />
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-50">
                        {bus.name}
                        <span className="text-base font-normal text-neutral-400 dark:text-neutral-500 ml-3">
                            (Bus Number Plate)
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
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur modi aliquid, impedit eos aperiam alias at beatae distinctio culpa, commodi aliquam quidem obcaecati delectus. Ratione inventore voluptatibus fugit delectus sequi?
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
                    className='w-fit bg-violet-600 text-neutral-50 font-medium text-base px-6 py-2 rounded-md hover:bg-violet-700 ease-in-out duration-300'>
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details