import React from 'react'

function LevelFeatures() {
  return (
    <div className='h-full min-h-[66vh]'>

        <div className='py-10 lg:py-20 px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col lg:flex-row gap-10 lg:gap-20'>

            <div className='flex flex-col gap-5 w-full max-w-3xl justify-center'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-normal lg:leading-13'>Why Choose <span className='text-[#F29200]'>Crazy Merchant for</span> Level 2 & 3 Data Processing?</h1>
                <p className='text-sm sm:text-md'>
                    In the world of B2B transactions, Level 2 & 3 data processing is crucial for optimizing costs and improving operational efficiency. At Crazy Merchant, we offer advanced solutions that streamline the capture and processing of this valuable transaction data. On top of our Level 2 data processing, we also offer credit card processing solutions with low transaction costs. Get set up with both data processing and merchant account solutions. We’ll provide a merchant account, payment gateway, and credit card processing solutions.
                </p>
                 <div className='py-0.5 bg-[#F29200]'></div>

                 <h3 className='text-2xl sm:text-3xl font-bold text-black'>How Does <span className='text-[#F29200]'>Level 2 & 3 Data Processing</span> Benefit Your Business?</h3>
                 <p className='text-sm sm:text-md'>
                    Our Level 2 & 3 data processing services help you qualify for lower interchange rates, reduce processing fees, and gain deeper insights into your business transactions. By automating the collection and submission of detailed transaction data, we enable you to maximize savings, improve reconciliation processes, and enhance overall financial management.
                </p>


            </div>

            <img src="/LevelProcessing/levelprocessing_img1.jpg" alt="levelprocessing_img" className='w-full max-w-md sm:max-w-lg lg:max-w-2xl lg:w-150 h-auto lg:h-130 object-cover mx-auto rounded-4xl shadow-2xl' />


        </div>
      
    </div>
  )
}

export default LevelFeatures   