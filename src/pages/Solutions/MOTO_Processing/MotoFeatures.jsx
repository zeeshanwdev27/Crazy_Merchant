import React from 'react'

function MotoFeatures() {
  return (
    <div className='h-full min-h-[66vh]'>

        <div className='py-10 lg:py-20 px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col lg:flex-row gap-10 lg:gap-20'>

            <div className='flex flex-col gap-5 w-full max-w-3xl justify-center'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-normal lg:leading-13'>Why Choose <span className='text-[#F29200]'>Crazy Merchant for</span> MOTO Processing?</h1>
                <p className='text-sm sm:text-md'>
                    Online businesses face unique challenges in the payment processing world. As fraud becomes more sophisticated, many traditional banks and payment processors are looking for enhanced security measures for online transactions. Crazy Merchant provides 3D secure payment gateways and payment processing solutions for online merchants around the world. Protect every online payment with the 3-D secure authentication process. Crazy Merchants also offers a full suite of payment processing solutions so that you can protect every online transaction, whether customers are on their desktops or mobile devices. We will tailor the payment process to the needs of your business. Accept electronic payments with full confidence when you choose Crazy Merchant!
                </p>
                 <div className='py-0.5 bg-[#F29200]'></div>

                 <h3 className='text-2xl sm:text-3xl font-bold text-black'>How Does a <span className='text-[#F29200]'>MOTO Merchant Account</span> Benefit Your Business?</h3>
                 <p className='text-sm sm:text-md'>
                    Our MOTO processing solutions help you accept payments securely, manage customer information efficiently, and protect against fraud. With features like virtual terminals, recurring billing options, and detailed reporting tools, you can streamline your operations and focus on growing your business.
                </p>


            </div>

            <img src="MotoProcessing/motoprocessing_img1.jpg" alt="motoprocessing_img" className='w-full max-w-md sm:max-w-lg lg:max-w-2xl lg:w-150 h-auto lg:h-130 object-cover mx-auto rounded-4xl shadow-2xl' />


        </div>
      
    </div>
  )
}

export default MotoFeatures   