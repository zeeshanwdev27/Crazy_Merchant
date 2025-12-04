import React from 'react'

function GroceriesHighRisk() {
  return (
    <div className='h-full min-h-[66vh]'>

        <div className='py-10 lg:py-20 px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col lg:flex-row gap-10 lg:gap-20'>

            <div className='flex flex-col gap-5 w-full max-w-2xl'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-normal lg:leading-13'>Why Is a <span className='text-[#F29200]'>Grocery Merchant Account</span> Considered High-Risk?</h1>
                <p className='text-sm sm:text-md'>
                    The grocery retail industry is often considered high-risk, making it challenging to access stable and reliable payment solutions. Banks and standard processors typically avoid supporting high-volume transactions, recurring orders, and delivery or subscription-based services. Crazy Merchants offers specialized merchant services for grocery stores, providing secure payment processing, higher approval rates, and a system designed to handle the unique demands of grocery retail operations.
                </p>
                 <div className='py-0.5 bg-[#F29200]'></div>

                 <h3 className='text-2xl sm:text-3xl font-bold text-black'><span className='text-[#F29200]'>Grocery Stores</span> Business Solutions</h3>

                <p className='text-sm sm:text-md'>
                    At Crazy Merchants, we provide merchant accounts specifically tailored for grocery stores, ensuring smooth and reliable payment processing, reduced operational risk, and secure transactions for high-volume operations. Our solutions are designed to handle complex billing scenarios, recurring orders, and multiple sales channels, giving grocery businesses the stability and flexibility they need to grow and succeed.
                </p>


            </div>

            <img src="Groceries/Groceries.jpg" alt="Groceries_img" className='w-full max-w-md sm:max-w-lg lg:w-150 h-auto mx-auto rounded-4xl shadow-2xl' />


        </div>
      
    </div>
  )
}

export default GroceriesHighRisk   