import React from 'react'

function WhyTravelHighRisk() {
  return (
    <div className='h-full min-h-[66vh]'>

        <div className='py-10 lg:py-20 px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col lg:items-center lg:flex-row gap-10 lg:gap-20'>

            <img src="Travel/travel_img2.jpg" alt="travel_img" className='hidden lg:flex w-full max-w-md lg:max-w-2xl sm:max-w-lg lg:w-150 h-140 mx-auto rounded-4xl shadow-2xl' />

            <div className='flex flex-col gap-5 w-full max-w-2xl'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-normal lg:leading-13'>Why is a <span className='text-[#F29200]'>Travel Merchant Account</span> Labeled High-Risk?</h1>
                <p className='text-sm sm:text-md'>
                    Merchants in the travel industry face potential issues that cause payment processors and merchant services providers to label them as high-risk. Travel agencies, cruise companies, timeshare merchants, tour operators, and others in the travel industry accept a majority of payments well in advance of the delivery of the service. Most transactions are also made online or over the phone. These two factors lead to issues that payment processors are wary of, including:
                </p>

                <p className='text-sm sm:text-md'>
                    High Risk of Fraud: Because of the high volume of card not present transactions, travel merchants are at a higher risk of fraud than other industries.
                </p>

                 <p className='text-sm sm:text-md'>
                    High Chargeback Risk: Most travel services have a prolonged delivery time. Tour operators and travel agencies sell reservations for services that often won’t be delivered for two to three months. That leaves a long time for things to go wrong for the purchaser, or for them to change their mind, causing them to cancel or request a chargeback.
                </p>

                <p className='text-sm sm:text-md'>
                    High-Ticket Sales: On top of prolonged delivery times, travel merchants also sell expensive services, such as prolonged hotel stays or vacation packages. This means that if they request a refund or chargeback, it has a much greater impact on the travel merchant. It’s a big reason why many travel merchants fail, and why a merchant services provider considers them high-risk.
                </p>

                <p className='text-sm sm:text-md'>
                    Because of the reasons above, if you are looking for travel credit card processing, you’ll need to obtain a high-risk merchant account.
                </p>


            </div>

             <img src="Travel/travel_img2.jpg" alt="travel_img" className='lg:hidden flex w-full max-w-md  sm:max-w-lg lg:w-150 h-full mx-auto rounded-4xl shadow-2xl' />


            


        </div>
      
    </div>
  )
}

export default WhyTravelHighRisk   