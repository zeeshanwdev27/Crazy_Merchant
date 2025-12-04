import React from 'react'

function CBWhyChargeBack() {
  return (
    <div className='h-full min-h-[66vh]'>

        <div className='py-10 lg:py-20 px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col lg:flex-row gap-10 lg:gap-20'>

            <img src="ChargeBack/chargeback_img1.jpg" alt="chargeback_img1" className='w-full max-w-md sm:max-w-lg lg:max-w-2xl lg:w-150 h-auto lg:h-150 object-cover mx-auto rounded-4xl shadow-2xl' />


            <div className='flex flex-col gap-5 w-full max-w-3xl justify-center'>

                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-normal lg:leading-13'>What is a  <span className='text-[#F29200]'>Chargeback?</span> </h1>
                <p className='text-sm sm:text-md'>
                    Chargebacks are in place to protect customers against fraudulent transactions when using a credit card as the payment method. A chargeback occurs when a merchant experiences a customer dispute over a previous purchase from the customer’s credit card company. A customer must first contact the seller to try to resolve the issue before reaching out to the credit card company. Once the chargeback has been initiated, the money will be sent back to the customer’s bank account from the business’s merchant account. Because this impacts the financial stability of the merchant and their payment processor, chargebacks can impact the reputation of the merchant. Too many chargebacks don’t only impact your bank account. They may also lead to the designation of high-risk merchants. That’s why it’s important to choose a merchant service provider that offers chargeback and fraud prevention.
                </p>

                <p className='text-sm sm:text-md'>
                    Once the chargeback has been initiated, the money will be sent back to the customer’s bank account from the business’s merchant account. Because this impacts the financial stability of the merchant and their payment processor, chargebacks can impact the reputation of the merchant. Too many chargebacks don’t only impact your bank account. They may also lead to the designation of high-risk merchants. That’s why it’s important to choose a merchant service provider that offers chargeback and fraud prevention.
                </p>

            </div>



        </div>
      
    </div>
  )
}

export default CBWhyChargeBack   