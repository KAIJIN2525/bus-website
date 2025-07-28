import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Save from "../../../assets/save.png"
import { FaCopy, FaArrowRight, FaPercent, FaGift } from 'react-icons/fa'

const Offer = () => {
    const [copied, setCopied] = useState({})

    const handleCopy = (code) => {
        navigator.clipboard.writeText(code)
        .then(() => {
            setCopied(prev => ({ ...prev, [code]: true }));
            setTimeout(() => {
                setCopied(prev => ({ ...prev, [code]: false }));
            }, 2000);
        })
        .catch((err) => {
            console.log('failed to copy', err)
        })
    }

    const offers = [
        {
            id: 1,
            title: "First Trip Special",
            subtitle: "Get 40% off on your first booking",
            code: "FIRST40",
            discount: "40% OFF",
            validTill: "31st December",
            gradient: "from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20",
            borderColor: "border-violet-200/50 dark:border-violet-800/50",
            codeStyle: "border-violet-300 dark:border-violet-600 bg-violet-100 dark:bg-violet-800/20 text-violet-700 dark:text-violet-300",
            buttonStyle: "text-violet-600 hover:text-violet-700 dark:hover:text-violet-400 hover:bg-violet-100 dark:hover:bg-violet-800/20",
            icon: FaGift
        },
        {
            id: 2,
            title: "Weekend Getaway",
            subtitle: "Weekend Special - 25% off all routes",
            code: "WEEKEND25",
            discount: "25% OFF",
            validTill: "Every Weekend",
            gradient: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
            borderColor: "border-blue-200/50 dark:border-blue-800/50",
            codeStyle: "border-blue-300 dark:border-blue-600 bg-blue-100 dark:bg-blue-800/20 text-blue-700 dark:text-blue-300",
            buttonStyle: "text-blue-600 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800/20",
            icon: FaPercent
        }
    ]

    return (
        <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 py-16'>
            <div className="w-full items-center flex justify-between mb-12">
                <div>
                    <h2 className='text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-3'>
                        Special Offers & Deals
                    </h2>
                    <p className='text-lg text-neutral-600 dark:text-neutral-400'>
                        Save more on your next journey with our exclusive offers
                    </p>
                </div>
                <Link to={"/offers"} className='hidden md:flex items-center gap-3 text-violet-600 hover:text-violet-700 dark:hover:text-violet-400 font-semibold transition-all duration-300 group bg-violet-50 dark:bg-violet-900/20 px-6 py-3 rounded-xl hover:bg-violet-100 dark:hover:bg-violet-900/30'>
                    View All Offers
                    <FaArrowRight className="text-sm transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {offers.map((offer) => (
                    <div key={offer.id} className={`w-full h-auto rounded-2xl bg-gradient-to-br ${offer.gradient} p-8 flex items-center gap-x-6 shadow-xl border ${offer.borderColor} hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden`}>
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                            <offer.icon className="w-full h-full" />
                        </div>
                        
                        <div className="relative z-10 flex items-center gap-6 w-full">
                            <div className="flex-shrink-0">
                                <img src={Save} alt="savings" className="w-24 h-24 object-contain drop-shadow-lg" />
                            </div>
                            
                            <div className="flex-1 space-y-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <offer.icon className="text-2xl text-violet-600 dark:text-violet-400" />
                                        <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                            {offer.discount}
                                        </span>
                                    </div>
                                    <h3 className='text-xl font-bold text-neutral-800 dark:text-neutral-50 mb-1'>
                                        {offer.title}
                                    </h3>
                                    <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                                        {offer.subtitle}
                                    </p>
                                </div>
                                
                                <div className='flex items-center gap-x-4'>
                                    <div className={`w-fit border-2 border-dashed px-4 py-2 ${offer.codeStyle} rounded-lg font-mono font-bold text-sm`}>
                                        {copied[offer.code] ? (
                                            <span className='text-green-600 font-semibold'>Copied!</span>
                                        ) : (
                                            <span>{offer.code}</span>
                                        )}
                                    </div>
                                    <button 
                                        onClick={() => handleCopy(offer.code)} 
                                        className={`text-lg ${offer.buttonStyle} p-2 rounded-lg transition-all duration-300`}
                                    >
                                        <FaCopy />
                                    </button>
                                </div>
                                
                                <div className="flex items-center justify-between">
                                    <p className='text-xs text-neutral-500 dark:text-neutral-400 font-medium'>
                                        Valid till: <span className='text-xs font-bold text-red-500'>{offer.validTill}</span>
                                    </p>
                                    <button className="text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors duration-300">
                                        Terms & Conditions
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile View All Button */}
            <div className="md:hidden mt-8 text-center">
                <Link to={"/offers"} className='inline-flex items-center gap-3 text-violet-600 hover:text-violet-700 dark:hover:text-violet-400 font-semibold transition-all duration-300 group bg-violet-50 dark:bg-violet-900/20 px-6 py-3 rounded-xl hover:bg-violet-100 dark:hover:bg-violet-900/30'>
                    View All Offers
                    <FaArrowRight className="text-sm transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
            </div>
        </div>
    )
}

export default Offer