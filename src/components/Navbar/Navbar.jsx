import React, { useState, useEffect } from 'react'
import { ChevronDown  } from 'lucide-react';
import { NavLink, useLocation } from "react-router-dom";
import MbOverlay from './MbOverlay.jsx'

function Navbar() {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);


   const location = useLocation();

   const industriesPaths = [
    "/callcenters",
    "/outbound",
    "/restaurants",
    "/medical",
    "/digitalbooks",
    "/techsupport",
    "/groceries",
    "/ecommerce-websites",
    "/travel",
    "/web-design",
    "/vape"
  ];
   const industriesActive = industriesPaths.some(path => location.pathname === path);

    const solutionsPaths = [
    "/merchant-services",
    "/ach",
    "/chargeback-management",
    "/high-risk-merchant-account",
    "/3d-secure",
    "/fraud-prevention",
    "/payment-gateway",
    "/level-2-and-3-credit-card-processing",
    "/moto-processing",
    "/virtual-terminal",
    "/mobile-payments",
    "/online-payment",
    "/recurring-payment",
    "/b2b-payments",
  ];
   const solutionsActive = solutionsPaths.some(path => location.pathname === path);

  const ResourcesPaths = [
    "/developer",
    "/partner",
  ];
   const resourcesActive = ResourcesPaths.some(path => location.pathname === path);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`fixed flex justify-between lg:justify-evenly px-6 lg:px-0 py-5 top-0 left-0 w-full z-50 transition-all duration-300 ${ isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent'}`}>

        {/* Logo */}
        <a href={'/'}>
        <img 
          src="/Navbar/logo.png" 
          className='w-35 h-10' 
          alt="CrazyMerchant_Logo" 
        />
        </a>

        {/* Hamburger Menu for medium and small screens */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 ${ isScrolled ? 'bg-black' : 'bg-white'} transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 ${ isScrolled ? 'bg-black' : 'bg-white'} my-1.5 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 ${ isScrolled ? 'bg-black' : 'bg-white'} transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>

        <div className='hidden lg:flex justify-around items-center gap-30'>
          {/* Menu */}
          <ul className={`flex rounded-4xl px-8 py-0.5 gap-7 justify-center items-center transition-all duration-300 ${
            isScrolled 
              ? 'bg-[#F29200] text-white' 
              : 'bg-[#F29200] text-white'
          }`}>

            {/* Home */}
            <li>            
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive 
                    ? `rounded-2xl py-2.5 px-2 text-light transition-all duration-300 ${
                        isScrolled ? 'bg-black text-white' : 'bg-black text-white'
                      }` 
                    : "hover:opacity-80 transition-opacity duration-300"
                }
              >
                Home   
              </NavLink>
            </li>


            {/* Industries */}
            <li className="relative group">            
              <NavLink 
              className={`flex items-center gap-2 rounded-2xl py-2 transition-all duration-300 ${
                industriesActive ? 'bg-black text-white px-2' : 'hover:opacity-80'
                }`}
                >
                  Industries
                <ChevronDown className='w-5 h-5'/>
              </NavLink>

              {/* Submenu */}
              <div className="absolute left-0 mt-0.5 hidden group-hover:grid bg-black text-white shadow-lg rounded-xl py-3 w-100 z-50 grid-cols-2 gap-2">
                  
                  <NavLink to="/callcenters" className={({ isActive }) => `block px-4 py-2 hover:text-amber-500 text-sm transition-all duration-100 ${isActive ? 'text-amber-500 ' : 'text-white'}`}>
                     Call Centers
                  </NavLink>

                  <NavLink to="/restaurants" className={({ isActive }) => `block px-4 py-2 hover:text-amber-500 text-sm transition-all duration-100 ${isActive ? 'text-amber-500 ' : 'text-white'}`}>
                     Resturants Business
                  </NavLink>

                  <NavLink to="/outbound" className={({ isActive }) => `block px-4 py-2 hover:text-amber-500 text-sm  transition-all duration-100 ${isActive ? 'text-amber-500 ' : 'text-white'}`}>
                     Outbound Product Selling
                  </NavLink>

                  <NavLink to="/medical" className={({ isActive }) => `block px-4 py-2 hover:text-amber-500 text-sm transition-all duration-100 ${isActive ? 'text-amber-500 ' : 'text-white'}`}>
                     Medical Related Campaigns
                  </NavLink>

                  <NavLink to="/digitalbooks" className={({ isActive }) => `block px-4 py-2 hover:text-amber-500 text-sm transition-all duration-100 ${isActive ? 'text-amber-500 ' : 'text-white'}`}>
                     Digital Books
                  </NavLink>

                  <NavLink to="/techsupport" className={({ isActive }) => `block px-4 py-2 hover:text-amber-500 text-sm transition-all duration-100 ${isActive ? 'text-amber-500 ' : 'text-white'}`}>
                     Tech Support
                  </NavLink>

                  <NavLink to="/groceries" className={({ isActive }) => `block px-4 py-2 hover:text-amber-500 text-sm transition-all duration-100 ${isActive ? 'text-amber-500 ' : 'text-white'}`}>
                     Groceries
                  </NavLink>

                  <NavLink to="/ecommerce-websites" className={({ isActive }) => `block px-4 py-2 hover:text-amber-500 text-sm transition-all duration-100 ${isActive ? 'text-amber-500 ' : 'text-white'}`}>
                     E-commerce Websites
                  </NavLink>

                  <NavLink to="/travel" className={({ isActive }) => `block px-4 py-2 hover:text-amber-500 text-sm transition-all duration-100 ${isActive ? 'text-amber-500 ' : 'text-white'}`}>
                     Travel
                  </NavLink>

                  <NavLink to="/vape" className={({ isActive }) => `block px-4 py-2 hover:text-amber-500 text-sm transition-all duration-100 ${isActive ? 'text-amber-500 ' : 'text-white'}`}>
                     Vape
                  </NavLink>

                   <NavLink to="/web-design" className={({ isActive }) => `block px-4 py-2 hover:text-amber-500 text-sm transition-all duration-100 ${isActive ? 'text-amber-500 ' : 'text-white'}`}>
                     Web Design & Marketing
                  </NavLink>

              </div>

            </li>

            {/* Solutions */}
            <li className="relative group">            
              <NavLink 
              className={`flex items-center gap-2 rounded-2xl py-2 transition-all duration-300 ${
                solutionsActive ? 'bg-black text-white px-2' : 'hover:opacity-80'
                }`}
                >
                  Solutions
                <ChevronDown className='w-5 h-5'/>
              </NavLink>

              {/* Submenu */}
              <div className="absolute left-0 mt-0.5 hidden group-hover:grid bg-black text-white shadow-lg rounded-xl py-3 w-100 z-50 grid-cols-2 gap-2">
                  
                  <NavLink to="/merchant-services" className={({ isActive }) => `block px-4 py-2 hover:text-amber-500 text-sm transition-all duration-100 ${isActive ? 'text-amber-500 ' : 'text-white'}`}>
                     Merchant Services
                  </NavLink>

                  <NavLink to="/ach" className={({ isActive }) => `block px-4 py-2 hover:text-amber-500 text-sm transition-all duration-100 ${isActive ? 'text-amber-500 ' : 'text-white'}`}>
                     ACH
                  </NavLink>

                  <NavLink to="/chargeback-management" className={({ isActive }) => `block px-4 py-2 hover:text-amber-500 text-sm  transition-all duration-100 ${isActive ? 'text-amber-500 ' : 'text-white'}`}>
                     Chargeback Management
                  </NavLink>

                  <NavLink to="/high-risk-merchant-account" className={({ isActive }) => `block px-4 py-2 hover:text-amber-500 text-sm transition-all duration-100 ${isActive ? 'text-amber-500 ' : 'text-white'}`}>
                     High-Risk Merchant Account
                  </NavLink>

                  <NavLink to="/3d-secure" className={({ isActive }) => `block px-4 py-2 hover:text-amber-500 text-sm transition-all duration-100 ${isActive ? 'text-amber-500 ' : 'text-white'}`}>
                     3D Secure
                  </NavLink>

                  <NavLink to="/fraud-prevention" className={({ isActive }) => `block px-4 py-2 hover:text-amber-500 text-sm transition-all duration-100 ${isActive ? 'text-amber-500 ' : 'text-white'}`}>
                     Fraud Prevention
                  </NavLink>

                  <NavLink to="/payment-gateway" className={({ isActive }) => `block px-4 py-2 hover:text-amber-500 text-sm transition-all duration-100 ${isActive ? 'text-amber-500 ' : 'text-white'}`}>
                     Payment Gateway
                  </NavLink>

                  <NavLink to="/moto-processing" className={({ isActive }) => `block px-4 py-2 hover:text-amber-500 text-sm transition-all duration-100 ${isActive ? 'text-amber-500 ' : 'text-white'}`}>
                     MOTO Processing
                  </NavLink>

                  <NavLink to="/level-2-and-3-credit-card-processing" className={({ isActive }) => `block px-4 py-2 hover:text-amber-500 text-sm transition-all duration-100 ${isActive ? 'text-amber-500 ' : 'text-white'}`}>
                     Level 2 & 3 Processing
                  </NavLink>

                  <NavLink to="/recurring-payment" className={({ isActive }) => `block px-4 py-2 hover:text-amber-500 text-sm transition-all duration-100 ${isActive ? 'text-amber-500 ' : 'text-white'}`}>
                    Recurring Payments
                  </NavLink>

                   <NavLink to="/mobile-payments" className={({ isActive }) => `block px-4 py-2 hover:text-amber-500 text-sm transition-all duration-100 ${isActive ? 'text-amber-500 ' : 'text-white'}`}>
                     Mobile Payments
                  </NavLink>

                  <NavLink to="/virtual-terminal" className={({ isActive }) => `block px-4 py-2 hover:text-amber-500 text-sm transition-all duration-100 ${isActive ? 'text-amber-500 ' : 'text-white'}`}>
                     Virtual Terminal
                  </NavLink>

                   <NavLink to="/online-payment" className={({ isActive }) => `block px-4 py-2 hover:text-amber-500 text-sm transition-all duration-100 ${isActive ? 'text-amber-500 ' : 'text-white'}`}>
                     Online Payments
                  </NavLink>

                  <NavLink to="/b2b-payments" className={({ isActive }) => `block px-4 py-2 hover:text-amber-500 text-sm transition-all duration-100 ${isActive ? 'text-amber-500 ' : 'text-white'}`}>
                     B2B Payments
                  </NavLink>

              </div>

            </li>



          {/* Resources */}
            <li className="relative group">            
              <NavLink 
              className={`flex items-center gap-2 rounded-2xl py-2 transition-all duration-300 ${
                resourcesActive ? 'bg-black text-white px-2' : 'hover:opacity-80'
                }`}
                >
                  Resources
                <ChevronDown className='w-5 h-5'/>
              </NavLink>

              {/* Submenu */}
              <div className="absolute left-0 mt-0.5 hidden group-hover:grid bg-black text-white shadow-lg rounded-xl py-3 w-40 z-50 grid-cols-1 gap-2">
                  
                  <NavLink to="/developer" className={({ isActive }) => `block px-4 py-2 hover:text-amber-500 text-sm transition-all duration-100 ${isActive ? 'text-amber-500 ' : 'text-white'}`}>
                     Developer
                  </NavLink>

                  <NavLink to="/partner" className={({ isActive }) => `block px-4 py-2 hover:text-amber-500 text-sm transition-all duration-100 ${isActive ? 'text-amber-500 ' : 'text-white'}`}>
                     Partner
                  </NavLink>

              </div>

            </li>



            {/* Blogs */}
            <li>            
              <NavLink 
                to="/blogs" 
                className={({ isActive }) => 
                  isActive 
                    ? `rounded-2xl py-2.5 px-2 text-light transition-all duration-300 ${
                        isScrolled ? 'bg-black text-white' : 'bg-black text-white'
                      }` 
                    : "hover:opacity-80 transition-opacity duration-300"
                }
              >
                Blogs   
              </NavLink>
            </li>

          </ul>

          {/* Call To Actions */}
          <div className='flex gap-5 items-center justify-center'>
            <button className={`p-2 px-5 rounded-xl border cursor-pointer transition-all duration-300 ${
              isScrolled 
                ? 'border-black text-black hover:border-[#F29200] hover:text-[#F29200]' 
                : 'border-white text-white hover:bg-white hover:text-black'
            }`}>
              888-651-9042
            </button>

            <button className={`p-2 px-5 rounded-xl text-white cursor-pointer transition-all duration-300 ${
              isScrolled 
                ? 'bg-[#F29200] hover:bg-amber-600' 
                : 'bg-[#F29200] hover:bg-amber-600'
            }`}>
              Get Started
            </button>

            {/* <Search className={`w-7 h-7 transition-all duration-300 ${
              isScrolled ? 'text-black' : 'text-white'
            }`}/> */}
          </div>
        </div>


      {isMenuOpen && (
        <MbOverlay isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      )}

    </div>
  )
}

export default Navbar