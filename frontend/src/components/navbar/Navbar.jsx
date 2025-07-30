import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import Logo from "../../assets/logo.png";
import {
  FaTimes,
  FaBars,
  FaPhone,
  FaUser,
  FaHeadset,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";
import Theme from "../theme/Theme";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [profileOpen, setProfileOpen] = React.useState(false);
  const { user, logout } = useAuth();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/bus", label: "Find Buses" },
    { href: "/contact", label: "Contact" },
  ];

  const handleClick = () => setOpen(!open);
  const handleClose = () => {
    setOpen(false);
    setProfileOpen(false);
  };
  const handleLogout = () => {
    logout();
    setProfileOpen(false);
  };

  return (
    <nav className="w-full h-20 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-neutral-200/50 dark:border-neutral-800/50 flex items-center justify-between lg:px-28 md:px-16 sm:px-7 px-4 fixed top-0 z-50 shadow-sm">
      {/* Logo section */}
      <Link to="/" className="flex items-center flex-shrink-0">
        <img
          src={Logo}
          alt="logo"
          className="w-36 h-auto object-contain hover:scale-105 transition-transform duration-200"
        />
      </Link>

      {/* Toggle button */}
      <button
        onClick={handleClick}
        className="lg:hidden text-neutral-600 dark:text-neutral-300 hover:text-violet-600 dark:hover:text-violet-400 ease-in-out duration-300 text-xl"
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation links */}
      <div
        className={`${
          open ? "flex absolute top-20 left-0 w-full" : "hidden"
        } lg:flex flex-col lg:flex-row gap-x-5 gap-y-2 lg:items-center lg:p-0 p-4 justify-between lg:bg-transparent bg-white/95 dark:bg-neutral-900/95 lg:shadow-none shadow-lg backdrop-blur-md lg:rounded-none rounded-md lg:border-none border border-neutral-200/50 dark:border-neutral-800/50 flex-1 lg:mx-16`}
      >
        <ul className="list-none flex lg:items-center items-start gap-x-8 gap-y-1 flex-wrap lg:flex-row flex-col text-base text-neutral-700 dark:text-neutral-300 font-medium">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.href}
                onClick={handleClose}
                className="hover:text-violet-600 dark:hover:text-violet-400 ease-in-out duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-violet-600 after:transition-all after:duration-300 hover:after:w-full py-2 block"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex lg:items-center items-start gap-x-4 gap-y-2 flex-wrap lg:flex-row flex-col text-base font-medium">
          {/* Support Button */}
          <button className="flex items-center gap-2 px-4 py-2 text-neutral-600 dark:text-neutral-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-900/20">
            <FaHeadset className="text-sm" />
            <span className="text-sm font-medium">Support</span>
          </button>

          {/* Authentication Buttons */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 px-4 py-2 text-neutral-600 dark:text-neutral-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-900/20"
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className="text-sm font-medium hidden sm:block">
                  {user.name.split(" ")[0]}
                </span>
              </button>
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 py-2 z-50">
                  <div className="px-4 py-2 border-b border-neutral-200 dark:border-neutral-700">
                    <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                      {user.name}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {user.email}
                    </p>
                  </div>
                  <Link
                    to="/profile"
                    onClick={handleClose}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors duration-200"
                  >
                    <FaUserCircle className="text-sm" />
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200 w-full text-left"
                  >
                    <FaSignOutAlt className="text-sm" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                onClick={handleClose}
                className="flex items-center gap-2 px-4 py-2 text-neutral-600 dark:text-neutral-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-900/20"
              >
                <FaUser className="text-sm" />
                <span className="text-sm font-medium">Sign In</span>
              </Link>
              <Link
                to="/signup"
                onClick={handleClose}
                className="bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 text-sm"
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* Emergency Contact */}
          <div className="relative bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 rounded-xl px-6 py-3 cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg hidden md:block">
            <div className="absolute top-[50%] -left-4 translate-y-[-50%] w-8 h-8 rounded-full bg-violet-600 border-3 border-white dark:border-neutral-900 flex items-center justify-center">
              <FaPhone className="text-white text-xs" />
            </div>
            <div className="space-y-0.5">
              <p className="text-xs text-violet-100 font-light">24/7 Support</p>
              <p className="text-xs font-semibold text-white tracking-wide">
                +234 800 123 4567
              </p>
            </div>
          </div>

          {/* Theme */}
          <Theme />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
