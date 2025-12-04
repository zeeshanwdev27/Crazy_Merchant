import React from 'react'

function WhyChooseCM() {
  return (
    <div className='h-full min-h-[66vh]'>

        <div className='py-10 lg:py-20 px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col lg:flex-row gap-10 lg:gap-20'>

            <div className='flex flex-col gap-5 w-full max-w-2xl'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-normal lg:leading-13'>Why Choose <span className='text-[#F29200]'>Crazy Merchants for</span> Your Travel Payment Processing?</h1>
                <p className='text-sm sm:text-md'>
                    Crazy Merchants has years of experience working with merchants in travel and other high-risk industries. Along the way, we’ve partnered with over 20 financial institutions. When you choose us for payment processing and merchant accounts, we can find the perfect financial partner for you. If you run a business in the travel industry, let us help you set up high-risk merchant accounts and other merchant services.
                </p>
                 <div className='py-0.5 bg-[#F29200]'></div>

                 <h3 className='text-2xl sm:text-3xl font-bold text-black'><span className='text-[#F29200]'>Travel</span> Business Solutions</h3>

                <p className='text-sm sm:text-md'>
                    At Crazy Merchants, we specialize in providing merchant accounts tailored to the specific needs of the travel industry, ensuring you can process payments securely and efficiently.
                </p>


            </div>

            <img src="Travel/travel_img1.jpg" alt="travel_img" className='w-full max-w-md sm:max-w-lg lg:max-w-2xl lg:w-150 h-auto mx-auto rounded-4xl shadow-2xl' />


        </div>
      
    </div>
  )
}

export default WhyChooseCM   