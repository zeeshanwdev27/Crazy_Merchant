import React from 'react'

function HighRiskFeatures() {
  return (
    <div className='h-full min-h-[66vh]'>

        <div className='py-10 lg:py-20 px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col lg:flex-row gap-10 lg:gap-20'>

            <div className='flex flex-col gap-5 w-full max-w-3xl justify-center'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-normal lg:leading-13'>Why <span className='text-[#F29200]'>You Need</span> a Specialized <br /> <span className='text-[#F29200]'>High Risk Merchant</span> Account</h1>
                <p className='text-sm sm:text-md'>Traditional payment processors often don’t understand high-risk businesses. They apply one-size-fits-all rules that don’t work for your industry. We specialize in high-risk processing because we know these businesses need unique solutions. Our team has deep experience in regulatory compliance, risk management, and industry-specific challenges. This expertise means we can help you navigate common issues and find sustainable solutions.</p>
                 <div className='py-0.5 bg-[#F29200]'></div>

                 <h3 className='text-2xl sm:text-3xl font-bold text-black'>Real <span className='text-[#F29200]'>Benefits That Matter</span> to Your Business</h3>
                 <p className='text-sm sm:text-md'>Stop worrying about payment processing and focus on growing your business. Our solutions include practical benefits like chargeback prevention tools, fraud detection systems, and recurring billing options. We offer competitive rates despite high-risk classification, and we’re transparent about all fees upfront. Plus, you get a dedicated account manager who understands your industry and is available when you need help.</p>


            </div>

            <img src="HighRiskMerchant/HRMAbout/highriskmerchant.jpg" alt="highriskmerchant_img" className='w-full max-w-md sm:max-w-lg lg:max-w-2xl lg:w-150 object-cover h-auto mx-auto rounded-4xl shadow-2xl' />


        </div>
      
    </div>
  )
}

export default HighRiskFeatures   