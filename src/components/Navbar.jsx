import React from 'react'
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoLogInOutline } from "react-icons/io5";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
  const menuToggle = () => {
    setToggleMenu(!toggleMenu);
    var x = document.getElementById("navbar-sticky");

    if(window.innerWidth >= 768){
      x.style.display = "block";
    }else{
      x.style.display = toggleMenu ? "block" : "none";
    }

    window.addEventListener("resize", menuToggle)
  }
  return (
    <div className='flex flex-col-reverse ...'>
            <nav className="bg-transparent fixed w-full z-20 top-0 start-0 mt-20 sm:mt-[20px] lg:mt-[50px] md:mt-[50px] xl:mt-[50px]">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">MadeUI</span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    

                    <button type="button" className="text-black bg-gray-300
                    flex focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center ">Login <IoLogInOutline className='mt-1 m-1' /></button>
                    <button onClick={menuToggle} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLineCap="round" strokeLineJoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between block w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white bg-blue-200 rounded-xl shadow-xl lg:shadow-none">
                    <li>
                        <a href="#" className="block py-2 px-3 text-gray-500" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 text-gray-900">About</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 text-gray-900 ">Services</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 text-gray-900 ">Contact</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
    </div>
  )
}

export default Navbar