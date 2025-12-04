import React from 'react'

function PGFeatures() {
  return (
    <div className='h-full min-h-[66vh]'>

        <div className='py-10 lg:py-20 px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col lg:flex-row gap-10 lg:gap-20'>

            <div className='flex flex-col gap-5 w-full max-w-3xl justify-center'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-normal lg:leading-13'>Why Choose  <span className='text-[#F29200]'>Crazy Merchants for Your</span> High-Risk Payment Gateway Needs in the US and Canada? </h1>
                <p className='text-sm sm:text-md'>
                    High-risk industries in the United States and Canada face unique challenges in payment processing. At Crazy Merchants, we specialize in providing robust, secure, and reliable payment gateway solutions tailored to the specific needs of high-risk merchants in these markets.
                </p>
                 <div className='py-0.5 bg-[#F29200]'></div>

                 <h3 className='text-2xl sm:text-3xl font-bold text-black'>How Does <span className='text-[#F29200]'>Our High-Risk Payment Gateway</span> Benefit Your North American Business?</h3>
                 <p className='text-sm sm:text-md'>
                    Our high-risk payment gateway offers enhanced security measures, customizable solutions, and comprehensive processing capabilities for the US and Canadian markets. We help you navigate the complexities of high-risk payment processing in North America, ensuring seamless transactions, reducing fraud, and maximizing approval rates while maintaining compliance with US and Canadian regulations.
                </p>


            </div>

            <img src="PaymentGateway/paymentgateway_img1.jpg" alt="paymentgateway_img" className='w-full max-w-md sm:max-w-lg lg:max-w-2xl lg:w-150 h-auto lg:h-130 object-cover mx-auto rounded-4xl shadow-2xl' />


        </div>
      
    </div>
  )
}

export default PGFeatures   