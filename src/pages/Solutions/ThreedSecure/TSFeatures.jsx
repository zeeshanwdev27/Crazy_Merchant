import React from 'react'

function TSFeatures() {
  return (
    <div className='h-full min-h-[66vh]'>

        <div className='py-10 lg:py-20 px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col lg:flex-row gap-10 lg:gap-20'>

            <div className='flex flex-col gap-5 w-full max-w-3xl justify-center'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-normal lg:leading-13'>Why Choose  <span className='text-[#F29200]'>Crazy Merchants for</span> Your 3D Secure Payment Processing? </h1>
                <p className='text-sm sm:text-md'>
                    Online businesses face unique challenges in the payment processing world. As fraud becomes more sophisticated, many traditional banks and payment processors are looking for enhanced security measures for online transactions. Crazy Merchants provides 3D secure payment gateways and payment processing solutions for online merchants around the world. Protect every online payment with the 3-D secure authentication process. Crazy Merchants also offers a full suite of payment processing solutions so that you can protect every online transaction, whether customers are on their desktops or mobile devices. We will tailor the payment process to the needs of your business. Accept electronic payments with full confidence when you choose Crazy Merchant!
                </p>
                 <div className='py-0.5 bg-[#F29200]'></div>

                 <h3 className='text-2xl sm:text-3xl font-bold text-black'>How Does <span className='text-[#F29200]'>3D Secure</span> Benefit Your Business?</h3>
                 <p className='text-sm sm:text-md'>
                    3D Secure adds an extra layer of security to online transactions, protecting payment card details and reducing the risk of payment fraud. At Crazy Merchant, we specialize in providing merchant accounts with 3D Secure integration, ensuring you can process online payments securely and efficiently while minimizing chargebacks. Choose Crazy Merchant to get a secure and successful payment system set up for your business.
                </p>


            </div>

            <img src="ThreedSecure/threedsecure_img1.jpg" alt="threedsecure_img" className='w-full max-w-md sm:max-w-lg lg:max-w-2xl lg:w-150 h-auto object-cover mx-auto rounded-4xl shadow-2xl' />


        </div>
      
    </div>
  )
}

export default TSFeatures   