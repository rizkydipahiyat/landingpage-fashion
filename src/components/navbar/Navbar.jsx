"use client";

import React, { useState } from "react";
import {
  IoCartOutline,
  IoPersonOutline,
  IoSearchOutline,
} from "react-icons/io5";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="container mx-auto p-4 w-full">
      <div className="flex items-center justify-between">
        <div>
          <strong className="text-2xl mr-3">NOSTRA</strong>
        </div>

        <div className="hidden md:flex items-center gap-x-8 font-medium">
          <span>Shop</span>
          <span>Most wanted</span>
          <span>New arrival</span>
          <span>Brands</span>
        </div>
        <div className="flex items-center gap-x-8">
          <div className="flex items-center bg-slate-100 p-3">
            <IoSearchOutline className="text-slate-400" size={24} />
            <input
              className="ml-3 xs:w-32 bg-slate-100 border-none outline-none rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
          <IoCartOutline size={24} />
          <IoPersonOutline size={24} />
          <button
            id="hamburger"
            name="hamburger"
            onClick={handleMenuClick}
            type="button"
            className="text-slate-900 md:hidden lg:hidden">
            <span
              className={`hamburger-line duration origin-top-left transition-all ease-in ${
                isActive ? "rotate-45 translate-y-1" : ""
              }`}></span>
            <span
              className={`hamburger-line duration transition-all ease-in ${
                isActive ? "opacity-0 scale-0" : ""
              }`}></span>
            <span
              className={`hamburger-line duration origin-bottom-left transition-all ease-in ${
                isActive ? "-rotate-45 translate-y-1" : ""
              }`}></span>
          </button>
        </div>
      </div>
      {isActive && (
        <div className="mt-2 bg-slate-100 text-slate-900 font-medium p-3 flex flex-col items-center gap-y-3 md:hidden lg:hidden transition duration-1000 ease-out">
          <span className="animate-fade-in">Shop</span>
          <span className="animate-fade-in">Most wanted</span>
          <span className="animate-fade-in">New arrival</span>
          <span className="animate-fade-in">Brands</span>
        </div>
      )}
    </div>
  );
};

export default Navbar;
