import React from 'react'

function MerchantFeatures() {
  return (
    <div className='h-full min-h-[66vh]'>

        <div className='py-10 lg:py-20 px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col lg:flex-row gap-10 lg:gap-20'>

            <div className='flex flex-col gap-5 w-full max-w-3xl justify-center'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-normal lg:leading-13'>Complete  <span className='text-[#F29200]'>Merchant Services</span> </h1>
                <p className='text-sm sm:text-md'>
                    Crazy Merchant delivers comprehensive merchant services designed for businesses of all sizes. With over two decades of experience, we provide complete payment processing solutions that help merchants grow. Our platform serves over 50,000 merchants across all industries.
                </p>
                 <div className='py-0.5 bg-[#F29200]'></div>

                 <h3 className='text-2xl sm:text-3xl font-bold text-black'>Why Choose <span className='text-[#F29200]'>Crazy Merchant for</span> Merchant Services?</h3>
                 <p className='text-sm sm:text-md'>As a leading merchant services provider, Crazy Merchant combines industry expertise with reliable solutions. Our merchant services include dedicated accounts, comprehensive tools, and complete support. We ensure your business has everything needed to process payments and manage transactions effectively.</p>


            </div>

            <img src="MerchantServices/merchantservices_img1.jpg" alt="merchantservices_img" className='w-full max-w-md sm:max-w-lg lg:max-w-2xl lg:w-150 h-auto object-cover mx-auto rounded-4xl shadow-2xl' />


        </div>
      
    </div>
  )
}

export default MerchantFeatures   