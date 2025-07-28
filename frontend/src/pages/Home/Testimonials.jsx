import React from "react";

const testimonials = [
  {
    name: "David Felix",
    text: "Booking was easy and the bus was comfortable. Highly recommended!",
  },
  {
    name: "Sarah Johnson",
    text: "Great service and friendly staff. Will use again!",
  },
  {
    name: "Emeka Obi",
    text: "Affordable prices and safe travel. My go-to for bus trips.",
  },
];

const Testimonials = () => (
  <section className="w-full py-12 px-4 md:px-16 lg:px-28 bg-violet-50 dark:bg-violet-900/10">
    <h2 className="text-3xl font-bold text-center mb-8 text-violet-700">
      What Our Customers Say
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((t, idx) => (
        <div
          key={idx}
          className="bg-white dark:bg-neutral-900/60 rounded-2xl shadow-lg p-6 border border-neutral-200 dark:border-neutral-800 flex flex-col items-center"
        >
          <div className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
            {t.name}
          </div>
          <div className="text-base text-neutral-600 dark:text-neutral-400 italic">
            "{t.text}"
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
