import React from "react";
import { Link } from "react-router-dom";

import BannerSection from "../BannerSection/BannerSection";
import { IoCartOutline } from "react-icons/io5";

import { CiHeart } from "react-icons/ci";

const NavBar = ({ isHomePage }) => {
  const link = (
    <>
      <li>
        <Link
          className={`text-base font-bold  ${
            isHomePage ? "text-white" : "text-black"
          }`}
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className={`text-base font-bold  ${
            isHomePage ? "text-white" : "text-black"
          }`}
          to="/statistics"
        >
          Statistics
        </Link>
      </li>
      <li>
        <Link
          className={`text-base font-bold  ${
            isHomePage ? "text-white" : "text-black"
          }`}
          to="/dashboard"
        >
          Dashboard
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
      <div className="navbar w-11/12 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow ${
                isHomePage ? "bg-black" : "bg-base-100"
              }
              `}
            >
              {link}
            </ul>
          </div>
          <a
            className={`btn btn-ghost text-xl  font-bold ${
              isHomePage ? "text-white" : "text-black"
            }`}
          >
            Gadget Heaven
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end hidden md:flex  ">
          <div className="flex justify-center items-center w-8 h-8 text-lg bg-white rounded-full mr-3 cursor-pointer border-1 border-gray-300">
            <IoCartOutline />
          </div>
          <div className="flex justify-center items-center w-8 h-8 text-lg bg-white rounded-full cursor-pointer border-1 border-gray-300">
            <CiHeart />
          </div>
        </div>
      </div>
      {isHomePage && <BannerSection></BannerSection>}
    </div>
  );
};

export default NavBar;
