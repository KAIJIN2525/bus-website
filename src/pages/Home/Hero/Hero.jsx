import React from 'react'
import { Link } from 'react-router-dom'
import Bus2 from '../../../assets/bus5.png'
import { animate, motion } from 'framer-motion'
import { FaPlay, FaShieldAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa'

const Hero = () => {

    const imageVariants = {
        initial: {
            x: "100%",
        },
        animate: {
            x: "3%",
            transition: {
                duration: 3,
                ease: "easeInOut"
            }
        }
    }

    const trustSignals = [
        { icon: FaShieldAlt, text: "Safe & Secure", subtext: "100% Verified" },
        { icon: FaClock, text: "24/7 Support", subtext: "Always Available" },
        { icon: FaMapMarkerAlt, text: "500+ Routes", subtext: "Nationwide Coverage" }
    ]

    return (
        <div className='w-full min-h-screen lg:ps-28 md:ps-16 sm:ps-7 ps-4 mt-20 flex items-center justify-center flex-col hero relative overflow-hidden'>
            {/* Enhanced background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-blue-900/20 to-purple-900/30"></div>
            <div className="absolute top-20 left-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            
            <div className="flex-1 w-full flex items-stretch justify-between gap-12 pb-10 relative z-10">
                <motion.div className="w-[45%] h-auto rounded-md flex justify-center flex-col space-y-8 relative z-10"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease:'linear', delay: 0.2 }}
                >
                    <motion.div className="space-y-6"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0}}
                    transition={{ duration: 1, ease: 'linear', delay: 0.2 }}
                    >
                        <motion.div className="inline-flex items-center gap-2 bg-violet-500/20 backdrop-blur-sm border border-violet-300/30 rounded-full px-4 py-2 text-violet-200 text-sm font-medium"
                            initial={{ opacity:0 , scale: 0.8 }}
                            animate={{ opacity: 1 , scale: 1 }}
                            transition={{ duration: 0.8, ease: 'linear' , delay: 0.3 }}
                        >
                            <FaPlay className="text-xs" />
                            Trusted by 50,000+ travelers
                        </motion.div>

                        <motion.h1 className="text-6xl lg:text-7xl font-bold text-white leading-[1.1] drop-shadow-2xl"
                            initial={{ opacity:0 , y: -10 }}
                            animate={{ opacity: 1 , y: 0 }}
                            transition={{ duration: 2, ease: 'linear' , delay: 0.4 }}
                        >
                            Book Your Perfect
                            <span className='block text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text font-extrabold tracking-tight'>
                                Bus Journey
                            </span>
                            Today
                        </motion.h1>
                        <motion.p className="text-xl font-normal text-neutral-200 leading-relaxed max-w-lg drop-shadow-md"
                            initial={{ opacity:0 , y: -10 }}
                            animate={{ opacity: 1 , y: 0 }}
                            transition={{ duration: 2, ease: 'linear' , delay: 0.6 }}
                        >
                            Experience comfortable, safe, and affordable travel with our premium bus services. Book instantly and travel with confidence.
                        </motion.p>
                    </motion.div>

                    <motion.div className="flex flex-col sm:flex-row gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'linear', delay: 0.8 }}
                    >
                        <Link to="/bus" className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-violet-600 to-violet-800 hover:from-violet-700 hover:to-violet-900 text-white font-semibold py-4 px-8 rounded-xl ease-in-out duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                            <span>Book Now</span>
                            <FaPlay className="text-sm" />
                        </Link>
                        <button className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl ease-in-out duration-300 shadow-lg hover:shadow-xl transition-all">
                            <FaPlay className="text-sm" />
                            <span>Watch Demo</span>
                        </button>
                    </motion.div>

                    {/* Trust Signals */}
                    <motion.div className="flex flex-wrap gap-6 pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'linear', delay: 1.0 }}
                    >
                        {trustSignals.map((signal, index) => (
                            <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                                <signal.icon className="text-violet-400 text-lg" />
                                <div>
                                    <p className="text-white font-semibold text-sm">{signal.text}</p>
                                    <p className="text-violet-200 text-xs">{signal.subtext}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                <div className="w-[60%] h-full rounded-md flex items-end justify-end absolute top-0 -right-48 z-0">
                    <motion.img 
                       className="w-full aspect-[4/2] object-contain drop-shadow-2xl filter brightness-110" 
                       src={Bus2}
                       alt='Premium bus service'
                       initial="initial"
                       animate="animate"
                       variants={imageVariants}
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero