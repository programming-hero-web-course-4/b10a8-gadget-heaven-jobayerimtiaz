import React from "react";
import { Link, useLocation } from "react-router-dom";

import BannerSection from "../BannerSection/BannerSection";
import { IoCartOutline } from "react-icons/io5";

import { CiHeart } from "react-icons/ci";

const Navbar = ({ isHomePage }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const link = (
    <>
      <li>
        <Link
          to="/"
          className={`text-base font-bold ${
            isActive("/")
              ? "text-white underline"
              : isHomePage
              ? "text-white"
              : "text-black"
          } hover:text-gray-400 transition-colors`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/statistics"
          className={`text-base font-bold ${
            isActive("/statistics")
              ? "text-[#9538E2] underline"
              : isHomePage
              ? "text-white"
              : "text-black"
          } hover:text-gray-400 transition-colors`}
        >
          Statistics
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard"
          className={`text-base font-bold ${
            isActive("/dashboard")
              ? "text-[#9538E2] underline"
              : isHomePage
              ? "text-white"
              : "text-black"
          } hover:text-gray-400 transition-colors`}
        >
          Dashboard
        </Link>
      </li>
      <li>
        <Link
          to="/gadgetDoctor"
          className={`text-base font-bold ${
            isActive("/gadgetDoctor")
              ? "text-[#9538E2] underline"
              : isHomePage
              ? "text-white"
              : "text-black"
          } hover:text-gray-400 transition-colors`}
        >
          Gadget Doctor
        </Link>
      </li>
    </>
  );

  return (
    <div
      className={`w-11/12 mx-auto ${
        isHomePage
          ? "border-2 border-gray-300 rounded-2xl p-4 bg-[#9538E2] mt-6"
          : "mt-4"
      }`}
    >
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow ${
                isHomePage ? "bg-black" : "bg-base-100"
              }`}
            >
              {link}
            </ul>
          </div>
          <Link to="/">
            <a
              className={`btn btn-ghost text-xl font-bold ${
                isHomePage ? "text-white" : "text-black"
              }`}
            >
              Gadget Heaven
            </a>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>

        <div className="navbar-end hidden md:flex">
          <div className="flex justify-center items-center w-8 h-8 text-lg bg-white rounded-full mr-3 cursor-pointer border-1 border-gray-300">
            <IoCartOutline />
          </div>

          <div className="flex justify-center items-center w-8 h-8 text-lg bg-white rounded-full cursor-pointer border-1 border-gray-300">
            <CiHeart />
          </div>
        </div>
      </div>
      {isHomePage && <BannerSection />}
    </div>
  );
};

export default Navbar;
