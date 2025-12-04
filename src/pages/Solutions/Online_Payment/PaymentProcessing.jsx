import React from 'react'

function PaymentProcessing() {
  return (
    <div className='h-full min-h-[66vh]'>

        <div className='py-10 lg:py-20 px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col lg:flex-row gap-10 lg:gap-20'>

            <img src="/OnlinePayments/onlinepayment_img2.jpg" alt="onlinepayment_img" className='hidden lg:flex w-full max-w-md sm:max-w-lg lg:max-w-2xl lg:w-150 h-auto lg:h-150 object-cover mx-auto rounded-4xl shadow-2xl' />


            <div className='flex flex-col gap-5 w-full max-w-3xl justify-center'>

                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-normal lg:leading-13'>How Does <span className='text-[#F29200]'>E-commerce</span> Payment Processing Work?</h1>
                <p className='text-sm sm:text-md'>
                    This process begins when a customer finds an item they want to purchase, adds it to their cart, chooses from accepted payment methods, makes the payment, and waits for the item to arrive in the mail. For the e-commerce merchant, a lot is going on behind the scenes. The e-commerce merchant needs a merchant account, payment gateway, and other payment processing solutions such as a shopping cart integration. These all work together to allow the merchant to accept payments for online products. e-commerce payment processors typically offer solutions that include all of the following:
                </p>

                 <h3 className='text-2xl sm:text-3xl font-bold text-black'>Secure <span className='text-[#F29200]'>Payment</span> Gateways</h3>
                 <p className='text-sm sm:text-md'>
                    A key part of online payments is a secure payment gateway. The payment gateway is the middleman between the point of sale and the payment processor. It keeps the customer’s payment details safe and tells the payment processor if the transaction should be approved.
                </p>

                 <h3 className='text-2xl sm:text-3xl font-bold text-black'><span className='text-[#F29200]'>Payment</span> Processor</h3>
                 <p className='text-sm sm:text-md'>
                    The payment processor works with the payment gateway. Once the transaction is approved, the payment processor communicates with the credit card company, sending them payment details. The processor then waits for all the money to be moved from the credit card company’s bank account to the merchant account.
                </p>

                 <h3 className='text-2xl sm:text-3xl font-bold text-black'><span className='text-[#F29200]'>Merchant </span> Account</h3>
                 <p className='text-sm sm:text-md'>
                    A merchant account is simply a bank account held by the merchant. This merchant bank account is where all credit card payments are sent.
                </p>
                



            </div>

           <img src="/OnlinePayments/onlinepayment_img2.jpg" alt="onlinepayment_img" className='lg:hidden flex w-full max-w-md sm:max-w-lg lg:max-w-2xl lg:w-150 h-auto lg:h-150 object-cover mx-auto rounded-4xl shadow-2xl' />




        </div>
      
    </div>
  )
}

export default PaymentProcessing   