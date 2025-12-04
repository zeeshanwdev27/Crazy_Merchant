import React from 'react'

function WhatVirtualTerminal() {
  return (
    <div className='h-full min-h-[66vh]'>

        <div className='py-10 lg:py-20 px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col lg:flex-row gap-10 lg:gap-20'>

            <img src="/VirutalTerminal/virtualterminal_img2.jpg" alt="virtualterminal_img" className='hidden lg:flex w-full max-w-md sm:max-w-lg lg:max-w-2xl lg:w-150 h-auto lg:h-150 object-cover mx-auto rounded-4xl shadow-2xl' />


            <div className='flex flex-col gap-5 w-full max-w-3xl justify-center'>

                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-normal lg:leading-13'>What is a <span className='text-[#F29200]'>virtual terminal?</span></h1>
                <p className='text-sm sm:text-md'>
                    A virtual terminal allows you to accept credit and debit cards no matter where you are. It is a web-based app that allows you to turn any device with an internet connection: A phone, tablet, laptop, etc. into a POS system that can accept payments. You will also need to set up a merchant account and secure payment gateway to connect to the terminal. A virtual terminal also does more than allow you to accept customer payments. Look over your transaction history or issue refunds as well.
                </p>
                
                 <p className='text-sm sm:text-md'>
                    Crazy Merchant offers a virtual terminal solution that includes a merchant account and other necessary payment processing services. Begin accepting credit and debit card payments from your computer or phone quickly.
                </p>


            </div>

           <img src="/VirutalTerminal/virtualterminal_img2.jpg" alt="virtualterminal_img" className='lg:hidden flex w-full max-w-md sm:max-w-lg lg:max-w-2xl lg:w-150 h-auto lg:h-150 object-cover mx-auto rounded-4xl shadow-2xl' />




        </div>
      
    </div>
  )
}

export default WhatVirtualTerminal   