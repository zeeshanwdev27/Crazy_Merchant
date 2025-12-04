import React from 'react'
import { DollarSign, TrendingUp, Layers, RefreshCw   } from 'lucide-react';

function CallCenterHighRisk() {
  return (
    <div className='h-full min-h-[66vh]'>

        <div className='py-10 lg:py-20 px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col lg:flex-row gap-10 lg:gap-20'>

            <div className='flex flex-col gap-5 w-full max-w-2xl'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-normal lg:leading-13'>Why Choose  <span className='text-[#F29200]'>Crazy Merchants for Call Center</span> Payment Processing</h1>
                <p className='text-sm sm:text-md'>The call center industry often falls into the high-risk category, making it difficult to access stable and trustworthy payment solutions. Banks and standard payment processors usually avoid supporting outbound sales, recurring billing, and multiple campaign types. Crazy Merchants offers tailored merchant services for call centers, giving you secure payment processing, higher approval rates, and a system built to support complex call center operations.</p>
                 <div className='py-0.5 bg-[#F29200]'></div>

                 <h3 className='text-2xl sm:text-3xl font-bold text-black'>Call <span className='text-[#F29200]'>Centers Business</span> Solutions</h3>


                 {/* Flexible Billing Services */}
                 <div className='flex gap-4 sm:gap-5'>
                   <div className="bg-[#F29200]/20 p-2 rounded-xl w-12 sm:w-14 flex justify-center items-center group-hover:bg-white">
                        <DollarSign className='w-6 h-6 sm:w-7 sm:h-7 text-[#F29200]'/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-[#F29200] text-sm sm:text-md font-bold'>Flexible Billing Services</h3>
                        <p className='text-xs sm:text-[13px]'>Customized billing solutions that fit your call center's unique payment structure</p>
                    </div>
                 </div>

                 {/* Recurring Payments */}
                <div className='flex gap-4 sm:gap-5'>
                   <div className="bg-[#F29200]/20 p-2 rounded-xl w-12 sm:w-14 flex justify-center items-center group-hover:bg-white">
                        <RefreshCw  className='w-6 h-6 sm:w-7 sm:h-7 text-[#F29200]'/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-[#F29200] text-sm sm:text-md font-bold'>Recurring Payments</h3>
                        <p className='text-xs sm:text-[13px]'>Automated subscription and recurring billing to maintain steady revenue streams</p>
                    </div>
                 </div>

                {/* Multiple Campaigns */}
                <div className='flex gap-4 sm:gap-5'>
                   <div className="bg-[#F29200]/20 p-2 rounded-xl w-12 sm:w-14 flex justify-center items-center group-hover:bg-white">
                        <Layers  className='w-6 h-6 sm:w-7 sm:h-7 text-[#F29200]'/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-[#F29200] text-sm sm:text-md font-bold'>Multiple Campaigns</h3>
                        <p className='text-xs sm:text-[13px]'>Manage multiple marketing campaigns with separate tracking and reporting</p>
                    </div>
                 </div>

                {/* Scalability */}
                <div className='flex gap-4 sm:gap-5'>
                   <div className="bg-[#F29200]/20 p-2 rounded-xl w-12 sm:w-14 flex justify-center items-center group-hover:bg-white">
                        <TrendingUp  className='w-6 h-6 sm:w-7 sm:h-7 text-[#F29200]'/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-[#F29200] text-sm sm:text-md font-bold'>Scalability</h3>
                        <p className='text-xs sm:text-[13px]'>Grow your business without limitations on transaction volume or processing capacity</p>
                    </div>
                 </div>

            </div>

            <img src="CallCenters/HighRisks/callcenter_img.png" alt="callcenter_img" className='w-full max-w-md sm:max-w-lg lg:w-150 h-auto mx-auto' />


        </div>
      
    </div>
  )
}

export default CallCenterHighRisk   