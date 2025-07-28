import React from "react";

const featuredRoutes = [
  { from: "Lagos", to: "Abuja", price: 50, duration: "10h" },
  { from: "Port Harcourt", to: "Enugu", price: 35, duration: "6h" },
  { from: "Ibadan", to: "Kano", price: 60, duration: "12h" },
];

const FeaturedRoutes = () => (
  <section className="w-full py-12 px-4 md:px-16 lg:px-28">
    <h2 className="text-3xl font-bold text-center mb-8 text-violet-700">
      Featured Routes
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {featuredRoutes.map((route, idx) => (
        <div
          key={idx}
          className="bg-white dark:bg-neutral-900/60 rounded-2xl shadow-lg p-6 border border-neutral-200 dark:border-neutral-800 flex flex-col items-center"
        >
          <div className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
            {route.from} → {route.to}
          </div>
          <div className="text-base text-neutral-600 dark:text-neutral-400 mb-2">
            Duration: {route.duration}
          </div>
          <div className="text-lg font-bold text-violet-600 dark:text-violet-400">
            ${route.price}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturedRoutes;
