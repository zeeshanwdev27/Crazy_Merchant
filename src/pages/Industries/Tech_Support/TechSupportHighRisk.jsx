import React from 'react'

function TechSupportHighRisk() {
  return (
    <div className='h-full min-h-[66vh]'>

        <div className='py-10 lg:py-20 px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col lg:flex-row gap-10 lg:gap-20'>

            <div className='flex flex-col gap-5 w-full max-w-2xl'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-normal lg:leading-13'>Why Is a <span className='text-[#F29200]'>Tech Support</span> Merchant Account Considered High-Risk?</h1>
                <p className='text-sm sm:text-md'>
                    The tech support industry often falls into the high-risk category, making it difficult for businesses to access stable and reliable payment solutions. Traditional banks and standard processors may hesitate to support tech support merchants due to factors such as remote service delivery, high dispute rates, and customers paying without face-to-face interaction. Issues like recurring billing disputes, refund requests, and the global nature of tech support services further increase the perceived risk.
                </p>
                 <div className='py-0.5 bg-[#F29200]'></div>

                 <h3 className='text-2xl sm:text-3xl font-bold text-black'><span className='text-[#F29200]'>Tech Support</span> Business Solutions</h3>

                <p className='text-sm sm:text-md'>
                    At Crazy Merchants, we provide merchant accounts specifically tailored for tech support businesses, ensuring smooth and reliable payment processing, reduced operational risk, and secure transactions for remote and high-volume service environments. Our solutions are designed to handle global payments, recurring billing, online transactions, and remote service charges—giving tech support companies the stability, speed, and flexibility they need to grow and succeed.
                </p>


            </div>

            <img src="TechSupport/techsupport.jpg" alt="techsupport_img" className='w-full max-w-md sm:max-w-lg lg:w-150 h-auto mx-auto rounded-4xl shadow-2xl' />


        </div>
      
    </div>
  )
}

export default TechSupportHighRisk   