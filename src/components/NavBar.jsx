import React, { useState } from "react";
import { User, ShoppingBag, Search, Menu, X } from "lucide-react";
import logo from "../assets/Logo.png";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#e2f9c8] to-[#b1d7e6] px-4 md:px-6 py-3 sticky top-0 z-50">

      <div className="flex items-center justify-between">

        {/* LOGO */}
        <div className="h-12 w-12 md:h-14 md:w-14 rounded-full overflow-hidden bg-white shadow-md">
          <img src={logo} alt="logo" className="h-full w-full object-cover" />
        </div>

        {/* CENTER NAV (Desktop only) */}
        <div className="hidden md:flex bg-white/80 backdrop-blur-md px-8 py-3 rounded-full shadow-md gap-8 font-medium">
          <a href="#home" className="!no-underline !text-gray-700 hover:text-blue-500">Home</a>
          <a href="#about" className="!no-underline !text-gray-700 hover:text-blue-500">About</a>
          <a href="#products" className="!no-underline !text-gray-700 hover:text-blue-500">Products</a>
          <a href="#service" className="!no-underline !text-gray-700 hover:text-blue-500">Services</a>
          <a href="#contact" className="!no-underline !text-gray-700 hover:text-blue-500">Contact</a>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 md:gap-3">

          {/* SEARCH (hide on mobile) */}
          <div className="hidden md:flex items-center bg-white/70 px-4 py-2 rounded-full border shadow-sm">
            <Search size={16} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none text-sm bg-transparent w-28"
            />
          </div>

          {/* ICONS */}
          <button className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-blue-500 shadow-md">
            <User size={16} />
          </button>

          <button className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-blue-500 shadow-md relative">
            <ShoppingBag size={16} />
            <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              2
            </span>
          </button>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden mt-4 bg-white rounded-xl shadow-lg p-5 flex flex-col gap-4 text-gray-700 font-medium">

          <a href="#home" onClick={() => setOpen(false)} className="!no-underline !text-gray-700 hover:text-blue-500">Home</a>
          <a href="#about" onClick={() => setOpen(false)} className="!no-underline !text-gray-700 hover:text-blue-500">About</a>
          <a href="#products" onClick={() => setOpen(false)} className="!no-underline !text-gray-700 hover:text-blue-500">Products</a>
          <a href="#services" onClick={() => setOpen(false)} className="!no-underline !text-gray-700 hover:text-blue-500">Services</a>
          <a href="#contact" onClick={() => setOpen(false)} className="!no-underline !text-gray-700 hover:text-blue-500">Contact</a>

          {/* MOBILE SEARCH */}
          <div className="flex items-center border rounded-md px-3 py-2">
            <Search size={16} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none text-sm bg-transparent w-full"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;