import React from 'react'
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      {/* Top Footer */}
      <div className='border-b border-t border-gray-200'>
        <div className='py-15 px-4 sm:px-10 lg:px-40 flex flex-col gap-15'>

          {/* Header */}
          <div className='flex flex-col lg:flex-row justify-between gap-10 lg:gap-0'>
            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight  lg:leading-20'>
              Let's <span className='text-[#F29200]'>TALK</span> <br /> TOGETHER
            </h1>
            
            <form action="">
              <div className='flex gap-5 border-b items-center'>
                <input 
                  type="email" 
                  placeholder='Enter Your Email' 
                  name="email" 
                  className='text-xl sm:text-2xl lg:text-5xl py-4 sm:py-5 lg:py-7 outline-none w-full max-w-full lg:max-w-lg' 
                />
                <ArrowUpRight className="w-12 h-12 sm:w-14 sm:h-14 lg:w-18 lg:h-18 opacity-50 hover:text-[#F29200] hover:opacity-100 cursor-pointer" strokeWidth={1} />  
              </div>
            </form>
          </div>

          {/* Body */}
          <div className='flex flex-col lg:flex-row justify-between gap-15 lg:gap-0'>

            {/* Social Media */}
            <div className='flex flex-col gap-7'> 
              <h1 className='text-[#F29200] text-2xl sm:text-3xl font-bold'>Social media</h1>
              <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5'>
                <div className='flex gap-1 items-center hover:text-[#F29200] cursor-pointer'> 
                  <span className='text-base sm:text-lg'>Instagram</span>
                  <ArrowUpRight className='w-4 h-4 sm:w-5 sm:h-5' strokeWidth={1}/>
                </div>
                <div className='flex gap-1 items-center hover:text-[#F29200] cursor-pointer'> 
                  <span className='text-base sm:text-lg'>Twitter</span>
                  <ArrowUpRight className='w-4 h-4 sm:w-5 sm:h-5' strokeWidth={1}/>
                </div>
                <div className='flex gap-1 items-center hover:text-[#F29200] cursor-pointer'> 
                  <span className='text-base sm:text-lg'>Tiktok</span>
                  <ArrowUpRight className='w-4 h-4 sm:w-5 sm:h-5' strokeWidth={1}/>
                </div>
                <div className='flex gap-1 items-center hover:text-[#F29200] cursor-pointer'> 
                  <span className='text-base sm:text-lg'>Facebook</span>
                  <ArrowUpRight className='w-4 h-4 sm:w-5 sm:h-5' strokeWidth={1}/>
                </div>
                <div className='flex gap-1 items-center hover:text-[#F29200] cursor-pointer'> 
                  <span className='text-base sm:text-lg'>LinkedIn</span>
                  <ArrowUpRight className='w-4 h-4 sm:w-5 sm:h-5' strokeWidth={1}/>
                </div>
                <div className='flex gap-1 items-center hover:text-[#F29200] cursor-pointer'> 
                  <span className='text-base sm:text-lg'>Youtube</span>
                  <ArrowUpRight className='w-4 h-4 sm:w-5 sm:h-5' strokeWidth={1}/>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className='flex flex-col sm:flex-row gap-10 sm:gap-15 lg:gap-20 items-start '>

              {/* Industries */}
              <div className='flex flex-col gap-5 w-full max-w-sm'>
                <h1 className='text-[#F29200] text-lg sm:text-xl font-semibold'>Industries</h1>
                <div className='grid grid-cols-2 gap-15'>

                <div className='flex flex-col gap-3'>
                  <Link to={'/callcenters'} className='text-base sm:text-lg hover:text-[#F29200] cursor-pointer'>Call Centers</Link>
                  <Link to={'/digitalbooks'} className='text-base sm:text-lg hover:text-[#F29200] cursor-pointer'>Digital Books</Link>
                  <Link to={'/techsupport'} className='text-base sm:text-lg hover:text-[#F29200] cursor-pointer'>Tech Support</Link>
                  <Link to={'/restaurants'} className='text-base sm:text-lg hover:text-[#F29200] cursor-pointer'>Resturant Businesses</Link>
                  <Link to={'/outbound'} className='text-base sm:text-lg hover:text-[#F29200] cursor-pointer'>Outbound Product Selling</Link>
                  <Link to={'/medical'} className='text-base sm:text-lg hover:text-[#F29200] cursor-pointer'>Medical Related Campaigns</Link>
                </div>

                <div className='flex flex-col gap-3'>
                  <Link to={'/groceries'} className='text-base sm:text-lg hover:text-[#F29200] cursor-pointer'>Groceries</Link>
                  <Link to={'/travel'} className='text-base sm:text-lg hover:text-[#F29200] cursor-pointer'>Travel</Link>
                  <Link to={'/vape'} className='text-base sm:text-lg hover:text-[#F29200] cursor-pointer'>Vape</Link>
                  <Link to={'/ecommerce-websites'} className='text-base sm:text-lg hover:text-[#F29200] cursor-pointer'>Eccomerce Websites</Link>
                  <Link to={'/web-design'} className='text-base sm:text-lg hover:text-[#F29200] cursor-pointer'>Web Design & Marketing</Link>
                </div>
                </div>
              </div>

              {/* Solutions */}
              <div className='flex flex-col gap-5 w-full max-w-sm'>
                <h1 className='text-[#F29200] text-lg sm:text-xl font-semibold'>Solutions</h1>
                <div className='grid grid-cols-2 gap-15'>

                <div className='flex flex-col gap-3'>
                  <Link to={'/ach'} className='text-base sm:text-lg hover:text-[#F29200] cursor-pointer'>ACH</Link>
                  <Link to={'/3d-secure'} className='text-base sm:text-lg hover:text-[#F29200] cursor-pointer'>3D Secure</Link>
                  <Link to={'/b2b-payments'} className='text-base sm:text-lg hover:text-[#F29200] cursor-pointer'>B2B Payments</Link>
                  <Link to={'/merchant-services'} className='text-base sm:text-lg hover:text-[#F29200] cursor-pointer'>Merchant Services</Link>
                  <Link to={'/chargeback-management'} className='text-base sm:text-lg hover:text-[#F29200] cursor-pointer'>Chargeback Management</Link>
                  <Link to={'/payment-gateway'} className='text-base sm:text-lg hover:text-[#F29200] cursor-pointer'>Payment Gateway</Link>
                  <Link to={'/high-risk-merchant-account'} className='text-base sm:text-lg hover:text-[#F29200] cursor-pointer'>High-Risk Merchant Account</Link>
                </div>

                <div className='flex flex-col gap-3'>
                  <Link to={'/online-payment'} className='text-base sm:text-lg hover:text-[#F29200] cursor-pointer'>Online Payments</Link>
                  <Link to={'/fraud-prevention'} className='text-base sm:text-lg hover:text-[#F29200] cursor-pointer'>Fraud Prevention</Link>
                  <Link to={'/virtual-terminal'} className='text-base sm:text-lg hover:text-[#F29200] cursor-pointer'>Virtual Terminal</Link>
                  <Link to={'/moto-processing'} className='text-base sm:text-lg hover:text-[#F29200] cursor-pointer'>MOTO Processing</Link>
                  <Link to={'/level-2-and-3-credit-card-processing'} className='text-base sm:text-lg hover:text-[#F29200] cursor-pointer'>Level 2 & 3 Processing</Link>
                  <Link to={'/recurring-payment'} className='text-base sm:text-lg hover:text-[#F29200] cursor-pointer'>Recurring Payments</Link>
                  <Link to={'/mobile-payments'} className='text-base sm:text-lg hover:text-[#F29200] cursor-pointer'>Mobile Payments</Link>
                </div>
                </div>
              </div>

            </div>

          </div>

          {/* Address */}
          <div className='flex flex-col gap-7'> 
            <h1 className='text-[#F29200] text-2xl sm:text-3xl font-bold'>Address</h1>
            <span className='text-base sm:text-lg w-full max-w-full lg:max-w-sm'>
              475 Cherry Dr, Troy, Michigan 48083 United States ( (248) 823-3200 )
            </span>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className='py-10 px-4 sm:px-10 lg:px-40 flex flex-col sm:flex-row justify-between gap-5 sm:gap-0'>
        <p className='text-sm sm:text-md  lg:text-lg font-medium text-gray-600 text-center sm:text-left'>
          © 2024 Copyright By Sansbro - Finestra
        </p>
        <ul className='flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-5'>
          <li className='text-sm sm:text-md lg:text-lg hover:text-[#F29200] cursor-pointer'>Terms</li>
          <li className='text-sm sm:text-md lg:text-lg hover:text-[#F29200] cursor-pointer'>Privacy</li>
          <li className='text-sm sm:text-md lg:text-lg hover:text-[#F29200] cursor-pointer'>Cookies</li>
          <li className='text-sm sm:text-md lg:text-lg hover:text-[#F29200] cursor-pointer'>Legal</li>
          <li className='text-sm sm:text-md lg:text-lg hover:text-[#F29200] cursor-pointer'>Recalls</li>
        </ul>
      </div>
    </>
  )
}

export default Footer