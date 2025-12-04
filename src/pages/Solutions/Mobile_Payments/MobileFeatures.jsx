import React from 'react'

function MobileFeatures() {
  return (
    <div className='h-full min-h-[66vh]'>

        <div className='py-10 lg:py-20 px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col lg:flex-row gap-10 lg:gap-20'>

            <div className='flex flex-col gap-5 w-full max-w-3xl justify-center'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-normal lg:leading-13'>Why Choose <span className='text-[#F29200]'>Crazy Merchant for</span> Your Mobile Merchant Payment Needs?</h1>
                <p className='text-sm sm:text-md'>
                    In today’s fast-paced, mobile-first world, offering convenient and secure mobile payment options is crucial for business success. At Crazy Merchant, we provide cutting-edge mobile payment solutions that cater to the evolving needs of both businesses and consumers. From contactless payments to in-app payment integration, we’ll make it easy to begin accepting payments.
                </p>
                 <div className='py-0.5 bg-[#F29200]'></div>

                 <h3 className='text-2xl sm:text-3xl font-bold text-black'>How Do <span className='text-[#F29200]'>Our Mobile Payment Solutions</span> Benefit Your Business?</h3>
                 <p className='text-sm sm:text-md'>
                    Our mobile payment services enable you to accept credit cards anytime, anywhere, enhancing customer convenience and boosting sales. Our mobile merchant services include robust security measures, seamless integration options, and support for various mobile payment technologies. We’ll help you stay ahead in the digital payment landscape
                </p>


            </div>

            <img src="/MobilePayment/mobilepayment_img1.jpg" alt="mobilepayment_img" className='w-full max-w-md sm:max-w-lg lg:max-w-2xl lg:w-150 h-auto lg:h-130 object-cover mx-auto rounded-4xl shadow-2xl' />


        </div>
      
    </div>
  )
}

export default MobileFeatures   