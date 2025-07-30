import React, { useState } from 'react';
import { FaCopy, FaGift, FaPercent, FaUsers, FaClock, FaGraduationCap, FaBriefcase, FaCalendarAlt, FaCheck, FaTimes } from 'react-icons/fa';
import { nigerianOffers, formatNairaPrice } from '../../data/nigerianBusData';

const Offers = () => {
  const [copied, setCopied] = useState({});
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [filterBy, setFilterBy] = useState('all');

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(prev => ({ ...prev, [code]: true }));
      setTimeout(() => {
        setCopied(prev => ({ ...prev, [code]: false }));
      }, 2000);
    });
  };

  const getOfferIcon = (title) => {
    if (title.toLowerCase().includes('student')) return FaGraduationCap;
    if (title.toLowerCase().includes('family')) return FaUsers;
    if (title.toLowerCase().includes('corporate')) return FaBriefcase;
    if (title.toLowerCase().includes('weekend')) return FaCalendarAlt;
    if (title.toLowerCase().includes('early')) return FaClock;
    return FaGift;
  };

  const getOfferColor = (title) => {
    if (title.toLowerCase().includes('student')) return 'blue';
    if (title.toLowerCase().includes('family')) return 'green';
    if (title.toLowerCase().includes('corporate')) return 'purple';
    if (title.toLowerCase().includes('weekend')) return 'orange';
    if (title.toLowerCase().includes('early')) return 'indigo';
    return 'violet';
  };

  const filteredOffers = nigerianOffers.filter(offer => {
    if (filterBy === 'all') return true;
    if (filterBy === 'high-discount') return parseInt(offer.discount) >= 30;
    if (filterBy === 'student') return offer.title.toLowerCase().includes('student');
    if (filterBy === 'family') return offer.title.toLowerCase().includes('family');
    if (filterBy === 'weekend') return offer.title.toLowerCase().includes('weekend');
    return true;
  });

  return (
    <div className="w-full mt-20 min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 text-white py-20">
        <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FaGift className="text-4xl" />
              <h1 className="text-5xl md:text-6xl font-bold">
                Special Offers
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-pink-100 leading-relaxed">
              Save more on your travels with our exclusive deals and promotions
            </p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 -mt-16 relative z-10 mb-12">
        <div className="bg-white dark:bg-neutral-900/80 rounded-2xl shadow-2xl border border-neutral-200/50 dark:border-neutral-800/50 p-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { value: 'all', label: 'All Offers', icon: FaGift },
              { value: 'high-discount', label: 'High Discount (30%+)', icon: FaPercent },
              { value: 'student', label: 'Student Offers', icon: FaGraduationCap },
              { value: 'family', label: 'Family Deals', icon: FaUsers },
              { value: 'weekend', label: 'Weekend Specials', icon: FaCalendarAlt }
            ].map((filter) => (
              <button
                key={filter.value}
                onClick={() => setFilterBy(filter.value)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  filterBy === filter.value
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/30'
                }`}
              >
                <filter.icon className="text-sm" />
                {filter.label}
              </button>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
              Showing <span className="font-semibold text-purple-600 dark:text-purple-400">{filteredOffers.length}</span> offers
            </p>
          </div>
        </div>
      </div>

      {/* Offers Grid */}
      <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOffers.map((offer) => {
            const OfferIcon = getOfferIcon(offer.title);
            const colorScheme = getOfferColor(offer.title);
            
            return (
              <div
                key={offer.id}
                className={`bg-white dark:bg-neutral-900/80 rounded-2xl shadow-xl hover:shadow-2xl border border-neutral-200/50 dark:border-neutral-800/50 overflow-hidden group transition-all duration-300 transform hover:scale-105 relative`}
              >
                {/* Background Pattern */}
                <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 bg-${colorScheme}-500`}>
                  <OfferIcon className="w-full h-full p-4" />
                </div>

                <div className="relative z-10 p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`bg-${colorScheme}-100 dark:bg-${colorScheme}-900/20 p-3 rounded-xl`}>
                        <OfferIcon className={`text-2xl text-${colorScheme}-600 dark:text-${colorScheme}-400`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">
                          {offer.title}
                        </h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                          {offer.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {offer.discount}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-4">
                    {offer.description}
                  </p>

                  {/* Offer Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-600 dark:text-neutral-400">Min. Amount:</span>
                      <span className="font-semibold text-neutral-800 dark:text-neutral-100">
                        {formatNairaPrice(offer.minAmount)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-600 dark:text-neutral-400">Max. Discount:</span>
                      <span className="font-semibold text-neutral-800 dark:text-neutral-100">
                        {formatNairaPrice(offer.maxDiscount)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-600 dark:text-neutral-400">Valid Till:</span>
                      <span className={`font-semibold text-${colorScheme}-600 dark:text-${colorScheme}-400`}>
                        {offer.validTill}
                      </span>
                    </div>
                  </div>

                  {/* Routes */}
                  <div className="mb-4">
                    <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-2">Valid Routes:</div>
                    <div className="flex flex-wrap gap-1">
                      {offer.routes.slice(0, 2).map((route, idx) => (
                        <span
                          key={idx}
                          className={`text-xs bg-${colorScheme}-100 dark:bg-${colorScheme}-900/20 text-${colorScheme}-700 dark:text-${colorScheme}-300 px-2 py-1 rounded-full`}
                        >
                          {route}
                        </span>
                      ))}
                      {offer.routes.length > 2 && (
                        <span className="text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 px-2 py-1 rounded-full">
                          +{offer.routes.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Promo Code */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`flex-1 border-2 border-dashed border-${colorScheme}-300 dark:border-${colorScheme}-600 bg-${colorScheme}-50 dark:bg-${colorScheme}-900/10 rounded-lg p-3 text-center`}>
                      {copied[offer.code] ? (
                        <span className="text-green-600 font-semibold text-sm flex items-center justify-center gap-2">
                          <FaCheck className="text-xs" />
                          Copied!
                        </span>
                      ) : (
                        <span className={`font-mono font-bold text-${colorScheme}-700 dark:text-${colorScheme}-300`}>
                          {offer.code}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => handleCopy(offer.code)}
                      className={`bg-${colorScheme}-600 hover:bg-${colorScheme}-700 text-white p-3 rounded-lg transition-colors duration-300`}
                    >
                      <FaCopy className="text-sm" />
                    </button>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedOffer(offer)}
                      className="flex-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium py-2 px-4 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-300 text-sm"
                    >
                      View Terms
                    </button>
                    <button className={`flex-1 bg-gradient-to-r from-${colorScheme}-600 to-${colorScheme}-700 hover:from-${colorScheme}-700 hover:to-${colorScheme}-800 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm`}>
                      Use Offer
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredOffers.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl text-neutral-300 dark:text-neutral-600 mb-4">🎁</div>
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
              No offers found
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              Try adjusting your filter or check back later for new deals
            </p>
            <button
              onClick={() => setFilterBy('all')}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-300"
            >
              View All Offers
            </button>
          </div>
        )}
      </div>

      {/* Terms Modal */}
      {selectedOffer && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">
                  Terms & Conditions
                </h3>
                <button
                  onClick={() => setSelectedOffer(null)}
                  className="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
                >
                  <FaTimes />
                </button>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  {selectedOffer.title}
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  {selectedOffer.description}
                </p>
              </div>

              <div className="space-y-2">
                {selectedOffer.terms.map((term, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm">
                    <FaCheck className="text-green-500 text-xs mt-1 flex-shrink-0" />
                    <span className="text-neutral-700 dark:text-neutral-300">{term}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                <button
                  onClick={() => setSelectedOffer(null)}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition-colors duration-300"
                >
                  Got it
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offers;