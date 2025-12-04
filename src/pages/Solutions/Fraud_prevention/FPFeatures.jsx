import React from 'react'

function FPFeatures() {
  return (
    <div className='h-full min-h-[66vh]'>

        <div className='py-10 lg:py-20 px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col lg:flex-row gap-10 lg:gap-20'>

            <div className='flex flex-col gap-5 w-full max-w-3xl justify-center'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-normal lg:leading-13'>How Does  <span className='text-[#F29200]'>Advanced Fraud Prevention</span> Benefit Your Business? </h1>
                <p className='text-sm sm:text-md'>
                    Our fraud detection and prevention services help you minimize financial losses, protect your reputation, and maintain customer trust. By employing a multi-layered approach that combines machine learning, behavioral analytics, and real-time monitoring, we provide robust protection against a wide range of fraud types, allowing you to focus on growing your business with confidence.
                </p>
                 <div className='py-0.5 bg-[#F29200]'></div>

                 <h3 className='text-2xl sm:text-3xl font-bold text-black'>Why Choose <span className='text-[#F29200]'>Crazy Merchants for</span> Your Fraud Prevention Needs?</h3>
                 <p className='text-sm sm:text-md'>
                    In today’s digital landscape, fraud poses a significant threat to businesses of all sizes. At Crazy Merchants, we offer cutting-edge fraud prevention solutions that leverage the latest technologies to protect your business and customers from sophisticated fraud attempts. Flag suspicious transactions, block fraudulent transactions, and implement a strong fraud strategy when you work with Crazy Merchants.
                </p>


            </div>

            <img src="FraudPrevention/fraudprevention_img1.avif" alt="fraudprevention_img" className='w-full max-w-md sm:max-w-lg lg:max-w-2xl lg:w-150 h-auto lg:h-130 object-cover mx-auto rounded-4xl shadow-2xl' />


        </div>
      
    </div>
  )
}

export default FPFeatures   