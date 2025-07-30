import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { LiaTimesSolid } from "react-icons/lia";
import { FaBars, FaPhone, FaHeadset, FaUser } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import Theme from "../theme/Theme";
import { useAuth } from "../../Context/AuthContext";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/bus", label: "Find Buses" },
    { href: "/contact", label: "Contact" },
  ];

  const handleClick = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="w-full h-20 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-neutral-200/50 dark:border-neutral-800/50 flex items-center md:flex-row lg:px-28 md:px-16 sm:px-7 px-4 fixed top-0 z-50 shadow-sm">
      {/* Logo section */}
      <Link to="/" className="mr-16 flex items-center">
        <img
          src={Logo}
          alt="logo"
          className="w-36 h-auto object-contain hover:scale-105 transition-transform duration-200"
        />
      </Link>

      {/* Toggle button */}
      <button
        onClick={handleClick}
        className="flex-1 lg:hidden text-neutral-600 dark:text-neutral-300 hover:text-violet-600 dark:hover:text-violet-400 ease-in-out duration-300 flex items-center justify-end"
      >
        {open ? (
          <LiaTimesSolid className="text-xl" />
        ) : (
          <FaBars className="text-xl" />
        )}
      </button>

      {/* Navigation links */}
      <div
        className={`${
          open
            ? "flex absolute top-20 left-0 w-full h-auto md:h-auto md:relative"
            : "hidden"
        } flex-1 md:flex flex-col md:flex-row gap-x-5 gap-y-2 md:items-center md:p-0 sm:p-4 p-4 justify-between md:bg-transparent bg-white/95 dark:bg-neutral-900/95 md:shadow-none shadow-lg backdrop-blur-md rounded-md border border-neutral-200/50 dark:border-neutral-800/50`}
      >
        <ul className="list-none flex md:items-center items-start gap-x-8 gap-y-1 flex-wrap md:flex-row flex-col text-base text-neutral-700 dark:text-neutral-300 font-medium">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.href}
                onClick={handleClose}
                className="hover:text-violet-600 dark:hover:text-violet-400 ease-in-out duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-violet-600 after:transition-all after:duration-300 hover:after:w-full py-2"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex md:items-center items-start gap-x-4 gap-y-2 flex-wrap md:flex-row flex-col text-base font-medium">
          {/* Support Button */}
          <button className="flex items-center gap-2 px-4 py-2 text-neutral-600 dark:text-neutral-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-900/20">
            <FaHeadset className="text-sm" />
            <span className="text-sm font-medium">Support</span>
          </button>

          {/* Auth Buttons or Profile */}
          {!user ? (
            <React.Fragment>
              <Link
                to="/login"
                onClick={handleClose}
                className="flex items-center gap-2 px-4 py-2 text-neutral-600 dark:text-neutral-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-900/20"
              >
                <FaUser className="text-sm" />
                <span className="text-sm font-medium">Login</span>
              </Link>
              <Link
                to="/signup"
                onClick={handleClose}
                className="flex items-center gap-2 px-4 py-2 text-neutral-600 dark:text-neutral-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-900/20"
              >
                <FaUser className="text-sm" />
                <span className="text-sm font-medium">Sign Up</span>
              </Link>
            </React.Fragment>
          ) : (
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 text-neutral-600 dark:text-neutral-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-900/20">
                <FaUserCircle className="text-xl" />
                <span className="text-sm font-medium">
                  {user.name.split(" ")[0]}
                </span>
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-neutral-900 rounded-lg shadow-lg border border-neutral-200/50 dark:border-neutral-800/50 py-2 z-50 group-hover:block hidden">
                <Link
                  to="/profile"
                  onClick={handleClose}
                  className="block px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:bg-violet-50 dark:hover:bg-violet-900/20"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:bg-violet-50 dark:hover:bg-violet-900/20"
                >
                  Logout
                </button>
              </div>
            </div>
          )}

          {/* Emergency Contact - Nigerian number */}
          <div className="relative bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 rounded-xl px-6 py-3 cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg">
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
