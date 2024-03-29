"use client"
import React, { useState } from 'react';
import 'animate.css';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-glass fixed w-full top-0 z-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 md:py-6">
          <div className="flex items-center">
            <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
              {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white animate__animated animate__bounce">Undefined Limits</span>
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleNavbar} type="button" className="inline-flex items-center justify-center p-2 text-gray-500 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
            </button>
          </div>
          <div className="hidden md:block">
            <ul className="flex mr-10 gap-10 space-x-4">
              <li>
                <a href="#home" className="text-white hover:bg-gradient-to-r  from-slate-900  to-slate-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:text-white">Home</a>
              </li>
              <li >
                <a href="#about" className="text-white hover:bg-gradient-to-r from-slate-900  to-slate-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:text-white">Sobre el Proyecto</a>
              </li>
              <li>
                <a href="#team" className="text-white hover:bg-gradient-to-r from-slate-900  to-slate-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:text-white">Equipo</a>
              </li>

            </ul>
          </div>
        </div>
        <div className= {`${isOpen ? 'block' : 'hidden'} md:hidden`} >
          <ul className="flex flex-col space-y-4 ">
            <li>
              <a href="#home" className="block py-2 px-4 text-white hover:text-blue-700 dark:text-white dark:hover:text-blue-500" >Home</a>
            </li>
            <li>
              <a href="#about" className="block py-2 px-4 text-white hover:text-blue-700 dark:text-white dark:hover:text-blue-500">Sobre el Proyecto</a>
            </li>
            <li>
              <a href="#team" className="block py-2 px-4 text-white hover:text-blue-700 dark:text-white dark:hover:text-blue-500">Team</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





