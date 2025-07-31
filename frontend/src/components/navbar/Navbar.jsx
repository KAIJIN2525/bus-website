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
  FaBus,
  FaGift,
  FaHome,
  FaInfoCircle,
  FaEnvelope,
} from "react-icons/fa";
import Theme from "../theme/Theme";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [profileOpen, setProfileOpen] = React.useState(false);
  const { user, logout } = useAuth();

  const navLinks = [
    { href: "/", label: "Home", icon: FaHome },
    { href: "/about", label: "About", icon: FaInfoCircle },
    { href: "/bus", label: "Our Fleet", icon: FaBus },
    { href: "/offers", label: "Offers", icon: FaGift },
    { href: "/contact", label: "Contact", icon: FaEnvelope },
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
    <nav className="w-full h-20 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-green-200/50 dark:border-green-800/50 flex items-center justify-between lg:px-28 md:px-16 sm:px-7 px-4 fixed top-0 z-50 shadow-lg">
      {/* Logo section */}
      <Link to="/" className="flex items-center flex-shrink-0 group">
        <img
          src={Logo}
          alt="NaijaBus Express"
          className="w-40 h-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-sm"
        />
      </Link>

      {/* Toggle button */}
      <button
        onClick={handleClick}
        className="lg:hidden text-neutral-600 dark:text-neutral-300 hover:text-green-600 dark:hover:text-green-400 ease-in-out duration-300 text-xl bg-green-50 dark:bg-green-900/20 p-3 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/30 shadow-sm"
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation links */}
      <div
        className={`${
          open ? "flex absolute top-20 left-0 w-full" : "hidden"
        } lg:flex flex-col lg:flex-row gap-x-8 gap-y-4 lg:items-center lg:p-0 p-8 justify-between lg:bg-transparent bg-white/98 dark:bg-neutral-900/98 lg:shadow-none shadow-2xl backdrop-blur-md lg:rounded-none rounded-2xl lg:border-none border border-green-200/50 dark:border-green-800/50 flex-1 lg:mx-16`}
      >
        <ul className="list-none flex lg:items-center items-start gap-x-8 gap-y-4 flex-wrap lg:flex-row flex-col text-base text-neutral-700 dark:text-neutral-300 font-medium">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.href}
                onClick={handleClose}
                className="hover:text-green-600 dark:hover:text-green-400 ease-in-out duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-green-600 after:to-blue-600 after:transition-all after:duration-300 hover:after:w-full py-3 px-4 block flex items-center gap-3 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300 group"
              >
                <link.icon className="text-sm group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex lg:items-center items-start gap-x-4 gap-y-4 flex-wrap lg:flex-row flex-col text-base font-medium">
          {/* Support Button */}
          <button className="flex items-center gap-3 px-4 py-3 text-neutral-600 dark:text-neutral-400 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 group">
            <FaHeadset className="text-sm group-hover:scale-110 transition-transform duration-300" />
            <span className="text-sm font-medium">24/7 Support</span>
          </button>

          {/* Authentication Buttons */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-3 px-4 py-3 text-neutral-600 dark:text-neutral-400 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 group"
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full object-cover border-2 border-green-200 dark:border-green-800 group-hover:border-green-400 transition-colors duration-300"
                />
                <span className="text-sm font-medium hidden sm:block">
                  {user.name.split(" ")[0]}
                </span>
              </button>
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl border border-green-200 dark:border-green-700 py-3 z-50 backdrop-blur-sm">
                  <div className="px-4 py-3 border-b border-green-200 dark:border-green-700">
                    <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                      {user.name}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {user.email}
                    </p>
                  </div>
                  <Link
                    to="/profile"
                    onClick={handleClose}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors duration-200 rounded-lg mx-2"
                  >
                    <FaUserCircle className="text-sm" />
                    My Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200 w-full text-left rounded-lg mx-2"
                  >
                    <FaSignOutAlt className="text-sm" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                onClick={handleClose}
                className="flex items-center gap-2 px-4 py-3 text-neutral-600 dark:text-neutral-400 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 group"
              >
                <FaUser className="text-sm group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">Sign In</span>
              </Link>
              <Link
                to="/signup"
                onClick={handleClose}
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 text-sm shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* Emergency Contact */}
          <div className="relative bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 rounded-xl px-6 py-3 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hidden md:block transform hover:scale-105 group">
            <div className="absolute top-[50%] -left-4 translate-y-[-50%] w-8 h-8 rounded-full bg-green-600 border-3 border-white dark:border-neutral-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <FaPhone className="text-white text-xs" />
            </div>
            <div className="space-y-0.5">
              <p className="text-xs text-green-100 font-light">Emergency Line</p>
              <p className="text-xs font-bold text-white tracking-wide">
                0800-NAIJA-BUS
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