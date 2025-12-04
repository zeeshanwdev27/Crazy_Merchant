import React from 'react'

function ACHFeatures() {
  return (
    <div className='h-full min-h-[66vh]'>

        <div className='py-10 lg:py-20 px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col lg:flex-row gap-10 lg:gap-20'>

            <div className='flex flex-col gap-5 w-full max-w-3xl justify-center'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-normal lg:leading-13'>Why Choose  <span className='text-[#F29200]'>Crazy Merchants</span> to Accept ACH Payments? </h1>
                <p className='text-sm sm:text-md'>
                    In today’s fast-paced business environment, efficient payment processing is crucial. ACH (Automated Clearing House) payments offer a cost-effective and reliable alternative to traditional payment methods. At Crazy Merchant, we have years of experience as an ACH payment processing service. We specialize in providing seamless ACH payment solutions tailored to your business needs.
                </p>
                 <div className='py-0.5 bg-[#F29200]'></div>

                 <h3 className='text-2xl sm:text-3xl font-bold text-black'>How Does <span className='text-[#F29200]'>ACH Payment Processing</span> Benefit Your Business?</h3>
                 <p className='text-sm sm:text-md'>
                    ACH payment processing is an alternative payment method to traditional credit card transactions. An ACH payment processor allows for direct transfers from the customer’s bank account to yours, reducing transaction costs and improving cash flow. With Crazy Merchant, you can streamline your payment collection process, minimize manual errors, and provide a convenient payment option for your customers. Our ACH solutions are designed to integrate smoothly with your existing systems, ensuring a hassle-free transition to more efficient payment processing. Set up ACH payment processing, a merchant account, and a secure payment gateway with Crazy Merchants.
                </p>


            </div>

            <img src="ACH/ach_img1.avif" alt="ach_img1" className='w-full max-w-md sm:max-w-lg lg:max-w-2xl lg:w-150 h-auto object-cover mx-auto rounded-4xl shadow-2xl' />


        </div>
      
    </div>
  )
}

export default ACHFeatures   