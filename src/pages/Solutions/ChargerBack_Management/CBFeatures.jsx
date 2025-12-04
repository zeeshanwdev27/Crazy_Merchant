import React from 'react'

function CBFeatures() {
  return (
    <div className='h-full min-h-[66vh]'>

        <div className='py-10 lg:py-20 px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col lg:flex-row gap-10 lg:gap-20'>

            <div className='flex flex-col gap-5 w-full max-w-3xl justify-center'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-normal lg:leading-13'>Why Choose  <span className='text-[#F29200]'>Crazy Merchants for</span> Your Chargeback Management? </h1>
                <p className='text-sm sm:text-md'>
                    In the digital commerce landscape, chargebacks pose a significant threat to your business’s profitability and reputation. Companies with high chargeback rates are considered high-risk and need a high-risk merchant account and payment processing. At Crazy Merchant, we offer comprehensive chargeback management solutions designed to protect your revenue and maintain healthy merchant accounts.
                </p>
                 <div className='py-0.5 bg-[#F29200]'></div>

                 <h3 className='text-2xl sm:text-3xl font-bold text-black'>How Does <span className='text-[#F29200]'>Effective Chargeback</span> Management Benefit Your Business?</h3>
                 <p className='text-sm sm:text-md'>
                    Many companies choose to go with a No Chargeback Payment Gateway to prevent chargebacks. However, that may not be the best option. Our chargeback management services and a high-risk payment gateway help you prevent fraud, reduce chargebacks, and optimize your dispute resolution process. Our chargeback system leverages advanced technology and industry expertise, enabling you to minimize revenue loss, preserve your merchant account status, and focus on growing your business rather than fighting chargebacks.
                </p>


            </div>

            <img src="ChargeBack/chargeback_img1.jpg" alt="chargeback_img" className='w-full max-w-md sm:max-w-lg lg:max-w-2xl lg:w-150 h-auto lg:h-130 object-cover mx-auto rounded-4xl shadow-2xl' />


        </div>
      
    </div>
  )
}

export default CBFeatures   