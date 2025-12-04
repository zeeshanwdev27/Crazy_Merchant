import React from 'react'
import { Users, Earth, ArrowsUpFromLine, ShieldCheck } from 'lucide-react';

function WhyChooseUs() {
  return (
    <div className='h-full min-h-[66vh]'>

        <div className='py-20 px-4 md:px-20 lg:px-40 flex flex-col gap-10 lg:gap-20'>
            
        <div className='flex flex-col lg:flex-row justify-between gap-8 lg:gap-0'>
            <h1 className='text-5xl lg:text-6xl font-black'>WHY <br /> <span className='text-[#F29200]'>CHOOSE</span> US</h1>
            <p className='text-md text-gray-600 font-medium flex items-center w-full lg:max-w-lg'>Whatever your customers' payment preferences, we'll help you find the right solution for your business.</p>
        </div>


<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-5 divide-x-0 md:divide-x-0 lg:divide-x-2 divide-y-2 md:divide-y-0 lg:divide-y-0 divide-dashed divide-gray-300 justify-center'>


  {/* Customer */}
        <div className='flex flex-col gap-4 py-6 md:py-0 md:pl-4 lg:pl-15 px-4 md:px-0'>
            <div className='p-1 px-2 flex items-center font-bold gap-2 bg-[#FF9A00]/8 text-[#F29200] w-30 rounded-md'>
            <Users className='w-4 h-4'/>
            <p className='text-sm'>Customers</p>
            </div>
            <h1 className='text-xl lg:text-2xl font-black'>Secure Processing</h1>
            <p className='text-sm font-bold'>Advanced Fraud Protection And <br /> Secure Payment Processing For <br />High-Risk Businesses</p>
        </div>

        {/* Setup */}

        <div className='flex flex-col gap-4 py-6 md:py-0 px-4 md:px-4 lg:px-8'>
            <div className='p-1 px-2 flex items-center font-bold gap-2 bg-[#FF9A00]/8 text-[#F29200] w-30 rounded-md'>
            <Earth  className='w-4 h-4'/>
            <p className='text-sm'>Setup Fee</p>
            </div>
            <h1 className='text-xl lg:text-2xl font-black'>Fast Integration</h1>
            <p className='text-sm font-bold'>Quick And Easy Integration With <br />  Your Existing Systems and Platforms</p>
        </div>


        {/* Approval */}
        <div className='flex flex-col gap-4 py-6 md:py-0 px-4 md:px-4 lg:px-8'>
            <div className='p-1 px-2 flex items-center font-bold gap-2 bg-[#FF9A00]/8 text-[#F29200] w-30 rounded-md'>
            <ArrowsUpFromLine  className='w-4 h-4'/>
            <p className='text-sm'>Approval</p>
            </div>
            <h1 className='text-xl lg:text-2xl font-black'>Expert Support</h1>
            <p className='text-sm font-bold'>Dedicated Team Of Experts To Help <br /> You Navigate High-Risk Processing</p>
        </div>


        {/* Protection */}
        <div className='flex flex-col gap-4 py-6 md:py-0 px-4 md:px-4 lg:px-8'>
            <div className='p-1 px-2 md:px-4 flex items-center font-bold gap-2 bg-[#FF9A00]/8 text-[#F29200] w-55 md:w-56 rounded-md'>
            <ShieldCheck  className='w-4 h-4'/>
            <p className='text-sm'>Chargeback Protection</p>
            </div>
            <h1 className='text-xl lg:text-2xl font-black'>24/7 Monitoring</h1>
            <p className='text-sm font-bold'>Continuous Transaction Monitoring <br /> And Risk Management</p>
        </div>

</div>
        </div>


        <div className="bg-linear-to-b from-[#F29200]/5 to-[#F29200]/40 py-5 px-4 md:px-20 lg:px-40">
        <div className='flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0'>
            <h1 className='text-2xl md:text-2xl lg:text-4xl !font-black text-center md:text-left'>OUR <span className='text-[#F29200]'>OFFICIAL GATEWAY</span> <br />  PARTNERS</h1>
            <img src="/Home/WhyChooseUs/nmilogo.png" alt="nmilogo" className='w-30 md:w-40 h-auto max-h-15' />
        </div>
        </div>

    </div>
  )
}

export default WhyChooseUs