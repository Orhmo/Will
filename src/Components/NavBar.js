import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  const [nav, setNav] = useState(false);


  return (
    <div className="md:px-16 md:py-12 flex justify-between items-center w-full h-20 px-4 m-2 bg-white">
      <div className="p-2">
        <h1
        className="text-4xl font-bold text-purple-300">
          Will
          <span className="text2xl font-bold text-yellow-500">
            Generator
          </span>
        </h1>
      </div>

      <ul className="hidden md:flex">
        <li className="m-2 hover:text-yellow-500 hover:scale-105"><NavLink to="/">Home</NavLink></li>
        <li  className="m-2 hover:text-yellow-500 hover:scale-105"><NavLink to="/forms">Will Generator</NavLink></li>
        <li  className="m-2 hover:text-yellow-500 hover:scale-105">Will Templates</li>
        <li  className="m-2 hover:text-yellow-500 hover:scale-105">Legal Counsel</li>
      </ul>


      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-black md:hidden lg:hidden"
        >
        {nav ? <FaTimes size={20} /> : <FaBars size={20}/>}
    </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-1/2 bg-white text-black md:hidden ">
        <li className="m-2 hover:text-yellow-500 hover:scale-105"><NavLink to="/">Home</NavLink></li>
        <li  className="m-2 hover:text-yellow-500 hover:scale-105"><NavLink to="/forms">Will Generator</NavLink></li>
        <li  className="m-2 hover:text-yellow-500 hover:scale-105">Will Templates</li>
        <li  className="m-2 hover:text-yellow-500 hover:scale-105">Legal Counsel</li>
      </ul>
      )}

    </div>
  )
}

export default NavBar;
