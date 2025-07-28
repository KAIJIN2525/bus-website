import React from "react";
import { FaMapPin } from "react-icons/fa6";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full lg:px-28 md:px-16 sm:px-7 px-4 py-12 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-950 border-t border-neutral-200/50 dark:border-neutral-800/50">
      <div className="grid grid-cols-5 gap-5">
        <div className="space-y-5 col-span-2">
          <Link
            to="/"
            className="text-xl text-neutral-800 dark:text-neutral-200 font-bold"
          >
            <img
              src={Logo}
              alt="logo"
              className="w-44 h-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </Link>
          <p className="text-neutral-600 dark:text-neutral-400 text-base font-normal pr-10 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            placeat corporis, rerum laborum optio laboriosam perferendis sit
            culpa doloribus, tempora aliquam repellendus reprehenderit, ullam
            alias.
          </p>
        </div>

        <div className="space-y-7">
          <h1 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
            About Us
          </h1>
          <ul className="space-y-3 text-neutral-600 dark:text-neutral-400 text-base font-normal">
            <li>
              <Link
                to="#"
                className="hover:text-violet-600 dark:hover:text-violet-400 ease-in-out duration-300 hover:translate-x-1 transform inline-block"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-violet-600 dark:hover:text-violet-400 ease-in-out duration-300 hover:translate-x-1 transform inline-block"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-violet-600 dark:hover:text-violet-400 ease-in-out duration-300 hover:translate-x-1 transform inline-block"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-violet-600 dark:hover:text-violet-400 ease-in-out duration-300 hover:translate-x-1 transform inline-block"
              >
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-7">
          <h1 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
            Services
          </h1>
          <ul className="space-y-3 text-neutral-600 dark:text-neutral-400 text-base font-normal">
            <li>
              <Link
                to="#"
                className="hover:text-violet-600 dark:hover:text-violet-400 ease-in-out duration-300 hover:translate-x-1 transform inline-block"
              >
                Safety Guarantee
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-violet-600 dark:hover:text-violet-400 ease-in-out duration-300 hover:translate-x-1 transform inline-block"
              >
                FAQ & Support
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-violet-600 dark:hover:text-violet-400 ease-in-out duration-300 hover:translate-x-1 transform inline-block"
              >
                Luxury Buses
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-violet-600 dark:hover:text-violet-400 ease-in-out duration-300 hover:translate-x-1 transform inline-block"
              >
                Enough Facilities
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-7">
          <h1 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
            Get In Touch
          </h1>
          <div className="space-y-4">
            <div className="flex gap-x-2">
              <FaMapPin className="text-2xl text-violet-600 dark:text-violet-400 mt-1" />
              <div className="flex flex-col">
                <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                  For Support & Reservations
                </p>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                  123, Main Street, Anytown, USA
                </p>
              </div>
            </div>

            <div className="flex gap-x-2">
              <FaMapPin className="text-2xl text-violet-600 dark:text-violet-400 mt-1" />
              <div className="flex flex-col">
                <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                  Customer Service
                </p>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                  +1 (555) 123-4567
                </p>
              </div>
            </div>

            <div className="flex gap-x-2">
              <FaMapPin className="text-2xl text-violet-600 dark:text-violet-400 mt-1" />
              <div className="flex flex-col">
                <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                  Email Support
                </p>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                  support@bustickets.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-neutral-300 dark:border-neutral-700">
        <div className="flex justify-between items-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            © 2025 Bus Ticket Booking. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              to="#"
              className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
            >
              Privacy
            </Link>
            <Link
              to="#"
              className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
            >
              Terms
            </Link>
            <Link
              to="#"
              className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
