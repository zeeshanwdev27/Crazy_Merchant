import React from 'react'
import { DollarSign, TrendingUp, Layers, RefreshCw   } from 'lucide-react';

function ResturantHighRisk() {
  return (
    <div className='h-full min-h-[66vh]'>

        <div className='py-10 lg:py-20 px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col lg:flex-row gap-10 lg:gap-20'>

            <div className='flex flex-col gap-5 w-full max-w-2xl'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-normal lg:leading-13'>Why Is a Restaurant <span className='text-[#F29200]'>Merchant Accounts</span> Considered High-Risk?</h1>
                <p className='text-sm sm:text-md'>
                    The restaurant industry often falls into the high-risk category, which makes it challenging to access stable and reliable payment solutions. Traditional banks and standard processors may hesitate to support restaurants due to factors such as high transaction volumes, frequent chargebacks, peak-hour processing spikes, and diverse payment methods. Issues like inconsistent cash flow, online ordering disputes, and food delivery chargebacks also raise the risk level.
                </p>
                 <div className='py-0.5 bg-[#F29200]'></div>

                 <h3 className='text-2xl sm:text-3xl font-bold text-black'><span className='text-[#F29200]'>Resturant</span> Business Solutions</h3>

                <p className='text-sm sm:text-md'>
                    At Crazy Merchants, we provide merchant accounts specifically tailored for restaurant businesses, ensuring smooth and reliable payment processing, reduced operational risk, and secure transactions even during high-volume rush hours. Our solutions are designed to handle diverse payment methods, online orders, dine-in transactions, delivery payments, and peak-time processing spikes—giving restaurants the stability, speed, and flexibility they need to grow and succeed.
                </p>


            </div>

            <img src="Resturant/resturant_img.jpg" alt="resturant_img" className='w-full max-w-md sm:max-w-lg lg:w-150 h-auto mx-auto rounded-4xl shadow-2xl' />


        </div>
      
    </div>
  )
}

export default ResturantHighRisk   