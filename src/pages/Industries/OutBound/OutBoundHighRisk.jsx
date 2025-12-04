import React from 'react'
import { DollarSign, TrendingUp, Layers, RefreshCw   } from 'lucide-react';

function OutBoundHighRisk() {
  return (
    <div className='h-full min-h-[66vh]'>

        <div className='py-10 lg:py-20 px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col lg:flex-row gap-10 lg:gap-20'>

            <div className='flex flex-col gap-5 w-full max-w-2xl'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-normal lg:leading-13'>Why Is an Outbound Product Selling <span className='text-[#F29200]'>Merchant Accounts</span> Considered High-Risk?</h1>
                <p className='text-sm sm:text-md'>
                    Outbound product selling often falls into the high-risk category, making it challenging to access stable and reliable payment solutions. Traditional banks and payment processors typically avoid supporting outbound sales, recurring billing, and multiple campaign types due to higher chargeback and fraud risks. Crazy Merchants provides tailored merchant services for outbound product sellers, offering secure payment processing, higher approval rates, and systems built to handle complex, high-volume sales operations.
                </p>
                 <div className='py-0.5 bg-[#F29200]'></div>

                 <h3 className='text-2xl sm:text-3xl font-bold text-black'>Outbound <span className='text-[#F29200]'>Product Selling</span> Business Solutions</h3>

                <p className='text-sm sm:text-md'>
                    At Crazy Merchants, we provide merchant accounts specifically tailored for outbound product selling businesses, ensuring smooth and reliable payment processing, reduced operational risk, and secure transactions for high-volume sales. Our solutions are designed to handle complex billing scenarios, recurring payments, and multiple sales campaigns, giving outbound sellers the stability and flexibility they need to grow and succeed.
                </p>


            </div>

            <img src="Outbound/whychooseus.jpg" alt="whychooseus_img" className='w-full max-w-md sm:max-w-lg lg:w-150 h-auto mx-auto rounded-4xl shadow-2xl' />


        </div>
      
    </div>
  )
}

export default OutBoundHighRisk   