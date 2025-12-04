import React from 'react'

function VapeSolutions() {
  return (
    <div className='h-full min-h-[66vh]'>

        <div className='py-10 lg:py-20 px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col lg:flex-row gap-10 lg:gap-20'>

            <div className='flex flex-col gap-5 w-full max-w-2xl'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-normal lg:leading-13'><span className='text-[#F29200]'>Vape Industry</span> Solutions</h1>
                <p className='text-sm sm:text-md'>
                    At Crazy Merchant, we specialize in providing merchant accounts tailored to the specific needs of the vape industry, ensuring you can process payments securely and efficiently.
                </p>
                 <div className='py-0.5 bg-[#F29200]'></div>

                 <h3 className='text-2xl sm:text-3xl font-bold text-black'>How do you know if your <span className='text-[#F29200]'>Vape business</span> has been categorized as a high-risk merchant?</h3>

                <p className='text-sm sm:text-md'>
                    A high-risk merchant account is essential for vape businesses that need to work with credit card processors. These specialized payment processing accounts are designed for merchants classified in high-risk categories, providing the necessary solutions for online credit card processing in the vape industry.
                </p>


            </div>

            <img src="Vape/vape_img1.jpg" alt="vape_img" className='w-full max-w-md sm:max-w-lg lg:max-w-2xl lg:w-150 h-auto mx-auto rounded-4xl shadow-2xl' />


        </div>
      
    </div>
  )
}

export default VapeSolutions   