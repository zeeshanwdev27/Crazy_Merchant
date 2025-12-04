import React from 'react'

function DigitalBookHighRisk() {
  return (
    <div className='h-full min-h-[66vh]'>

        <div className='py-10 lg:py-20 px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col lg:flex-row gap-10 lg:gap-20'>

            <div className='flex flex-col gap-5 w-full max-w-2xl'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-normal lg:leading-13'>Why Is a <span className='text-[#F29200]'>Digital Book</span> Merchant Account Considered High-Risk?</h1>
                <p className='text-sm sm:text-md'>
                    The digital book industry is often considered high-risk, making it challenging to access reliable and stable payment solutions. Banks and standard processors typically avoid supporting subscription sales, recurring billing, and large-volume transactions. Crazy Merchants offers specialized merchant services for digital book businesses, providing secure payment processing, higher approval rates, and a system designed to handle the unique demands of digital content sales.
                </p>
                 <div className='py-0.5 bg-[#F29200]'></div>

                 <h3 className='text-2xl sm:text-3xl font-bold text-black'><span className='text-[#F29200]'>Digital Books</span> Business Solutions</h3>

                <p className='text-sm sm:text-md'>
                    At Crazy Merchants, we provide merchant accounts specifically tailored for digital book businesses, ensuring smooth and reliable payment processing, reduced operational risk, and secure transactions for high-volume sales. Our solutions are designed to handle complex billing scenarios, recurring subscriptions, and multiple sales channels, giving digital publishers the stability and flexibility they need to grow and succeed.
                </p>


            </div>

            <img src="Ebooks/ebooks.jpg" alt="ebooks_img" className='w-full max-w-md sm:max-w-lg lg:w-150 h-auto mx-auto rounded-4xl shadow-2xl' />


        </div>
      
    </div>
  )
}

export default DigitalBookHighRisk   