import React from 'react'

function ACHDifference() {
  return (
    <div className='h-full min-h-[66vh]'>

        <div className='py-10 lg:py-20 px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col lg:flex-row gap-10 lg:gap-20'>

            <img src="ACH/ach_img1.avif" alt="ach_img1" className='w-full max-w-md sm:max-w-lg lg:max-w-2xl lg:w-150 h-auto object-cover mx-auto rounded-4xl shadow-2xl' />


            <div className='flex flex-col gap-5 w-full max-w-3xl justify-center'>

                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-normal lg:leading-13'>What is the Difference  <span className='text-[#F29200]'>Between ACH Transactions</span> and eChecks? </h1>
                <p className='text-sm sm:text-md'>
                    ACH payment processing companies allow merchants to use the ACH network between U.S. banks. ACH transactions are simply a transfer from the customer’s bank account to the merchant’s. On the other hand, an e-check is a payment method that can be used online. Instead of a transfer between a savings or checking account, a check is issued and sent to the merchant in the amount of the transaction. They then process the check to receive payment.
                </p>

            </div>



        </div>
      
    </div>
  )
}

export default ACHDifference   