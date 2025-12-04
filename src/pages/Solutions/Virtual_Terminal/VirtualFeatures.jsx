import React from 'react'

function VirtualFeatures() {
  return (
    <div className='h-full min-h-[66vh]'>

        <div className='py-10 lg:py-20 px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col lg:flex-row gap-10 lg:gap-20'>

            <div className='flex flex-col gap-5 w-full max-w-3xl justify-center'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-normal lg:leading-13'>Why Choose <span className='text-[#F29200]'>Crazy Merchant for</span> Your Virtual Terminal Needs?</h1>
                <p className='text-sm sm:text-md'>
                    In today’s diverse business landscape, the ability to process payments remotely or without a physical card present is crucial. At Crazy Merchant, we offer robust virtual terminal solutions designed to provide flexibility, security, and efficiency for businesses of all types and sizes. Get started with secure payment processing today!
                </p>

                <div className='py-0.5 bg-[#F29200]'></div>

                 <h3 className='text-2xl sm:text-3xl font-bold text-black'>How Do Our <span className='text-[#F29200]'>Virtual Terminal Solutions</span> Benefit Your Business?</h3>
                 <p className='text-sm sm:text-md'>
                    Our virtual terminal services enable you to process credit card payments from anywhere, at any time, using just a computer or mobile device with internet access. Whether you’re processing phone orders, managing recurring billing, or need a flexible solution for remote work, our virtual terminal solution provides the tools you need to streamline your payment operations and grow your business.
                </p>





            </div>

            <img src="/VirutalTerminal/virtualterminal_img1.jpg" alt="virtualterminal_img" className='w-full max-w-md sm:max-w-lg lg:max-w-2xl lg:w-150 h-auto lg:h-130 object-cover mx-auto rounded-4xl shadow-2xl' />


        </div>
      
    </div>
  )
}

export default VirtualFeatures   