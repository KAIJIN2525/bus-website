import React from 'react'

import Bus2 from '../../../assets/bus5.png'

import { animate, motion } from 'framer-motion'

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


  return (
    <div className='w-full h-[calc(100vh-8ch)] lg:ps-28 md:ps-16 sm:ps-7 ps-4 mt-[8ch] flex items-center justify-center flex-col hero relative overflow-hidden'>
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-blue-900/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="flex-1 w-full flex items-stretch justify-between gap-12 pb-10">
            <motion.div className="w-[35%] h-auto rounded-md flex justify-center flex-col space-y-14 relative z-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease:'linear', delay: 0.2 }}
            >
                <motion.div className="space-y-5"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 1, ease: 'linear', delay: 0.2 }}
                >
                    <motion.h1 className="text-7xl font-bold text-neutral-50 leading-[1.15] drop-shadow-lg"
                        initial={{ opacity:0 , y: -10 }}
                        animate={{ opacity: 1 , y: 0 }}
                        transition={{ duration: 2, ease: 'linear' , delay: 0.4 }}
                    >
                        Reserve Your Bus  
                        <span className='text-violet-400 tracking-wider bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent'>Tickets</span>
                        Now
                    </motion.h1>
                    <motion.p className="text-lg font-normal text-neutral-300 line-clamp-3 text-ellipsis drop-shadow-md"
                        initial={{ opacity:0 , y: -10 }}
                        animate={{ opacity: 1 , y: 0 }}
                        transition={{ duration: 2, ease: 'linear' , delay: 0.6 }}
                    >
                         Find and book your bus tickets with just a few clicks. We offer a wide range of bus routes and schedules to meet your needs
                    </motion.p>
                </motion.div>

                <motion.button 
                    className="w-fit bg-gradient-to-r from-violet-600 to-violet-800 hover:from-violet-700 hover:to-violet-900 text-neutral-50 font-medium py-4 px-8 rounded-lg ease-in-out duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'linear', delay: 0.8 }}
                >
                    Reserve Seat Now
                </motion.button>
                
            </motion.div>

            <div className="w-[70%] h-full rounded-md flex items-end justify-end absolute top-0 -right-48 z-0">
                <motion.img 
                   className="w-full aspect-[4/2] object-contain drop-shadow-2xl" 
                   src={Bus2}
                   alt='bus img'
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