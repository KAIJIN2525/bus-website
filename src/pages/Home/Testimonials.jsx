import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, NY",
    text: "Exceptional service! The booking process was seamless, and the bus was incredibly comfortable. The staff was professional and friendly throughout the journey.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
  },
  {
    name: "Michael Chen",
    location: "Los Angeles, CA", 
    text: "I've been using this service for my business trips for over a year. Always on time, clean buses, and great customer support. Highly recommended!",
    rating: 5,
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
  },
  {
    name: "Emily Rodriguez",
    location: "Chicago, IL",
    text: "Affordable prices without compromising on quality. The WiFi worked great, and I could work during my 6-hour journey. Will definitely book again!",
    rating: 5,
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
  },
];

const Testimonials = () => (
  <section className="w-full py-16 px-4 md:px-16 lg:px-28 bg-gradient-to-br from-violet-50 via-purple-50 to-blue-50 dark:from-violet-900/10 dark:via-purple-900/10 dark:to-blue-900/10">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">
        What Our Customers Say
      </h2>
      <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
        Join thousands of satisfied travelers who trust us for their journeys
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, idx) => (
        <div
          key={idx}
          className="bg-white dark:bg-neutral-900/60 rounded-2xl shadow-lg hover:shadow-2xl border border-neutral-200/50 dark:border-neutral-800/50 p-8 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
        >
          {/* Quote decoration */}
          <div className="absolute top-4 right-4 text-violet-100 dark:text-violet-900/30">
            <FaQuoteLeft className="text-3xl" />
          </div>
          
          <div className="relative z-10">
            {/* Rating */}
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm" />
              ))}
            </div>
            
            {/* Testimonial text */}
            <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed italic">
              "{testimonial.text}"
            </p>
            
            {/* Customer info */}
            <div className="flex items-center gap-4">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-violet-200 dark:border-violet-800"
              />
              <div>
                <div className="font-bold text-neutral-800 dark:text-neutral-100">
                  {testimonial.name}
                </div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">
                  {testimonial.location}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    
    {/* Trust indicators */}
    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div className="space-y-2">
        <div className="text-3xl font-bold text-violet-600 dark:text-violet-400">50K+</div>
        <div className="text-sm text-neutral-600 dark:text-neutral-400">Happy Customers</div>
      </div>
      <div className="space-y-2">
        <div className="text-3xl font-bold text-violet-600 dark:text-violet-400">500+</div>
        <div className="text-sm text-neutral-600 dark:text-neutral-400">Routes Available</div>
      </div>
      <div className="space-y-2">
        <div className="text-3xl font-bold text-violet-600 dark:text-violet-400">99.8%</div>
        <div className="text-sm text-neutral-600 dark:text-neutral-400">On-Time Performance</div>
      </div>
      <div className="space-y-2">
        <div className="text-3xl font-bold text-violet-600 dark:text-violet-400">24/7</div>
        <div className="text-sm text-neutral-600 dark:text-neutral-400">Customer Support</div>
      </div>
    </div>
  </section>
);

export default Testimonials;