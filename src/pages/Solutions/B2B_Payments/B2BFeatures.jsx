import React from 'react'

function B2BFeatures() {
  return (
    <div className='h-full min-h-[66vh]'>

        <div className='py-10 lg:py-20 px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col lg:flex-row gap-10 lg:gap-20'>

            <div className='flex flex-col gap-5 w-full max-w-3xl justify-center'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-normal lg:leading-13'>Accept Payments <span className='text-[#F29200]'>With B2B Merchant</span> Services</h1>
                <p className='text-sm sm:text-md'>
                    Discover tailored payment processing solutions designed specifically for B2B businesses. Navigate the complexities of high-risk electronic payment processing with Crazy Merchant.
                </p>
                 <div className='py-0.5 bg-[#F29200]'></div>

                 <h3 className='text-2xl sm:text-3xl font-bold text-black'>Why Choose <span className='text-[#F29200]'>Crazy Merchant for</span> Your B2B Payment Processing?</h3>
                 <p className='text-sm sm:text-md'>
                    B2B transactions often involve larger sums and more complex payment structures than B2C payments. That’s why commercial credit card transactions require payment processors who can handle this transaction data. Our solutions are specifically designed to handle these intricacies, providing you with a reliable and efficient payment processing system. We’ll get you set up with credit card processing, a merchant account, and a secure payment gateway.
                </p>

                <div className='py-0.5 bg-[#F29200]'></div>

                <h3 className='text-2xl sm:text-3xl font-bold text-black'>Tailored <span className='text-[#F29200]'>B2B Payment</span> Solutions</h3>
                 <p className='text-sm sm:text-md'>
                    At Crazy Merchant, we understand that every B2B business is unique. That’s why we offer customizable payment solutions that can be adapted to your specific industry needs and business model. Process payments and get advanced fraud protection with Crazy Merchant!
                </p>


            </div>

            <img src="/B2BPayments/b2bpayments_img1.jpg" alt="b2bpayments_img" className='w-full max-w-md sm:max-w-lg lg:max-w-2xl lg:w-150 h-auto lg:h-130 object-cover mx-auto rounded-4xl shadow-2xl' />


        </div>
      
    </div>
  )
}

export default B2BFeatures   