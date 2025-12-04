import React from 'react'

function FPTransactions() {
  return (
    <div className='h-full min-h-[66vh]'>

        <div className='py-10 lg:py-20 px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col lg:flex-row gap-10 lg:gap-20'>

            <img src="FraudPrevention/fraudprevention_img2.avif" alt="fraudprevention_img" className='hidden lg:flex w-full max-w-md sm:max-w-lg lg:max-w-2xl lg:w-150 h-auto lg:h-150 object-cover mx-auto rounded-4xl shadow-2xl' />


            <div className='flex flex-col gap-5 w-full max-w-3xl justify-center'>

                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-normal lg:leading-13'>What are  <span className='text-[#F29200]'>Fraudulent Transactions?</span> </h1>
                <p className='text-sm sm:text-md'>
                    Fraudulent transactions are often called e-commerce fraud. eCommerce fraud is an umbrella term that refers to any type of payment or credit card fraud used in online transactions. These include
                </p>

                <p className='text-sm sm:text-md'>
                    Credit and debit card fraud is one of the most common forms of payment fraud, typically appearing as suspicious transactions where someone uses another person’s card without authorization. These fraudulent payments must be reversed by the merchant and the card issuer. Identity theft is another major threat, occurring when someone steals a user’s personal information to make payments or even open new accounts, often leading to account takeover fraud. Chargeback fraud happens when a customer disputes a legitimate purchase they actually made, attempting to exploit the system to receive products or services for free. Another type, merchant fraud, involves a fraudulent merchant impersonating a real business, tricking customers into making payments for what appear to be legitimate products, while the scammer collects the money and sensitive card details.
                </p>

                <p className='text-sm sm:text-md'>
                    Fraudulent activity can be costly to your business as a merchant. Implementing effective fraud protection is key to both detecting and preventing fraud. Get accurate fraud detection when you choose Crazy Merchants.
                </p>

            </div>

           <img src="FraudPrevention/fraudprevention_img2.avif" alt="fraudprevention_img" className='lg:hidden flex w-full max-w-md sm:max-w-lg lg:max-w-2xl lg:w-150 h-auto lg:h-150 object-cover mx-auto rounded-4xl shadow-2xl' />




        </div>
      
    </div>
  )
}

export default FPTransactions   