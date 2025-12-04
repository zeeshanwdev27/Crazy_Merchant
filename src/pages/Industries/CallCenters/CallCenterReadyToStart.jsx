import React from 'react'

function CallCenterReadyToStart() {
  return (
    <div className="bg-[url('/CallCenters/ReadyToStart/Section.png')] bg-cover bg-no-repeat bg-center overflow-hidden h-full sm:h-[40vh] lg:h-[55vh] py-10 lg:py-30 px-4 sm:px-5 md:px-20 lg:px-40 mx-auto">

        <div className='flex flex-col items-center gap-4 sm:gap-6 lg:gap-7 text-white text-center'>

            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold'>Ready <span className='text-[#F29200]'>To Get</span> Started?</h1>
            <p className='text-sm sm:text-base md:text-lg w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl px-2 sm:px-4 md:px-0'>Low or high risk — we'll approve your call center merchant account. Join hundreds of call centers that trust us with their payment processing needs.</p>
            <button className='text-[#F29200] bg-[#FFFFFF]/5 border-2 border-[#F29200]/40 px-4 sm:px-5 py-2 rounded-xl hover:bg-[#F29200] hover:text-white cursor-pointer text-xs sm:text-sm md:text-base transition-colors duration-300'>Open Your Merchant Account</button>
            
            <ul className="lg:mt-5 list-disc flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 pl-4 sm:pl-0 space-y-1 sm:space-y-0  text-xs sm:text-sm md:text-base font-semibold text-[#F29200] text-left sm:text-center">
              <li className="sm:list-none">No Setup Fees</li>
              <li className="sm:list-none">24-48hr Approval</li>
              <li className="sm:list-none">Dedicated Support</li>
              <li className="sm:list-none">High-Risk Approved</li>
            </ul>

        </div>
      
    </div>
  )
}

export default CallCenterReadyToStart