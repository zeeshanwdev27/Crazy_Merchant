import React from 'react'

function RecurringFeatures() {
  return (
    <div className='h-full min-h-[66vh]'>

        <div className='py-10 lg:py-20 px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col lg:flex-row gap-10 lg:gap-20'>

            <div className='flex flex-col gap-5 w-full max-w-3xl justify-center'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-normal lg:leading-13'>What is <span className='text-[#F29200]'>Recurring Payment</span> Processing?</h1>
                <p className='text-sm sm:text-md'>
                    Recurring billing or subscription payments refers to a business model where customers are charged regular payments for a service or product. They give their payment information when making the original purchase, and then are put on a specific payment schedule. This payment model has become extremely popular. If your business offers recurring payments, you’ll need to find a payment processor who is comfortable with these types of automatic payments.
                </p>

                 <p className='text-sm sm:text-md'>
                    You’ll want to look for payment processors who can manage recurring payments but have systems and software in place to streamline the process. It’s also important to find a processor that accepts multiple payment methods–such as ACH debit payments–and offers low monthly fees.
                </p>




            </div>

            <img src="/RecurringPayment/recurringpayment_img1.jpg" alt="recurringpayment_img" className='w-full max-w-md sm:max-w-lg lg:max-w-2xl lg:w-150 h-auto lg:h-130 object-cover mx-auto rounded-4xl shadow-2xl' />


        </div>
      
    </div>
  )
}

export default RecurringFeatures   